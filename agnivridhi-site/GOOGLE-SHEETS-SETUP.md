# 📊 Google Sheets CRM Integration - Quick Setup Guide

## ✅ Why Google Sheets?
- ✨ **Free forever** - No subscription fees
- ⚡ **5-minute setup** - No complex API credentials
- 📱 **Access anywhere** - View on mobile, desktop, or tablet
- 🔄 **Real-time updates** - Instantly see new leads
- 📤 **Easy export** - Download as Excel, CSV, or PDF
- 🤝 **Team collaboration** - Share with your team

---

## 🚀 Step-by-Step Setup (5 Minutes)

### Step 1: Create Your Google Sheet (2 minutes)

1. Go to https://sheets.google.com/
2. Click **"+ Blank"** to create new sheet
3. Name it: **"Agnivridhi Consultation Leads"**
4. That's it! Your sheet is ready.

### Step 2: Add the Apps Script (2 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code you see
3. Open the file: **`google-sheets-script.js`** (in your project folder)
4. **Copy ALL the code** from that file
5. **Paste it** into the Apps Script editor
6. Click **💾 Save** (or Ctrl+S)
7. Name the project: **"Agnivridhi Form Handler"**

### Step 3: Deploy as Web App (1 minute)

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **"Web app"**
4. Configure:
   - **Description**: "Consultation Form API"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize** the script (Google will ask for permissions)
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)
8. Save this URL - you'll need it!

### Step 4: Setup Sheet Headers (30 seconds)

Option A - Manual:
1. In Row 1, add these headers (A to L):
   - A: **Timestamp**
   - B: **Full Name**
   - C: **Mobile**
   - D: **Email**
   - E: **Business Name**
   - F: **Business Type**
   - G: **Funding Required**
   - H: **Service Interested**
   - I: **Message**
   - J: **IP Address**
   - K: **User Agent**
   - L: **Reference ID**

Option B - Automated:
1. In Apps Script editor, find the function **`setupSheet()`**
2. Click **Run** (play button)
3. Authorize if prompted
4. Headers will be auto-formatted!

### Step 5: Update Your PHP File (1 minute)

1. Open: **`api/consultation-handler.php`**
2. Find lines 38-39:
   ```php
   define('GOOGLE_SHEETS_ENABLED', false);
   define('GOOGLE_SHEETS_URL', 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec');
   ```
3. Change to:
   ```php
   define('GOOGLE_SHEETS_ENABLED', true);
   define('GOOGLE_SHEETS_URL', 'PASTE_YOUR_WEB_APP_URL_HERE');
   ```
4. Save the file

---

## ✅ Testing Your Setup

### Test 1: Manual Test in Apps Script

1. In Apps Script editor, select **`doGet`** function from dropdown
2. Click **Run**
3. Check **Execution log** - should show success message
4. If errors, check authorization

### Test 2: Test from Website

1. Open your website
2. Click **"Get Started"** button
3. Fill out the form with test data:
   - Name: Test User
   - Mobile: 9999999999
   - Email: test@example.com
   - Select any options
4. Click **Submit**
5. Check your Google Sheet - new row should appear!

### Test 3: Check Email Notification

1. Look in your email inbox (and spam folder)
2. You should receive notification about the test submission
3. Email should show all lead details

---

## 🎨 Customize Your Sheet

### Color Coding (Automatic)
The script automatically colors rows based on funding:
- 🟢 **Green** - Above ₹1 Crore (high-value leads)
- 🟡 **Yellow** - ₹50L - ₹1Cr (medium-value)
- ⚪ **White** - Below ₹50L (standard)

### Add Custom Columns
You can add more columns like:
- **Status** (New, Contacted, Qualified, Won, Lost)
- **Follow-up Date**
- **Assigned To** (team member)
- **Notes**
- **Deal Value**

### Create Dashboard
1. Create a new sheet tab called "Dashboard"
2. Add formulas:
   ```
   Total Leads: =COUNTA(Leads!B:B)-1
   This Month: =COUNTIFS(Leads!A:A,">="&EOMONTH(TODAY(),-1)+1)
   High Value: =COUNTIF(Leads!G:G,"*Above 1 Crore*")
   ```

---

## 📧 Email Notifications Setup

The script includes automatic email notifications!

### Enable Notifications:
Already enabled by default! You'll receive:
- 📬 Instant email when form is submitted
- 📋 Full lead details in HTML format
- 📞 Click-to-call and click-to-email buttons
- 🎯 Reference ID for tracking

### Change Email Address:
In the Apps Script, find line:
```javascript
var recipient = 'info@agnivridhiindia.com';
```
Change to your preferred email.

### Add Multiple Recipients:
```javascript
var recipients = 'email1@example.com,email2@example.com';
MailApp.sendEmail({
  to: recipients,
  // ... rest of code
});
```

---

## 🔄 Data Management

