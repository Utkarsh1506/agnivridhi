<?php
/**
 * Consultation Form Handler
 * Handles form submission, email notifications, and CRM integration
 * 
 * Required: PHP 7.4+, cURL extension
 */

// CORS Headers for API requests
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ==============================================
// CONFIGURATION - Update these with your details
// ==============================================

// Email Configuration
define('ADMIN_EMAIL', 'info@agnivridhiindia.com'); // Your admin email
define('FROM_EMAIL', 'noreply@agnivridhiindia.com'); // From email
define('FROM_NAME', 'Agnivridhi India');
define('REPLY_TO_EMAIL', 'info@agnivridhiindia.com');

// Zoho CRM Configuration (if using Zoho)
define('ZOHO_CRM_ENABLED', false); // Set to true when ready
define('ZOHO_ACCESS_TOKEN', 'your_zoho_access_token_here');
define('ZOHO_REFRESH_TOKEN', 'your_zoho_refresh_token_here');
define('ZOHO_CLIENT_ID', 'your_zoho_client_id_here');
define('ZOHO_CLIENT_SECRET', 'your_zoho_client_secret_here');

// Google Sheets Integration (Alternative to CRM)
define('GOOGLE_SHEETS_ENABLED', true); // Set to true when ready
define('GOOGLE_SHEETS_URL', 'https://script.google.com/macros/s/AKfycbzoZ4xX4i4zg1_3x1VbhsU7CQ3ayZmgAnehf_cFMip2J2bxCctIqXAFYBUYvc94ogrV/exec');

// reCAPTCHA Configuration
define('RECAPTCHA_SECRET_KEY', '6LePnfYrAAAAAHjH6VZUR3xuz7zGquuC7NItYY7O');

// SendGrid/SMTP Configuration (choose one)
define('USE_SENDGRID', false); // Set to true if using SendGrid
define('SENDGRID_API_KEY', 'your_sendgrid_api_key_here');

// ==============================================
// VALIDATION & SANITIZATION
// ==============================================

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validateMobile($mobile) {
    return preg_match('/^[0-9]{10}$/', $mobile);
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

// Verify reCAPTCHA
if (isset($input['recaptchaToken'])) {
    $recaptchaResponse = verifyRecaptcha($input['recaptchaToken']);
    if (!$recaptchaResponse['success']) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => 'reCAPTCHA verification failed. Please try again.'
        ]);
        exit;
    }
}

// Validate required fields
$requiredFields = ['fullName', 'mobile', 'email', 'businessType', 'fundingRequired', 'serviceInterested'];
$errors = [];

foreach ($requiredFields as $field) {
    if (empty($input[$field])) {
        $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
    }
}

// Validate email format
if (!empty($input['email']) && !validateEmail($input['email'])) {
    $errors[] = 'Invalid email format';
}

