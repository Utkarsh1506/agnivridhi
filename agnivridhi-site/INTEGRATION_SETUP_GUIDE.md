# 🚀 Complete Integration Setup Guide
## Agnivridhi India - Consultation Form System

This guide will help you configure all integrations for the consultation form including email notifications, CRM, Google Analytics, and reCAPTCHA.

---

## 📋 Table of Contents
1. [Google reCAPTCHA v3 Setup](#1-google-recaptcha-v3-setup)
2. [Google Analytics 4 (GA4) Setup](#2-google-analytics-4-ga4-setup)
3. [Google Tag Manager Setup](#3-google-tag-manager-setup)
4. [Facebook Pixel Setup](#4-facebook-pixel-setup)
5. [Email Configuration (PHP Mail)](#5-email-configuration-php-mail)
6. [Zoho CRM Integration](#6-zoho-crm-integration)
7. [Google Sheets Integration](#7-google-sheets-integration-alternative)
8. [Database Setup (Optional)](#8-database-setup-optional)
9. [Testing the Complete System](#9-testing-the-complete-system)

---

## 1. Google reCAPTCHA v3 Setup

### Step 1: Get reCAPTCHA Keys
1. Go to https://www.google.com/recaptcha/admin
2. Click "+" to create a new site
3. Fill in:
   - **Label**: Agnivridhi India
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domain (e.g., `agnivridhiindia.com`)
4. Accept terms and submit
5. Copy both **Site Key** and **Secret Key**

### Step 2: Update Your Files

**In `index.html` (and all other HTML pages):**
```html
<!-- Replace this line (around line 36): -->
<script src="https://www.google.com/recaptcha/api.js?render=6LfYourSiteKeyHere"></script>

<!-- With: -->
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_ACTUAL_SITE_KEY"></script>
```

**In `js/main.js` (line ~199):**
```javascript
// Replace:
grecaptcha.execute('6LfYourSiteKeyHere', {action: 'consultation'})

// With:
grecaptcha.execute('YOUR_ACTUAL_SITE_KEY', {action: 'consultation'})
```

**In `api/consultation-handler.php` (line 48):**
```php
// Replace:
define('RECAPTCHA_SECRET_KEY', 'your_recaptcha_secret_key_here');

// With:
define('RECAPTCHA_SECRET_KEY', 'YOUR_ACTUAL_SECRET_KEY');
```

---

## 2. Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Property
1. Go to https://analytics.google.com/
2. Click **Admin** (bottom left)
3. Click **Create Property**
4. Fill in property details:
   - Property name: "Agnivridhi India"
   - Time zone: India Standard Time
   - Currency: INR
5. Click **Next** and complete setup
6. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Update HTML Files

**In `index.html` (line 13):**
```html
<!-- Replace both instances: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
        'send_page_view': true,
        'cookie_flags': 'SameSite=None;Secure'
    });
</script>

<!-- With your actual Measurement ID -->
```

### Step 3: Set Up Conversion Tracking (Optional)

**In `js/main.js` (line ~252):**
```javascript
// For Google Ads Conversion Tracking:
gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXX', // Your conversion ID/Label
    'value': 1.0,
    'currency': 'INR',
    'transaction_id': response.data?.referenceId || ''
});
```

To get your conversion ID:
1. Go to Google Ads
2. Tools & Settings → Measurement → Conversions
3. Create a new conversion action
4. Copy the conversion ID and label

---

## 3. Google Tag Manager Setup

### Step 1: Create GTM Account
1. Go to https://tagmanager.google.com/
2. Create a new account
3. Container name: "Agnivridhi India"
4. Target platform: Web
5. Copy your **Container ID** (format: GTM-XXXXXXX)

### Step 2: Update HTML Files

**In `index.html` (line 6 and after opening body tag):**
```html
<!-- HEAD section (line 6): -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Replace GTM-XXXXXXX with your Container ID -->

<!-- BODY section (right after <body>): -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Step 3: Configure GTM (in GTM Dashboard)
1. Add Google Analytics 4 Configuration Tag
2. Add Form Submission Trigger
3. Add Event Tags for conversions
4. Publish the container

---

## 4. Facebook Pixel Setup

### Step 1: Create Facebook Pixel
1. Go to Facebook Business Manager: https://business.facebook.com/
2. Go to Events Manager
3. Click "Connect Data Sources" → "Web"
4. Choose "Facebook Pixel" and click "Connect"
5. Name your pixel: "Agnivridhi India"
6. Copy your **Pixel ID**

### Step 2: Update HTML Files

**In `index.html` (line 29):**
```html
<!-- Replace both instances: -->
fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');

<!-- And: -->
src="https://www.facebook.com/tr?id=YOUR_FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"

<!-- With your actual Pixel ID -->
```

---

## 5. Email Configuration (PHP Mail)

### Step 1: Update PHP Configuration

**In `api/consultation-handler.php`:**

```php
// Lines 25-28:
define('ADMIN_EMAIL', 'info@agnivridhiindia.com'); // Your receiving email
define('FROM_EMAIL', 'noreply@agnivridhiindia.com'); // Must be from your domain
define('FROM_NAME', 'Agnivridhi India');
define('REPLY_TO_EMAIL', 'info@agnivridhiindia.com');
```

### Step 2: Ensure PHP Mail is Configured

**Option A: Use SendGrid (Recommended for reliability)**

1. Sign up at https://sendgrid.com/ (Free tier: 100 emails/day)
2. Get your API key
3. Update in `consultation-handler.php`:

```php
define('USE_SENDGRID', true);
define('SENDGRID_API_KEY', 'YOUR_SENDGRID_API_KEY');
```

4. Install SendGrid PHP library:
```bash
composer require sendgrid/sendgrid
```

**Option B: Use SMTP Configuration**

If your hosting has SMTP, configure it in PHP.ini or use PHPMailer library.

### Step 3: Test Email Delivery

Run this test script:
```php
<?php
mail('your-email@example.com', 'Test', 'This is a test email');
?>
```

---

## 6. Zoho CRM Integration

### Step 1: Get Zoho CRM API Credentials

1. Go to https://api-console.zoho.in/
2. Click "Add Client"
3. Choose "Server-based Applications"
4. Fill in:
   - Client Name: Agnivridhi India
   - Homepage URL: https://agnivridhiindia.com
   - Authorized Redirect URI: https://agnivridhiindia.com/zoho-callback
5. Copy **Client ID** and **Client Secret**

### Step 2: Generate Tokens

1. Generate authorization code:
```
https://accounts.zoho.in/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=https://agnivridhiindia.com/zoho-callback
```

2. Get access token:
```bash
curl -X POST https://accounts.zoho.in/oauth/v2/token \
  -d "code=AUTHORIZATION_CODE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=https://agnivridhiindia.com/zoho-callback" \
  -d "grant_type=authorization_code"
```

### Step 3: Update PHP Configuration

**In `api/consultation-handler.php` (lines 31-35):**

```php
define('ZOHO_CRM_ENABLED', true); // Enable Zoho integration
define('ZOHO_ACCESS_TOKEN', 'YOUR_ACCESS_TOKEN');
define('ZOHO_REFRESH_TOKEN', 'YOUR_REFRESH_TOKEN');
define('ZOHO_CLIENT_ID', 'YOUR_CLIENT_ID');
define('ZOHO_CLIENT_SECRET', 'YOUR_CLIENT_SECRET');
```

### Step 4: Implement Token Refresh

Create a cron job to refresh tokens every 50 minutes:
```bash
*/50 * * * * php /path/to/refresh-zoho-token.php
```

---

## 7. Google Sheets Integration (Alternative)

This is a simpler alternative to CRM if you want to store leads in Google Sheets.

### Step 1: Create Google Sheet

1. Create a new Google Sheet
2. Add headers: Full Name | Mobile | Email | Business Name | Business Type | Funding Required | Service Interested | Message | Timestamp

### Step 2: Create Google Apps Script

1. In your sheet, go to **Extensions** → **Apps Script**
2. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  
  sheet.appendRow([
    data.fullName,
    data.mobile,
    data.email,
    data.businessName,
    data.businessType,
    data.fundingRequired,
    data.serviceInterested,
    data.message,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    'success': true,
    'message': 'Data added to sheet'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as web app:
   - Click **Deploy** → **New deployment**
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the **Web App URL**

### Step 3: Update PHP Configuration

**In `api/consultation-handler.php` (lines 38-39):**

```php
define('GOOGLE_SHEETS_ENABLED', true);
define('GOOGLE_SHEETS_URL', 'YOUR_GOOGLE_APPS_SCRIPT_URL');
```

---

## 8. Database Setup (Optional)

If you want to store form submissions in a database:

### Step 1: Create Database Table

```sql
CREATE TABLE consultation_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
    business_name VARCHAR(255),
    business_type VARCHAR(100) NOT NULL,
    funding_required VARCHAR(100) NOT NULL,
    service_interested VARCHAR(255) NOT NULL,
    message TEXT,
    submitted_at DATETIME NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    reference_id VARCHAR(50),
    status ENUM('new', 'contacted', 'qualified', 'converted', 'lost') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_mobile (mobile),
    INDEX idx_status (status),
    INDEX idx_submitted (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Step 2: Update PHP Configuration

**In `api/consultation-handler.php` (around line 130, uncomment the database section):**

```php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=agnivridhi_db', 'your_username', 'your_password');
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
```

---

## 9. Testing the Complete System

### Step 1: Test Form Submission

1. Open your website in a browser
2. Click "Get Started" button
3. Fill out the form with test data
4. Submit and check:
   - ✅ Success message appears
   - ✅ Reference ID is shown

### Step 2: Verify Email Delivery

Check both:
- **Admin Email**: Should receive notification with lead details
- **User Email**: Should receive auto-responder confirmation

### Step 3: Verify Analytics Tracking

**Google Analytics:**
1. Go to GA4 Real-time reports
2. Submit form
3. Check if "form_submission" event appears

**Facebook Pixel:**
1. Install Facebook Pixel Helper extension
2. Submit form
3. Check if "Lead" event fires

### Step 4: Verify CRM Integration

**Zoho CRM:**
1. Go to Zoho CRM → Leads
2. Check if new lead appears
3. Verify all fields are populated

**Google Sheets:**
1. Check your Google Sheet
2. New row should appear with form data

### Step 5: Test reCAPTCHA

1. Open browser console (F12)
2. Submit form
3. Check for reCAPTCHA token in network tab
4. Score should be > 0.5 (higher is better)

---

## 🔧 Troubleshooting

### Issue: Emails not sending

**Solution:**
- Check PHP error logs: `tail -f /var/log/php-errors.log`
- Verify FROM_EMAIL uses your domain
- Test with a simple mail() function
- Consider using SendGrid for reliability

### Issue: reCAPTCHA not working

**Solution:**
- Verify Site Key is correct
- Check browser console for errors
- Ensure domain is added in reCAPTCHA admin
- Test in incognito mode

### Issue: Analytics events not tracking

**Solution:**
- Check browser console for gtag errors
- Verify Measurement ID is correct
- Use Google Tag Assistant extension
- Check if ad blockers are interfering

### Issue: CRM integration failing

**Solution:**
- Check API credentials are correct
- Verify access token is not expired
- Check PHP error logs for API errors
- Test API endpoint with Postman

### Issue: CORS errors

**Solution:**
- Add proper CORS headers in PHP file (already included)
- If using subdomain for API, update CORS origin
- Check server configuration (.htaccess)

---

## 📊 Monitoring & Maintenance

### Daily Tasks:
- Check email inbox for new leads
- Respond to consultation requests within 24 hours
- Monitor CRM for new entries

### Weekly Tasks:
- Review Google Analytics conversion rates
- Check form submission trends
- Verify email delivery rates
- Clean up test entries in CRM/database

### Monthly Tasks:
- Refresh Zoho CRM tokens (if using manual refresh)
- Review and optimize form fields based on completion rates
- Analyze which services get most inquiries
- Update auto-responder template if needed

---

## 🚀 Quick Start Checklist

- [ ] Set up Google reCAPTCHA v3 (Site Key + Secret Key)
- [ ] Configure Google Analytics 4 (Measurement ID)
- [ ] Set up Google Tag Manager (Container ID)
- [ ] Add Facebook Pixel (Pixel ID)
- [ ] Configure email settings (Admin email + SMTP/SendGrid)
- [ ] Choose CRM: Zoho or Google Sheets
- [ ] Set up CRM integration (API credentials)
- [ ] Create database table (if using database)
- [ ] Update all configuration files
- [ ] Test form submission end-to-end
- [ ] Verify email delivery (admin + user)
- [ ] Check analytics tracking
- [ ] Verify CRM/Sheets integration
- [ ] Set up monitoring and alerts

---

## 📞 Support

If you need help with any integration:
- Email: tech@agnivridhiindia.com
- Documentation: Check provider's official docs
- Community: Stack Overflow for technical issues

---

## 🔐 Security Best Practices

1. **Never commit sensitive credentials to Git**
   - Use environment variables
   - Keep API keys in separate config file
   - Add config file to .gitignore

2. **Implement rate limiting**
   - Limit form submissions per IP
   - Add cooldown period between submissions

3. **Validate all inputs**
   - Server-side validation is critical
   - Sanitize data before storage
   - Use prepared statements for database

4. **Use HTTPS everywhere**
   - Ensure SSL certificate is valid
   - Force HTTPS redirects
   - Set secure cookie flags

5. **Regular updates**
   - Keep PHP and libraries updated
   - Monitor for security vulnerabilities
   - Review access logs regularly

---

**Last Updated:** October 25, 2025
**Version:** 1.0.0
