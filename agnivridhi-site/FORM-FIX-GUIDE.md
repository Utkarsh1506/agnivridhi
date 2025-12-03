# 🔧 Form Fix Guide - Consultation & Contact Forms Not Working

**Issue:** Enquiry form and contact form details are not being sent to Google Sheets and email notifications are not being received.

---

## 🎯 Quick Diagnosis Checklist

Use the test file `test-form-debug.html` to identify the exact issue:

```
Open: test-form-debug.html in your browser
```

### Step 1: Test Google Sheets Connection
1. Click "Test Connection" button
2. ✅ If successful: Connection is working
3. ❌ If failed: See "Google Apps Script Issues" section

### Step 2: Test Forms
1. Submit test consultation form
2. Submit test contact form
3. Check your Google Sheet for new entries
4. Check your email (including spam) for notifications

---

## 🔍 Common Issues & Solutions

### Issue 1: Google Apps Script Not Deployed Properly

**Symptoms:**
- Forms submit but no data in Google Sheet
- No email notifications
- Console shows no errors (because of `no-cors` mode)

**Solution:**

1. **Go to Google Apps Script:**
   - Open your Google Sheet
   - Click Extensions → Apps Script

2. **Verify the Script:**
   - Check if `google-sheets-script.js` code is present
   - Look for the `doGet()` and `doPost()` functions

3. **Re-deploy the Web App:**
   ```
   Step 1: Click "Deploy" → "Manage deployments"
   Step 2: Click the pencil icon (✏️) to edit
   Step 3: Under "Version", select "New version"
   Step 4: Add description: "Fixed form submission"
   Step 5: Ensure:
      - Execute as: ME (your email)
      - Who has access: ANYONE
   Step 6: Click "Deploy"
   Step 7: COPY THE NEW URL
   ```

4. **Update the URL Everywhere:**
   
   Update in `js/main.js` (lines 396 and 541):
   ```javascript
   var googleSheetsUrl = 'YOUR_NEW_WEB_APP_URL_HERE';
   ```

### Issue 2: Script Permissions Not Granted

**Symptoms:**
- Script was deployed but not authorized
- Google showing permission warnings

**Solution:**

1. In Apps Script editor:
   - Select `doGet` function from dropdown
   - Click "Run" button
   - You'll see "Authorization required"

2. Click "Review Permissions"
3. Choose your Google account
4. Click "Advanced" → "Go to [Project Name]"
5. Click "Allow"
6. Try running again - should show success

### Issue 3: Email Sending Limits Reached

**Symptoms:**
- Data appears in Google Sheet
- No email notifications

**Solution:**

1. **Check Gmail sending limits:**
   - Free Gmail: 500 emails/day
   - Google Workspace: 2000 emails/day

2. **Verify email settings in Apps Script:**
   
   In `google-sheets-script.js`, find line ~250:
   ```javascript
   var recipient = 'info@agnivridhiindia.com';
   ```
   Make sure this is a valid email address.

3. **Check email quota:**
   ```javascript
   // Add this at the top of sendAdminNotification function
   Logger.log('Email quota remaining: ' + MailApp.getRemainingDailyQuota());
   ```

4. **Test email manually:**
   - In Apps Script, add this test function:
   ```javascript
   function testEmail() {
     MailApp.sendEmail({
       to: 'your-email@example.com',
       subject: 'Test Email',
       body: 'If you receive this, email works!'
     });
   }
   ```
   - Run this function
   - Check your inbox

### Issue 4: Field Name Mismatch

**Symptoms:**
- Some data appears in Google Sheet
- Some columns are empty

**Solution:**

The form fields MUST match exactly what the script expects. Check these mappings:

**Consultation Form Fields (index.html, contact.html):**
```html
<input name="fullName">      → Column B (Full Name)
<input name="mobile">        → Column C (Mobile)
<input name="email">         → Column D (Email)
<input name="businessName">  → Column E (Business Name)
<select name="businessType"> → Column F (Business Type)
<select name="serviceInterested"> → Column H (Service)
<textarea name="message">    → Column Q (Message)
```

