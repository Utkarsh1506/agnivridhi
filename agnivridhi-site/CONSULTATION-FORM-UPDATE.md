# Consultation Form Update - October 2025

## Summary of Changes

The consultation/enquiry form has been enhanced with new fields for scheduling consultations and payment processing.

---

## New Features Added

### 1. **Service Options Expanded**
Added new services to the dropdown:
- Certification Service
- Business Registration
- Grants

### 2. **Scheduling Fields**
- **Preferred Date**: Date picker for consultation appointment
- **Preferred Time Slot**: Dropdown with time slots from 10:30 AM to 5:30 PM (1-hour intervals)

### 3. **Consultant Selection with Tiered Pricing**
- Sales Team - **Free**
- Manager - **₹99**
- Senior Manager - **₹199**
- Branch Manager - **₹299**

### 4. **Dynamic Payment Integration**
- Payment QR code appears automatically when paid consultant is selected
- QR code is hidden for "Sales Team - Free" option
- Different QR codes for each price tier

### 5. **Payment Details Fields** (Conditional - Only shown when payment is required)
- Transaction ID / UTR Number
- Your UPI ID
- Payment Date
- Payment Time

---

## Files Modified

### 1. **index.html** (and other pages with consultation modal)
- Added new form fields
- Added payment section with QR code container
- Added conditional payment detail fields
- All fields properly styled and validated

### 2. **js/main.js**
- Added event handler for "Consult With" dropdown
- Dynamic show/hide logic for payment section
- Updated form data collection to include all new fields
- Updated Google Sheets submission parameters
- Added date validation (minimum date for preferred date)

### 3. **google-sheets-script.js**
- Updated column structure (now 19 columns instead of 12)
- Modified `doPost()` function to handle new fields
- Modified `doGet()` function to handle new fields
- Updated `setupSheet()` function with new headers
- Enhanced admin email notification with scheduling and payment details
- Enhanced auto-reply email with complete booking information
- Color-coding based on consultant tier (instead of funding amount)

### 4. **QR Code Images Created**
- `img/qr-99.svg` - Placeholder for ₹99 payment
- `img/qr-199.svg` - Placeholder for ₹199 payment
- `img/qr-299.svg` - Placeholder for ₹299 payment

---

## IMPORTANT: Replace Placeholder QR Codes

The current QR codes are **placeholders only**. You must replace them with actual payment QR codes.

### How to Generate Real QR Codes:

1. **Using Your UPI Payment App:**
   - Open Google Pay / PhonePe / Paytm
   - Go to "Receive Money" or "Request Money"
   - Enter the amount (₹99, ₹199, or ₹299)
   - Take a screenshot of the QR code
   - Save as PNG or JPG

2. **Using Online QR Code Generator:**
   - Go to https://www.qr-code-generator.com/
   - Select "UPI Payment"
   - Enter your UPI ID and amount
   - Generate and download QR code

3. **File Naming:**
   - Replace `img/qr-99.svg` with your ₹99 QR code (rename to qr-99.png or qr-99.jpg)
   - Replace `img/qr-199.svg` with your ₹199 QR code
   - Replace `img/qr-299.svg` with your ₹299 QR code

4. **Update Image Format** (if not using SVG):
   If you use PNG/JPG images, update line in `js/main.js`:
   ```javascript
   // Change from:
   var qrHtml = '<img src="img/qr-' + price + '.svg" ...
   
   // To:
   var qrHtml = '<img src="img/qr-' + price + '.png" ...
   // or
   var qrHtml = '<img src="img/qr-' + price + '.jpg" ...
   ```

---

## Google Sheets Setup

### New Column Structure:

| Column | Header | Description |
|--------|--------|-------------|
| A | Timestamp | Submission date and time |
| B | Full Name | Customer name |
| C | Mobile | Phone number |
| D | Email | Email address |
| E | Business Name | Business/project name |
| F | Business Type | Industry category |
| G | Funding Required | Funding amount range |
| H | Service Interested | Service requested |
| I | **Preferred Date** | **NEW - Consultation date** |
| J | **Preferred Time** | **NEW - Consultation time slot** |
| K | **Consult With** | **NEW - Consultant tier selected** |
| L | **Transaction ID** | **NEW - Payment transaction ID** |
| M | **UPI ID** | **NEW - Customer's UPI ID** |
| N | **Payment Date** | **NEW - Payment date** |
| O | **Payment Time** | **NEW - Payment time** |
| P | Message | Additional details |
| Q | IP Address | User's IP address |
| R | User Agent | Browser information |
| S | Reference ID | Unique reference ID |