// Validate mobile format
if (!empty($input['mobile']) && !validateMobile($input['mobile'])) {
    $errors[] = 'Mobile number must be 10 digits';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Sanitize all inputs
$data = [
    'fullName' => sanitizeInput($input['fullName']),
    'mobile' => sanitizeInput($input['mobile']),
    'email' => sanitizeInput($input['email']),
    'businessName' => sanitizeInput($input['businessName'] ?? ''),
    'businessType' => sanitizeInput($input['businessType']),
    'fundingRequired' => sanitizeInput($input['fundingRequired']),
    'serviceInterested' => sanitizeInput($input['serviceInterested']),
    'message' => sanitizeInput($input['message'] ?? ''),
    'submittedAt' => date('Y-m-d H:i:s'),
    'ipAddress' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
    'userAgent' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
];

// ==============================================
// SAVE TO DATABASE (Optional)
// ==============================================
// Uncomment and configure if you want to save to database
/*
try {
    $pdo = new PDO('mysql:host=localhost;dbname=your_database', 'username', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO consultation_requests 
        (full_name, mobile, email, business_name, business_type, funding_required, service_interested, message, submitted_at, ip_address) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([
        $data['fullName'],
        $data['mobile'],
        $data['email'],
        $data['businessName'],
        $data['businessType'],
        $data['fundingRequired'],
        $data['serviceInterested'],
        $data['message'],
        $data['submittedAt'],
        $data['ipAddress']
    ]);
    
    $data['leadId'] = $pdo->lastInsertId();
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
}
*/

// ==============================================
// SEND ADMIN NOTIFICATION EMAIL
// ==============================================
$adminEmailSent = sendAdminNotification($data);

// ==============================================
// SEND AUTO-RESPONDER TO USER
// ==============================================
$userEmailSent = sendAutoResponder($data);

// ==============================================
// INTEGRATE WITH CRM
// ==============================================
$crmResult = ['success' => true, 'message' => 'CRM integration disabled'];

if (ZOHO_CRM_ENABLED) {
    $crmResult = pushToZohoCRM($data);
}

if (GOOGLE_SHEETS_ENABLED) {
    $sheetsResult = pushToGoogleSheets($data);
}

// ==============================================
// RESPONSE
// ==============================================
$response = [
    'success' => true,
    'message' => 'Thank you! We have received your consultation request.',
    'data' => [
        'referenceId' => uniqid('AGNI-'),
        'adminEmailSent' => $adminEmailSent,
        'autoResponderSent' => $userEmailSent,
        'crmIntegration' => $crmResult
    ]
];

echo json_encode($response);

// ==============================================
// HELPER FUNCTIONS
// ==============================================

function verifyRecaptcha($token) {
    $secretKey = RECAPTCHA_SECRET_KEY;
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    
    $data = [
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    return json_decode($response, true);
}

function sendAdminNotification($data) {
    $to = ADMIN_EMAIL;
    $subject = "New Consultation Request - {$data['fullName']}";
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0891b2; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
            .priority { background: #fef3c7; padding: 10px; border-left: 4px solid #f59e0b; margin-bottom: 15px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🎯 New Consultation Request</h2>
            </div>
            <div class='content'>
                <div class='priority'>
                    <strong>Action Required:</strong> New lead needs immediate follow-up!
                </div>
                
                <div class='field'>
                    <div class='label'>Full Name:</div>
                    <div class='value'>{$data['fullName']}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Mobile Number:</div>
                    <div class='value'><a href='tel:{$data['mobile']}'>{$data['mobile']}</a></div>
                </div>
                
                <div class='field'>
                    <div class='label'>Email Address:</div>
                    <div class='value'><a href='mailto:{$data['email']}'>{$data['email']}</a></div>
                </div>
                
                <div class='field'>
                    <div class='label'>Business Name:</div>
                    <div class='value'>{$data['businessName']}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Business Type:</div>
                    <div class='value'>{$data['businessType']}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Funding Required:</div>
                    <div class='value'><strong>{$data['fundingRequired']}</strong></div>
                </div>
                
                <div class='field'>
                    <div class='label'>Service Interested:</div>
                    <div class='value'><strong>{$data['serviceInterested']}</strong></div>
                </div>
                
                <div class='field'>
                    <div class='label'>Additional Details:</div>
                    <div class='value'>{$data['message']}</div>
                </div>
                
                <hr>
                
                <div class='field'>
                    <div class='label'>Submitted At:</div>
                    <div class='value'>{$data['submittedAt']}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>IP Address:</div>
                    <div class='value'>{$data['ipAddress']}</div>
                </div>
            </div>
            <div class='footer'>
                <p>This is an automated notification from Agnivridhi India website.</p>
                <p>Please respond to the client within 24 hours.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
        'Reply-To: ' . $data['email'],
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: 1',
        'Importance: High'
    ];
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

function sendAutoResponder($data) {
    $to = $data['email'];
    $subject = "Thank You for Your Consultation Request - Agnivridhi India";
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #ddd; }
            .highlight { background: #ecfeff; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .cta { background: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #ddd; }
            .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>🎉 Thank You, {$data['fullName']}!</h1>
                <p>We've received your consultation request</p>
            </div>
            <div class='content'>
                <p>Dear {$data['fullName']},</p>
                
                <p>Thank you for reaching out to <strong>Agnivridhi India</strong>. We've successfully received your consultation request for <strong>{$data['serviceInterested']}</strong>.</p>
                
                <div class='highlight'>
                    <h3>📋 Your Request Summary:</h3>
                    <ul>
                        <li><strong>Service:</strong> {$data['serviceInterested']}</li>
                        <li><strong>Funding Range:</strong> {$data['fundingRequired']}</li>
                        <li><strong>Business Type:</strong> {$data['businessType']}</li>
                    </ul>
                </div>
                
                <h3>What Happens Next?</h3>
                <ol>
                    <li>🔍 Our experts will review your requirements within <strong>24 hours</strong></li>
                    <li>📞 We'll contact you on <strong>{$data['mobile']}</strong> to discuss your needs</li>
                    <li>📊 We'll prepare a customized funding strategy for your business</li>
                    <li>🚀 We'll guide you through the entire application process</li>
                </ol>
                
                <div class='contact-info'>
                    <h3>Need Immediate Assistance?</h3>
                    <p>📞 Call us: <a href='tel:+919289555190'>+91 9289555190</a></p>
                    <p>📧 Email: <a href='mailto:info@agnivridhiindia.com'>info@agnivridhiindia.com</a></p>
                    <p>💬 WhatsApp: <a href='https://wa.me/919289555190'>+91 9289555190</a></p>
                </div>
                
                <p style='text-align: center; margin-top: 30px;'>
                    <a href='https://agnivridhiindia.com' class='cta'>Visit Our Website</a>
                </p>
                
                <p style='margin-top: 30px;'>We're committed to helping your business grow and succeed!</p>
                
                <p>Best regards,<br>
                <strong>The Agnivridhi India Team</strong></p>
            </div>
            <div class='footer'>
                <p><strong>Agnivridhi India Pvt. Ltd.</strong></p>
                <p>NX-ONE, TechZone 4, Greater Noida West, UP-201306</p>
                <p>📧 info@agnivridhiindia.com | 📞 +91 9289555190</p>
                <p style='margin-top: 15px; font-size: 11px;'>
                    This is an automated message. Please do not reply to this email.<br>
                    If you didn't request this consultation, please ignore this email.
                </p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
        'Reply-To: ' . REPLY_TO_EMAIL,
        'X-Mailer: PHP/' . phpversion()
    ];
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

function pushToZohoCRM($data) {
    // Refresh access token if needed
    $accessToken = refreshZohoToken();
    
    if (!$accessToken) {
        return ['success' => false, 'message' => 'Failed to get Zoho access token'];
    }
    
    $leadData = [
        'data' => [
            [
                'First_Name' => explode(' ', $data['fullName'])[0],
                'Last_Name' => explode(' ', $data['fullName'])[1] ?? '',
                'Email' => $data['email'],
                'Phone' => $data['mobile'],
                'Company' => $data['businessName'] ?: 'Not Provided',
                'Industry' => $data['businessType'],
                'Lead_Source' => 'Website - Consultation Form',
                'Description' => "Service: {$data['serviceInterested']}\nFunding: {$data['fundingRequired']}\n\n{$data['message']}",
                'Lead_Status' => 'New',
                '$currency_symbol' => '₹'
            ]
        ]
    ];
    
    $ch = curl_init('https://www.zohoapis.in/crm/v2/Leads');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($leadData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Zoho-oauthtoken ' . $accessToken,
        'Content-Type: application/json'
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    $result = json_decode($response, true);
    
    return [
        'success' => $httpCode === 201,
        'message' => $httpCode === 201 ? 'Lead added to Zoho CRM' : 'Failed to add lead to CRM',
        'details' => $result
    ];
}

function refreshZohoToken() {
    // Implement token refresh logic
    // This is a simplified version - you'll need to implement proper token management
    return ZOHO_ACCESS_TOKEN;
}

function pushToGoogleSheets($data) {
    $postData = [
        'fullName' => $data['fullName'],
        'mobile' => $data['mobile'],
        'email' => $data['email'],
        'businessName' => $data['businessName'],
        'businessType' => $data['businessType'],
        'fundingRequired' => $data['fundingRequired'],
        'serviceInterested' => $data['serviceInterested'],
        'message' => $data['message'],
        'timestamp' => $data['submittedAt']
    ];
    
    $ch = curl_init(GOOGLE_SHEETS_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

?>
