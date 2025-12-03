# 🔄 Update Your Google Apps Script (2 Minutes)

## ⚠️ IMPORTANT: You need to update your Apps Script!

The form now sends data via **GET request** (to avoid CORS errors), but your current script only handles POST requests.

---

## 📋 Quick Update Steps:

### 1. Open Your Apps Script
- Go to your Google Sheet
- Click **Extensions** → **Apps Script**

### 2. Replace the Code
- **Select ALL** the existing code (Ctrl+A)
- **Delete** it
- Open the file: `google-sheets-script.js` in this folder
- **Copy ALL** the code from that file
- **Paste** into Apps Script editor
- Click **💾 Save**

### 3. Re-deploy (REQUIRED!)
- Click **Deploy** → **Manage deployments**
- Click **✏️ (pencil icon)** next to your deployment
- Change **Version** to "New version"
- Click **Deploy**
- **Copy the NEW Web App URL** (it will be different!)

### 4. Update the JavaScript File
After getting the new URL, update `js/main.js`:
- Find line ~250: `var googleSheetsUrl = '...';`
- Replace with your NEW Web App URL

---

## ✅ What Changed?

### Before (POST - caused CORS error):
```javascript
$.ajax({
    url: 'your-url',
    method: 'POST',
    data: JSON.stringify(formData)
})
```

### After (GET - no CORS error):
```javascript
fetch(googleSheetsUrl + '?' + params.toString(), {
    method: 'GET',
    mode: 'no-cors'
})
```

### Apps Script Now Handles Both:
- **doPost()** - For POST requests (PHP backend)
- **doGet()** - For GET requests (direct from browser) ✨ NEW!

---

## 🎯 Why This Works:

- ✅ GET requests don't trigger CORS preflight
- ✅ Data sent as URL parameters (safe and simple)
- ✅ Works without any server
- ✅ Opens HTML files directly from folder
- ✅ Still saves everything to Google Sheets

---

## 🚀 After Update:

1. **Test the form** on your website
2. **Check Google Sheet** - new row should appear
3. **Check email** - you should get notification

---

## ❓ Need Help?

If you see errors:
1. Make sure you copied **ALL** the code from `google-sheets-script.js`
2. Make sure you clicked "Deploy" with "New version"
3. Make sure you updated the URL in `js/main.js`

**The updated script file is ready in your folder:**
`c:\Users\Admin\Downloads\agni\google-sheets-script.js`
