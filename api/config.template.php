/**
 * Configuration File for Agnivridhi India Integrations
 * 
 * IMPORTANT: Never commit this file to Git with real credentials!
 * Add to .gitignore: config.php
 * 
 * Copy this file to: api/config.php
 * Fill in your actual credentials below
 */

<?php

// ============================================
// 1. GOOGLE reCAPTCHA v3
// ============================================
// Get keys from: https://www.google.com/recaptcha/admin
define('RECAPTCHA_SITE_KEY', '6LfYourSiteKeyHere_REPLACE_ME');
define('RECAPTCHA_SECRET_KEY', 'YourSecretKeyHere_REPLACE_ME');

// ============================================
// 2. GOOGLE ANALYTICS 4 (GA4)
// ============================================
// Get from: https://analytics.google.com/
define('GA4_MEASUREMENT_ID', 'G-XXXXXXXXXX'); // Replace with your Measurement ID

// ============================================
// 3. GOOGLE TAG MANAGER
// ============================================
// Get from: https://tagmanager.google.com/
define('GTM_CONTAINER_ID', 'GTM-XXXXXXX'); // Replace with your Container ID

// ============================================
// 4. FACEBOOK PIXEL
// ============================================
// Get from: Facebook Business Manager → Events Manager
define('FACEBOOK_PIXEL_ID', 'YOUR_PIXEL_ID_HERE'); // Replace with your Pixel ID

// ============================================
// 5. GOOGLE ADS CONVERSION
// ============================================
// Get from: Google Ads → Tools & Settings → Measurement → Conversions
define('GOOGLE_ADS_CONVERSION_ID', 'AW-XXXXXXXXX');
define('GOOGLE_ADS_CONVERSION_LABEL', 'XXXXXXXXXXXXXX');

// ============================================
// 6. EMAIL CONFIGURATION
// ============================================
define('ADMIN_EMAIL', 'info@agnivridhiindia.com'); // Where to receive notifications
define('FROM_EMAIL', 'noreply@agnivridhiindia.com'); // Must be from your domain
define('FROM_NAME', 'Agnivridhi India');
define('REPLY_TO_EMAIL', 'info@agnivridhiindia.com');

// ============================================
// 7. SENDGRID (Optional - for reliable email delivery)
// ============================================
define('USE_SENDGRID', false); // Set to true if using SendGrid
define('SENDGRID_API_KEY', 'SG.XXXXXXXXXXXXXXXXXXXX'); // Get from SendGrid dashboard

// ============================================
// 8. ZOHO CRM INTEGRATION
// ============================================
define('ZOHO_CRM_ENABLED', false); // Set to true when ready
define('ZOHO_ACCESS_TOKEN', 'your_zoho_access_token');
define('ZOHO_REFRESH_TOKEN', 'your_zoho_refresh_token');
define('ZOHO_CLIENT_ID', 'your_zoho_client_id');
define('ZOHO_CLIENT_SECRET', 'your_zoho_client_secret');
define('ZOHO_DOMAIN', 'https://www.zohoapis.in'); // Change for EU: .eu or AU: .com.au

