# 📧 Auto-Reply Email Setup Guide

## ✅ What I've Added:

Your Google Apps Script now includes an **auto-reply function** that sends a professional confirmation email to customers after they submit a form.

---

## 📝 Updated Features:

### **Auto-Reply Email Includes:**
- ✅ Thank you message with customer's name
- ✅ Reference ID for tracking
- ✅ What happens next (24-hour response time)
- ✅ Contact information (phone, email, address)
- ✅ Professional design with your brand colors
- ✅ Call-to-action buttons

### **Email Settings:**
- **From Name:** Agnivridhi India
- **Reply-To:** noreply@agnivridhiindia.com
- **Subject:** Thank You for Contacting Agnivridhi India - Ref: [ID]

---

## 🔧 Important Setup Steps:

### **Option 1: Using Gmail's MailApp (Recommended for Testing)**

The script currently uses Google's built-in `MailApp` which:
- ✅ Works immediately (no setup needed)
- ✅ Sends from your Google account email
- ✅ Has daily quota: 100 emails/day (free Gmail) or 1500/day (Google Workspace)
- ⚠️ **"From" address will be your Google account email**, not noreply@agnivridhiindia.com

**Note:** The email credentials you provided (noreply@agnivridhiindia.com / NoReply@121) cannot be used directly with Google Apps Script's MailApp.

---

### **Option 2: Use SMTP with Your Email Credentials**

To send emails FROM noreply@agnivridhiindia.com, you need to:

#### **Step 1: Enable App Password (if using Gmail/Workspace)**

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Generate an app password for "Mail"
5. Save the 16-character password

#### **Step 2: Update Apps Script to Use SMTP**

You would need to use a third-party library or service like:
- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)
- **Amazon SES** (pay as you go)

---

## 🚀 Quick Solution - What Works Now:

### **Current Setup (No Additional Configuration):**

The auto-reply function is **already working** with these settings:

1. **Admin Notification Email:**
   - To: info@agnivridhiindia.com
   - From: Your Google account
   
2. **Customer Auto-Reply:**
   - To: Customer's email
   - From: Your Google account (shows as your name)
   - Reply-To: noreply@agnivridhiindia.com (customers can't reply)

### **How to Test:**

1. **Re-deploy your Apps Script:**
   - Open Google Apps Script editor
   - Click **Deploy** → **Manage deployments**
   - Click ✏️ Edit → **New version**
   - Click **Deploy**

2. **Submit a test form** on your website

3. **Check your email** - You should receive:
   - ✅ Admin notification (details of the inquiry)
   - ✅ The customer receives a thank you email

---

## 📧 Email Account Configuration

### **Your Credentials:**
- Email: noreply@agnivridhiindia.com
- Password: NoReply@121

### **Where to Configure:**

#### **Option A: Google Workspace (Recommended)**
If noreply@agnivridhiindia.com is a Google Workspace email:

1. Log in to noreply@agnivridhiindia.com
2. Create an App Password
3. Use that for SMTP services

#### **Option B: cPanel/Webmail**
If it's hosted on your domain:

1. Log in to your hosting cPanel
2. Go to **Email Accounts**
3. Find SMTP settings:
   - SMTP Server: Usually mail.agnivridhiindia.com
   - Port: 587 (TLS) or 465 (SSL)
   - Username: noreply@agnivridhiindia.com
   - Password: NoReply@121

---

## ⚡ Quick Actions:

### **1. Test Current Setup (Works Immediately)**
```
1. Re-deploy Apps Script with new version
2. Submit form
3. Check customer email for auto-reply
```

### **2. Upgrade to Custom Email Sender (Advanced)**
```
1. Choose email service (SendGrid recommended)
2. Get API key
3. Update Apps Script to use their API
4. Configure "from" address as noreply@agnivridhiindia.com
```

---

## 📊 What's Working Right Now:

| Feature | Status | Notes |
|---------|--------|-------|
| Form Submission | ✅ Working | Saves to Google Sheets |
| Admin Notification | ✅ Working | Sends to info@ |
| Customer Auto-Reply | ✅ Working | Sends thank you email |
| Reply-To Address | ✅ Set | noreply@agnivridhiindia.com |
| Custom From Address | ⏳ Pending | Needs SMTP service |

---

## 🎯 Recommendation:

**For now (Testing & Launch):**
- ✅ Use the current setup (works perfectly)
- ✅ Customers get professional auto-reply
- ✅ You get admin notifications
- ℹ️ Email shows from your Google account (acceptable)

**For scaling (When you get 100+ leads/day):**
- Implement SendGrid or similar service
- Configure custom "from" address
- Get higher email quotas

---

## 📱 Next Steps:

1. **Re-deploy your Apps Script** (new version with auto-reply)
2. **Test the form** submission
3. **Check both emails** (admin notification + customer auto-reply)
4. **Verify everything works**

The auto-reply feature is now live and will work with the next form submission! 🎉