**Contact Form Fields (contact.html):**
```html
<input id="contactName" name="fullName">
<input id="contactEmail" name="email">
<input id="contactPhone" name="mobile">
<input id="contactProject" name="businessName">
<input id="contactSubject" name="subject">  → Maps to serviceInterested
<textarea id="contactMessage" name="message">
```

### Issue 5: Google Sheet Structure Wrong

**Symptoms:**
- Data goes to wrong columns
- Email shows incorrect information

**Solution:**

1. **Run the setupSheet() function:**
   - In Apps Script editor
   - Select `setupSheet` from function dropdown
   - Click "Run"
   - This auto-creates proper headers

2. **Or manually verify headers (Row 1):**
   ```
   A: Timestamp
   B: Full Name
   C: Mobile
   D: Email
   E: Business Name
   F: Business Type
   G: Funding Required
   H: Service Interested
   I: Preferred Date
   J: Preferred Time
   K: Consult With
   L: Transaction ID
   M: UPI ID
   N: Payment Date
   O: Payment Time
   P: Payment Screenshot URL
   Q: Message
   R: IP Address
   S: User Agent
   T: Reference ID
   ```

### Issue 6: CORS / Network Issues

**Symptoms:**
- Forms show "network error"
- Browser console shows CORS errors

**Solution:**

The current implementation uses `mode: 'no-cors'` which is correct. If still having issues:

1. **Check browser console for errors:**
   - Press F12
   - Go to Console tab
   - Submit form
   - Look for red errors

2. **Try direct URL test:**
   - Copy your Web App URL
   - Add test parameters:
   ```
   YOUR_URL?fullName=Test&email=test@test.com&mobile=9999999999&businessType=Test&serviceInterested=Test&message=Test
   ```
   - Paste in browser and hit Enter
   - Check Google Sheet for entry

---

## ✅ Complete Fix Procedure

Follow these steps IN ORDER:

### Step 1: Verify Google Apps Script (5 minutes)

```bash
1. Open Google Sheet
2. Extensions → Apps Script
3. Confirm code is present
4. Select doGet function
5. Click Run
6. Grant permissions if asked
7. Check execution log for "success"
```

### Step 2: Redeploy Web App (3 minutes)

```bash
1. In Apps Script: Deploy → Manage deployments
2. Click pencil icon (edit)
3. Version: New version
4. Execute as: Me
5. Who has access: Anyone
6. Click Deploy
7. COPY THE NEW URL
```

### Step 3: Update All Files (5 minutes)

**File 1: `js/main.js`**
```javascript
// Line 396 - Consultation form
var googleSheetsUrl = 'PASTE_YOUR_NEW_URL_HERE';

// Line 541 - Contact form
var googleSheetsUrl = 'PASTE_YOUR_NEW_URL_HERE';
```

**File 2: `js/config.js`**
```javascript
window.AGNI_SHEETS_URL = 'PASTE_YOUR_NEW_URL_HERE';
```

**File 3: `api/config.php`** (if using PHP backend)
```php
define('GOOGLE_SHEETS_URL', 'PASTE_YOUR_NEW_URL_HERE');
```

### Step 4: Test Everything (10 minutes)

1. **Open `test-form-debug.html`** in browser
2. Click "Test Connection" - should pass
3. Submit test consultation form
4. Submit test contact form
5. Check Google Sheet - should have 2 new rows
6. Check email - should have 2 notifications

### Step 5: Test Live Forms

1. Open your website
2. Click "Get Started" button
3. Fill and submit consultation form
4. Go to contact page
5. Fill and submit contact form
6. Verify both in Google Sheet and email

---

## 🔧 Advanced Troubleshooting

### Enable Detailed Logging

Add this to your Apps Script at the top of `doGet()`:

```javascript
function doGet(e) {
  Logger.log('=== doGet called ===');
  Logger.log('Parameters received: ' + JSON.stringify(e.parameter));
  
  // ... rest of code
}
```

Then check logs:
1. In Apps Script: View → Execution logs
2. Look for your function calls
3. Check what parameters were received

### Test Email Function Separately