// ============================================
// 9. GOOGLE SHEETS INTEGRATION (Alternative to CRM)
// ============================================
define('GOOGLE_SHEETS_ENABLED', false); // Set to true when ready
define('GOOGLE_SHEETS_URL', 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec');

// ============================================
// 10. DATABASE CONFIGURATION (Optional)
// ============================================
define('USE_DATABASE', false); // Set to true if storing in database
define('DB_HOST', 'localhost');
define('DB_NAME', 'agnivridhi_db');
define('DB_USER', 'your_db_username');
define('DB_PASS', 'your_db_password');

// ============================================
// 11. WHATSAPP BUSINESS API (Optional)
// ============================================
define('WHATSAPP_ENABLED', false);
define('WHATSAPP_API_KEY', 'your_whatsapp_api_key');
define('WHATSAPP_PHONE_NUMBER', '919289555190');

// ============================================
// 12. SMS NOTIFICATION (Optional)
// ============================================
define('SMS_ENABLED', false);
define('SMS_API_KEY', 'your_sms_api_key'); // e.g., Twilio, MSG91
define('SMS_SENDER_ID', 'AGNI');
define('SMS_ADMIN_NUMBERS', ['+919289555190']); // Array of numbers to notify

// ============================================
// 13. SLACK NOTIFICATION (Optional)
// ============================================
define('SLACK_ENABLED', false);
define('SLACK_WEBHOOK_URL', 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL');

// ============================================
// 14. RATE LIMITING & SECURITY
// ============================================
define('RATE_LIMIT_ENABLED', true);
define('MAX_SUBMISSIONS_PER_IP', 5); // Max submissions per IP per hour
define('COOLDOWN_MINUTES', 15); // Minutes between submissions from same IP

// ============================================
// 15. FORM CONFIGURATION
// ============================================
define('FORM_TIMEOUT_SECONDS', 30); // Max time to fill form (anti-bot)
define('MIN_FILL_TIME_SECONDS', 5); // Min time to fill form (anti-bot)
define('ENABLE_HONEYPOT', true); // Hidden field for bot detection

// ============================================
// 16. NOTIFICATION PREFERENCES
// ============================================
define('NOTIFY_ADMIN_EMAIL', true);
define('NOTIFY_ADMIN_SMS', false);
define('NOTIFY_ADMIN_SLACK', false);
define('SEND_USER_AUTO_RESPONDER', true);

// ============================================
// 17. BACKUP & LOGGING
// ============================================
define('LOG_SUBMISSIONS', true);
define('LOG_FILE_PATH', __DIR__ . '/logs/submissions.log');
define('BACKUP_TO_CSV', true);
define('CSV_BACKUP_PATH', __DIR__ . '/backups/');

// ============================================
// 18. BUSINESS HOURS (Optional)
// ============================================
define('BUSINESS_HOURS_ENABLED', false);
define('BUSINESS_START_HOUR', 9); // 9 AM
define('BUSINESS_END_HOUR', 18); // 6 PM
define('BUSINESS_DAYS', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if currently within business hours
 */
function isBusinessHours() {
    if (!BUSINESS_HOURS_ENABLED) return true;
    
    $currentHour = (int)date('G');
    $currentDay = date('l');
    
    return in_array($currentDay, BUSINESS_DAYS) && 
           $currentHour >= BUSINESS_START_HOUR && 
           $currentHour < BUSINESS_END_HOUR;
}

/**
 * Get appropriate auto-responder message based on business hours
 */
function getAutoResponderMessage() {
    if (isBusinessHours()) {
        return "Our team will contact you within 2-4 hours.";
    } else {
        return "We've received your request outside business hours. Our team will contact you on the next business day.";
    }
}

/**
 * Format Indian mobile number
 */
function formatIndianMobile($mobile) {
    $mobile = preg_replace('/[^0-9]/', '', $mobile);
    if (strlen($mobile) === 10) {
        return '+91' . $mobile;
    }
    return $mobile;
}

/**
 * Sanitize email
 */
function sanitizeEmail($email) {
    return filter_var($email, FILTER_SANITIZE_EMAIL);
}

/**
 * Generate unique reference ID
 */
function generateReferenceId() {
    return 'AGNI-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 6));
}

?>

<!-- 
SETUP CHECKLIST:
----------------
□ 1. Get Google reCAPTCHA v3 keys
□ 2. Set up Google Analytics 4
□ 3. Create Google Tag Manager container
□ 4. Add Facebook Pixel (if using Facebook Ads)
□ 5. Configure email settings (test with real email)
□ 6. Choose CRM: Zoho OR Google Sheets
□ 7. Set up chosen CRM integration
□ 8. Create database (if storing submissions)
□ 9. Test form submission completely
□ 10. Set up monitoring and alerts

TESTING:
--------
1. Submit test form
2. Verify email receipt (admin + user)
3. Check analytics event in GA4 real-time
4. Verify CRM/Sheets entry
5. Check reCAPTCHA score (should be > 0.5)
6. Test with invalid data (should show errors)
7. Test rate limiting (multiple quick submissions)

SECURITY:
---------
- Add this file to .gitignore
- Use strong passwords for database
- Keep API keys secure
- Regular security updates
- Monitor for suspicious activity
- Implement SSL/HTTPS
- Regular backups

MAINTENANCE:
-----------
- Monitor email delivery rates
- Check CRM sync status weekly
- Review form analytics monthly
- Update credentials when expired
- Clean up test data regularly
- Archive old submissions
-->