### Setup Instructions:

1. **Update Your Google Sheets Script:**
   - Open your Google Sheet
   - Go to Extensions → Apps Script
   - **Replace ALL existing code** with the updated `google-sheets-script.js`
   - Save the script

2. **Run Setup Function:**
   - In Apps Script, select `setupSheet` from the function dropdown
   - Click Run (▶️ button)
   - This will create all 19 column headers automatically

3. **Redeploy Web App:**
   - Click Deploy → Manage deployments
   - Click Edit (✏️) on your current deployment
   - Select "New version" from the version dropdown
   - Click Deploy
   - Copy the Web App URL (should be the same as before)

4. **Test the Form:**
   - Visit your website
   - Click "Get Started"
   - Fill out the consultation form
   - Try both free and paid consultant options
   - Verify data appears in all 19 columns

---

## Color Coding in Google Sheets

Rows are now color-coded based on consultant tier:

- **Light Gray** (`#f8f9fa`) - Sales Team (Free)
- **Yellow** (`#fff3cd`) - Manager (₹99)
- **Blue** (`#cfe2ff`) - Senior Manager (₹199)
- **Green** (`#d4edda`) - Branch Manager (₹299)

---

## Email Notifications

### Admin Email Updates:
- Includes scheduled date and time
- Shows consultant tier selected
- Displays payment details (if paid consultation)
- Color-coded sections for easy identification

### Customer Auto-Reply Updates:
- Confirms scheduled appointment date and time
- Shows consultant assigned
- Includes payment confirmation (if applicable)
- Complete reference ID for tracking

---

## Testing Checklist

- [ ] Test form with "Sales Team - Free" option
  - Payment section should NOT appear
  - Form should submit successfully
  - All fields should appear in Google Sheet
  
- [ ] Test form with "Manager - ₹99" option
  - QR code should appear
  - Payment fields should become required
  - All payment details should save to sheet
  
- [ ] Test form with "Senior Manager - ₹199" option
  - Correct QR code should display
  - Email should show payment details
  
- [ ] Test form with "Branch Manager - ₹299" option
  - Highest tier QR code should display
  - Row should be color-coded green in sheet
  
- [ ] Verify date picker works correctly
  - Cannot select past dates for preferred date
  - Cannot select future dates for payment date
  
- [ ] Check email notifications
  - Admin receives complete details
  - Customer receives confirmation with appointment info
  
- [ ] Test all new service options
  - Certification Service
  - Business Registration
  - Grants

---

## Support & Troubleshooting

### Common Issues:

**Q: QR code not appearing**
- Check browser console for errors
- Verify QR image files exist in `img/` folder
- Ensure correct file extension (.svg, .png, or .jpg)

**Q: Payment fields not hiding/showing**
- Clear browser cache
- Verify jQuery is loaded
- Check for JavaScript errors in console

**Q: Data not appearing in Google Sheets**
- Verify Apps Script is redeployed with new version
- Check execution log in Apps Script for errors
- Ensure setupSheet() was run to create new columns

**Q: Old URL changed after redeploy**
- If Web App URL changes, update in `js/main.js` and `api/consultation-handler.php`

---

## Next Steps

1. **Replace placeholder QR codes with real payment QR codes**
2. **Update Google Apps Script** (copy-paste from google-sheets-script.js)
3. **Redeploy the Web App** with new version
4. **Run setupSheet()** function to create new column headers
5. **Test thoroughly** using the checklist above
6. **Monitor submissions** to ensure data flows correctly

---

## Contact

For technical support or questions about this update:
- Email: tech@agnivridhiindia.com
- Phone: +91 9289555190

---

**Last Updated:** October 27, 2025  
**Version:** 2.0  
**Status:** Ready for Production (after QR code replacement)