```javascript
function testEmailOnly() {
  var testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    mobile: '9999999999',
    businessName: 'Test Business',
    businessType: 'Startup',
    serviceInterested: 'Test Service',
    message: 'Test message',
    timestamp: new Date()
  };
  
  var referenceId = generateReferenceId();
  sendAdminNotification(testData, referenceId);
  sendAutoReply(testData, referenceId);
}
```

Run this function to test if emails work independently.

### Check Sheet Append

```javascript
function testSheetAppend() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var testRow = [
    new Date(),
    'Test Name',
    '9999999999',
    'test@test.com',
    'Test Business',
    'Startup',
    'Not specified',
    'Test Service',
    '', '', '', 'N/A', 'N/A', 'N/A', 'N/A', '',
    'Test message',
    'Unknown',
    'Unknown',
    'TEST-REF-123'
  ];
  
  sheet.appendRow(testRow);
  Logger.log('Test row appended. Check sheet!');
}
```

---

## 📧 Email Configuration Checklist

### Admin Notification Email

Located in `sendAdminNotification()` function (line ~254):

```javascript
var recipient = 'info@agnivridhiindia.com'; // ← Change this
```

**To add multiple recipients:**
```javascript
var recipients = 'email1@example.com,email2@example.com,email3@example.com';
MailApp.sendEmail({
  to: recipients,
  subject: subject,
  htmlBody: htmlBody
});
```

### Auto-Reply Email

Located in `sendAutoReply()` function (line ~450):

```javascript
MailApp.sendEmail({
  to: recipient,  // Customer's email
  replyTo: 'noreply@agnivridhiindia.com', // ← Change this
  subject: subject,
  htmlBody: htmlBody,
  name: 'Agnivridhi India'  // ← Change sender name if needed
});
```

---

## 🎯 Prevention Tips

### 1. Always Test After Changes
After ANY change to forms or scripts:
- Test with `test-form-debug.html`
- Submit a real form
- Verify data in sheet
- Check email notifications

### 2. Monitor Daily
- Check Google Sheet daily for new entries
- Monitor your email for notifications
- Review Apps Script execution logs weekly

### 3. Backup Your Sheet
- File → Make a copy (weekly)
- Download as Excel (monthly backup)

### 4. Keep Deployment URL Safe
- Save the Web App URL in a secure location
- Document it in your project notes
- Share only with team members who need it

---

## 📞 Still Not Working?

### Use the Debug Tool

1. Open `test-form-debug.html`
2. Check all tests systematically
3. Copy the debug log
4. Review the console errors

### Check These Common Mistakes

- [ ] Web App URL is correct and current
- [ ] "Who has access" is set to "Anyone"
- [ ] Script has been granted permissions
- [ ] Sheet has proper header row
- [ ] Email address is correct
- [ ] No typos in field names

### Manual Test via URL

Try submitting directly via URL (replace YOUR_URL):

```
YOUR_URL?fullName=ManualTest&email=manual@test.com&mobile=8888888888&businessType=Test&serviceInterested=Testing&message=DirectURLTest&timestamp=2025-01-01T00:00:00Z&source=Manual
```

Paste this in your browser. Check if a row appears in your sheet.

---

## ✅ Success Criteria

Your forms are working correctly when:

1. ✅ Submitting form shows success message
2. ✅ New row appears in Google Sheet within 5 seconds
3. ✅ Admin email notification received within 1 minute
4. ✅ Customer auto-reply email received within 1 minute
5. ✅ Reference ID is generated and displayed
6. ✅ All form fields map to correct columns
7. ✅ Color coding applies (if configured)

---

## 📚 Additional Resources

- **Google Apps Script Documentation:** https://developers.google.com/apps-script
- **Google Sheets API:** https://developers.google.com/sheets/api
- **MailApp Service:** https://developers.google.com/apps-script/reference/mail/mail-app

---

**Last Updated:** January 2025  
**Tested With:** Google Apps Script, Bootstrap 5, jQuery 3.6.4  
**Compatibility:** All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🎉 Quick Win

**The fastest way to fix everything:**

1. Open Google Apps Script
2. Deploy → New deployment → Web app
3. Execute as: Me, Access: Anyone
4. Copy new URL
5. Replace in `js/main.js` (2 places)
6. Test with `test-form-debug.html`
7. Done! ✅