### Export Data
1. **Download as Excel**: File → Download → Microsoft Excel (.xlsx)
2. **Download as CSV**: File → Download → Comma Separated Values (.csv)
3. **Download as PDF**: File → Download → PDF

### Import Old Data
1. Open CSV/Excel file with old leads
2. Copy data (without headers)
3. Paste into your Google Sheet starting from row 2

### Backup Your Data
**Automatic:**
- Google Sheets auto-saves every change
- Access version history: File → Version history

**Manual:**
- Download weekly backups
- Store in Google Drive folder

---

## 🔐 Security & Privacy

### Access Control
1. Click **Share** button (top right)
2. Add team members with appropriate access:
   - **Viewer** - Can only view, not edit
   - **Commenter** - Can add comments
   - **Editor** - Can edit data

### Link Sharing
1. Click **Share** → **Change to anyone with the link**
2. Set to **Restricted** for security
3. Only people you add can access

### Data Protection
- ✅ All data encrypted by Google
- ✅ 2-factor authentication supported
- ✅ Automatic backups
- ✅ Version history (30 days)
- ✅ Audit log available

---

## 📊 Sample Data View

After submissions, your sheet will look like:

| Timestamp | Full Name | Mobile | Email | Business Name | Funding Required | Service |
|-----------|-----------|--------|-------|---------------|------------------|---------|
| 2025-10-25 14:30 | Rajesh Kumar | 9876543210 | rajesh@example.com | Kumar Enterprises | ₹25-50 Lakhs | CGTMSE Loan |
| 2025-10-25 15:45 | Priya Sharma | 9123456789 | priya@example.com | Sharma Retail | ₹10-25 Lakhs | MUDRA Loan |

---

## 🎯 Advanced Features

### 1. Conditional Formatting
**Highlight urgent leads:**
1. Select column G (Funding Required)
2. Format → Conditional formatting
3. Format cells if: Text contains "Above 1 Crore"
4. Background color: Red

### 2. Filter Views
**Create custom views:**
1. Click filter icon
2. Filter by:
   - Business Type
   - Funding Range
   - Service Interested
3. Save as named range

### 3. Data Validation
**Add dropdown for status tracking:**
1. Add new column: "Status"
2. Select cells in Status column
3. Data → Data validation
4. Criteria: List of items
5. Items: New, Contacted, Qualified, Won, Lost

### 4. Formulas for Insights
```
// Conversion Rate
=COUNTIF(M:M,"Won")/COUNTA(B:B)*100

// Average Funding
=AVERAGE(IF(G:G<>"",VALUE(G:G)))

// Top Service
=INDEX(H:H,MODE(MATCH(H:H,H:H,0)))
```

---

## 🐛 Troubleshooting

### Issue: "Script not authorized"
**Solution:**
1. Go to Apps Script
2. Run any function
3. Click "Review Permissions"
4. Choose your Google account
5. Click "Advanced" → "Go to project"
6. Click "Allow"

### Issue: "No data appearing"
**Solution:**
1. Check Web App URL is correct in PHP
2. Test the Web App URL directly in browser
3. Check Apps Script execution logs
4. Verify "Who has access" is set to "Anyone"

### Issue: "Email not sending"
**Solution:**
1. Check your Gmail sending limits (500/day)
2. Verify recipient email in script
3. Check Gmail spam folder
4. Try sending test email from Apps Script

### Issue: "Timestamp showing wrong"
**Solution:**
1. File → Settings → Time zone
2. Select "India Standard Time (IST)"
3. Refresh the sheet

---

## 📈 Best Practices

### Daily Routine:
1. ✅ Check sheet for new leads (morning)
2. ✅ Call leads within 4 hours of submission
3. ✅ Update status column after contact
4. ✅ Add notes about conversation

### Weekly Routine:
1. ✅ Review conversion rates
2. ✅ Export data for backup
3. ✅ Clean up test entries
4. ✅ Update follow-up dates

### Monthly Routine:
1. ✅ Analyze top services requested
2. ✅ Review funding range trends
3. ✅ Calculate ROI from leads
4. ✅ Optimize form based on data

---

## 🚀 You're All Set!

Your Google Sheets CRM is now:
- ✅ Capturing leads automatically
- ✅ Sending email notifications
- ✅ Color-coding by value
- ✅ Accessible anywhere
- ✅ Easy to export/share

**Start collecting leads and growing your business!** 🎉

---

## 📞 Need Help?

**Can't get it working?**
- Check the main guide: `INTEGRATION_SETUP_GUIDE.md`
- Test with: `test-integrations.html`
- Email: tech@agnivridhiindia.com

**Want more features?**
Consider upgrading to Zoho CRM for:
- Advanced automation
- Sales pipeline
- Email campaigns
- Mobile app
- Reporting dashboards

---

**Setup Time:** 5 minutes  
**Cost:** FREE  
**Maintenance:** Minimal  
**Perfect for:** Small to medium businesses  

**Created for:** Agnivridhi India  
**Last Updated:** October 25, 2025
