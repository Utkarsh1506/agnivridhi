# Google Drive Screenshot Upload Setup

## Overview
Payment screenshots are now uploaded directly to your Google Drive folder and the link is stored in the Google Sheet. This provides:
- ✅ Automatic file organization by month
- ✅ Shareable links for easy verification
- ✅ All files in one centralized location
- ✅ Reference ID in filename for easy tracking

## Your Drive Folder
**Folder Link**: https://drive.google.com/drive/folders/1UZEQ604YaunJBU966Da4A4lb-zRF7R1c?usp=sharing

### Folder Structure
```
Agnivridhi Payments/
├── 2025-01/
│   ├── payment_AGNI-20250127-ABC123.jpg
│   ├── payment_AGNI-20250127-XYZ789.png
│   └── ...
├── 2025-02/
│   └── ...
└── 2025-03/
    └── ...
```

Files are automatically organized into subfolders by year-month (YYYY-MM) for easy management.

## How It Works

### 1. User Flow
1. User selects paid consultation (Manager/Senior Manager/Branch Manager)
2. Payment section appears with QR code
3. User makes payment via UPI
4. User fills payment details (Transaction ID, UPI ID, Date, Time)
5. **User uploads payment screenshot** (JPG/PNG, max 5 MB)
6. Form submits via POST with multipart/form-data
7. Screenshot is automatically uploaded to Drive
8. Drive link is saved in Google Sheet

### 2. Backend Flow (Apps Script)
```javascript
// When file is uploaded:
1. Receive POST request with FormData
2. Extract file from request
3. Get/Create month subfolder (e.g., "2025-10")
4. Create filename: payment_[REFERENCE_ID].[ext]
5. Upload to Drive folder
6. Set sharing to "Anyone with link can view"
7. Get sharable URL
8. Save URL in Google Sheet column 16
```

### 3. Google Sheet Display
The payment screenshot URL will appear in the "Payment Screenshot URL" column as a clickable link:
- **With screenshot**: `https://drive.google.com/file/d/...`
- **Without screenshot**: (empty)

## Setup Instructions

### Step 1: Update Apps Script
1. Copy the updated code from `google-sheets-script.js`
2. Go to https://script.google.com
3. Open your existing project
4. Replace the code
5. **Important**: Make sure this line has your folder ID:
   ```javascript
   var DRIVE_FOLDER_ID = '1UZEQ604YaunJBU966Da4A4lb-zRF7R1c';
   ```
6. Save the project (Ctrl+S)

### Step 2: Set Drive Permissions
1. Go to your Drive folder
2. Click "Share" button
3. Under "General access", select: **Anyone with the link can view**
4. This allows the Apps Script to upload files and share them

### Step 3: Grant Apps Script Permissions
When you first deploy, Apps Script will ask for permissions:
1. **Google Sheets**: To write data
2. **Google Drive**: To upload files
3. Click "Advanced" → "Go to [Your Project]" → "Allow"

### Step 4: Deploy Web App
1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Description: "Drive upload enabled"
4. Execute as: **Me**
5. Who has access: **Anyone**
6. Click **Deploy**
7. Copy the new Web App URL (should be the same as before)

### Step 5: Test
1. Open your website
2. Fill consultation form with paid option
3. Upload a test screenshot
4. Submit form
5. Check:
   - ✅ Data appears in Google Sheet
   - ✅ Payment Screenshot URL column has Drive link
   - ✅ Click link to view uploaded image
   - ✅ File appears in Drive folder under correct month

## File Naming Convention
```
payment_[REFERENCE_ID].[extension]
```

Examples:
- `payment_AGNI-20251027-ABCD12.jpg`
- `payment_AGNI-20251027-XYZ789.png`

The reference ID matches the one in the Google Sheet, making it easy to find the corresponding screenshot.

## Troubleshooting

### Issue: "File not uploaded"
**Causes**:
- File size > 5 MB
- File is not an image (JPG/PNG)
- Apps Script doesn't have Drive permissions

**Solution**:
- Check file size and format
- Re-authorize Apps Script with Drive permissions
- Check Apps Script execution logs for errors

### Issue: "Screenshot URL is empty in Sheet"
**Causes**:
- File upload failed silently
- Drive folder ID is incorrect
- Permissions not granted

**Solution**:
1. Check Apps Script logs (Executions tab)
2. Verify folder ID: `1UZEQ604YaunJBU966Da4A4lb-zRF7R1c`
3. Ensure Drive folder is shared with "Anyone with link"

### Issue: "POST request shows empty parameters"
**Causes**:
- Using `mode: 'no-cors'` with POST
- Browser blocking FormData

**Solution**:
- **Removed** `mode: 'no-cors'` from POST requests
- POST now works correctly with default CORS settings
- Google Apps Script allows cross-origin POST by default

## Technical Details

### POST vs GET
- **POST with file**: Uses `multipart/form-data`, file uploaded to Drive
- **GET without file**: Uses URL parameters, no file upload

### File Size Limits
- **Browser**: 5 MB validation before upload
- **Google Apps Script**: 50 MB limit (we use 5 MB for user experience)
- **Google Drive**: Unlimited storage (within Drive quota)

### CORS Handling
Google Apps Script Web Apps automatically handle CORS for:
- ✅ GET requests
- ✅ POST requests
- ✅ File uploads via FormData

No special CORS configuration needed on the backend.

## Benefits

### For Admin
- 📁 All payment screenshots in one organized folder
- 📅 Automatic monthly organization
- 🔗 Direct links in Sheet for quick verification
- 🔍 Easy search by reference ID

### For Users
- 📤 Simple file upload in form
- ✅ Immediate confirmation of upload
- 📱 Works on mobile and desktop
- 🎯 One-step submission (no separate WhatsApp/email needed)

## Security & Privacy
- Files are stored in your private Drive folder
- Links are "Anyone with link can view" (not public/searchable)
- Only people with the link can access files
- Link is only in your Google Sheet (accessible only to you)

---
**Setup Date**: October 27, 2025  
**Drive Folder ID**: 1UZEQ604YaunJBU966Da4A4lb-zRF7R1c  
**Status**: ✅ READY TO DEPLOY
