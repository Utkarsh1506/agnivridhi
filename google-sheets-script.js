/**
 * Google Apps Script for Agnivridhi India Consultation Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add these headers in row 1:
 *    A: Timestamp | B: Full Name | C: Mobile | D: Email | E: Business Name
 *    F: Business Type | G: Funding Required | H: Service Interested | I: Message
 *    J: IP Address | K: User Agent | L: Reference ID
 * 
 * 3. Go to Extensions → Apps Script
 * 4. Delete default code and paste this entire script
 * 5. Click "Deploy" → "New deployment"
 * 6. Type: Web app
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click "Deploy" and copy the Web App URL
 * 10. Update this URL in your PHP file (consultation-handler.php)
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the POST data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    var rowData = [
      new Date(), // Timestamp
      data.fullName || '',
      data.mobile || '',
      data.email || '',
      data.businessName || 'Not Provided',
      data.businessType || '',
      data.fundingRequired || '',
      data.serviceInterested || '',
      data.message || 'No additional details',
      data.ipAddress || 'Unknown',
      data.userAgent || 'Unknown',
      data.referenceId || generateReferenceId()
    ];
    
  // Append the row to the sheet
  sheet.appendRow(rowData);
    
  // Format the new row
  var lastRow = sheet.getLastRow();
    
    // Apply formatting
    sheet.getRange(lastRow, 1).setNumberFormat('yyyy-MM-dd HH:mm:ss'); // Timestamp
    sheet.getRange(lastRow, 3).setNumberFormat('0'); // Mobile as text
    sheet.getRange(lastRow, 1, 1, 12).setFontSize(10); // Font size
    
    // Color code based on funding range
    var fundingRange = data.fundingRequired || '';
    if (fundingRange.includes('Above 1 Crore')) {
      sheet.getRange(lastRow, 1, 1, 12).setBackground('#d4edda'); // Green for high value
    } else if (fundingRange.includes('50 Lakhs')) {
      sheet.getRange(lastRow, 1, 1, 12).setBackground('#fff3cd'); // Yellow for medium
    }
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 12);
    
    // Build a record from the actual sheet values to ensure accuracy
    var values = sheet.getRange(lastRow, 1, 1, 12).getValues()[0];
    var record = {
      timestamp: values[0],
      fullName: values[1],
      mobile: values[2],
      email: values[3],
      businessName: values[4],
      businessType: values[5],
      fundingRequired: values[6],
      serviceInterested: values[7],
      message: values[8],
      ipAddress: values[9],
      userAgent: values[10],
      referenceId: values[11]
    };
    
    // Send notification email to admin and auto-reply to user
    if (record.email) {
      sendAdminNotification(record, record.referenceId);
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'success': true,
      'message': 'Data added to Google Sheet successfully',
      'referenceId': rowData[11],
      'rowNumber': lastRow
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'success': false,
      'message': 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for form submissions and testing)
 */
function doGet(e) {
  // If parameters exist, treat as form submission
  if (e && e.parameter && e.parameter.fullName) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      
      // Parse the GET parameters as form data
      var data = {
        fullName: e.parameter.fullName || '',
        mobile: e.parameter.mobile || '',
        email: e.parameter.email || '',
        businessName: e.parameter.businessName || 'Not Provided',
        businessType: e.parameter.businessType || '',
        fundingRequired: e.parameter.fundingRequired || '',
        serviceInterested: e.parameter.serviceInterested || '',
        message: e.parameter.message || 'No additional details',
        ipAddress: e.parameter.ipAddress || 'Unknown',
        userAgent: e.parameter.userAgent || 'Unknown'
      };
      
      // Generate reference ID
      var referenceId = generateReferenceId();
      
      // Prepare row data
      var rowData = [
        new Date(), // Timestamp
        data.fullName,
        data.mobile,
        data.email,
        data.businessName,
        data.businessType,
        data.fundingRequired,
        data.serviceInterested,
        data.message,
        data.ipAddress,
        data.userAgent,
        referenceId
      ];
      
  // Append the row to the sheet
  sheet.appendRow(rowData);
      
  // Format the new row
  var lastRow = sheet.getLastRow();
      
      // Apply color coding based on funding amount
      var fundingCell = sheet.getRange(lastRow, 7); // Column G (Funding Required)
      if (data.fundingRequired.includes('1 Crore')) {
        sheet.getRange(lastRow, 1, 1, 12).setBackground('#d4edda'); // Green for high value
      } else if (data.fundingRequired.includes('50')) {
        sheet.getRange(lastRow, 1, 1, 12).setBackground('#fff3cd'); // Yellow for medium value
      }
      
      // Build a record from the actual sheet values to ensure accuracy
      var values = sheet.getRange(lastRow, 1, 1, 12).getValues()[0];
      var record = {
        timestamp: values[0],
        fullName: values[1],
        mobile: values[2],
        email: values[3],
        businessName: values[4],
        businessType: values[5],
        fundingRequired: values[6],
        serviceInterested: values[7],
        message: values[8],
        ipAddress: values[9],
        userAgent: values[10],
        referenceId: values[11]
      };

      // Send email notification and auto-reply using the exact sheet data
      sendAdminNotification(record, record.referenceId);
      
      // Return success response
      return ContentService.createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Form submitted successfully',
        'referenceId': referenceId,
        'rowNumber': lastRow
      })).setMimeType(ContentService.MimeType.JSON);
      
    } catch (error) {
      return ContentService.createTextOutput(JSON.stringify({
        'success': false,
        'message': 'Error: ' + error.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  // Default response for testing
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'active',
    'message': 'Agnivridhi India Consultation Form API',
    'version': '1.0',
    'timestamp': new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Generate unique reference ID
 */
function generateReferenceId() {
  var date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd');
  var random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return 'AGNI-' + date + '-' + random;
}

/**
 * Send email notification to admin
 */
function sendAdminNotification(data, referenceId) {
  try {
    var recipient = 'info@agnivridhiindia.com'; // Change to your email
    var subject = '🎯 New Consultation Request - ' + data.fullName;
    
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0;">
          <h2 style="margin: 0;">🎯 New Consultation Request</h2>
        </div>
        
        <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd;">
          <div style="background: #fef3c7; padding: 10px; border-left: 4px solid #f59e0b; margin-bottom: 15px;">
            <strong>Action Required:</strong> New lead needs immediate follow-up!
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Reference ID:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${referenceId}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Full Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Mobile:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${data.mobile}">${data.mobile}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Business Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.businessName || 'Not Provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Business Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.businessType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Funding Required:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${data.fundingRequired}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Service:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${data.serviceInterested}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Message:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.message || 'No additional details'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 5px;">
            <h3 style="color: #0891b2; margin-top: 0;">Quick Actions:</h3>
            <p style="margin: 10px 0;">
              <a href="tel:${data.mobile}" style="display: inline-block; background: #0891b2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📞 Call Now</a>
              <a href="mailto:${data.email}" style="display: inline-block; background: #155e75; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">📧 Send Email</a>
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 15px; color: #666; font-size: 12px; border-top: 1px solid #ddd;">
          <p>This is an automated notification from Agnivridhi India website.</p>
          <p><strong>Respond within 24 hours for best conversion rate!</strong></p>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });
    
     // Send auto-reply to customer (use the same sheet-sourced data)
     sendAutoReply(data, referenceId);
   
  } catch (error) {
    Logger.log('Email notification failed: ' + error.toString());
  }
}

  /**
   * Send auto-reply email to customer
   */
  function sendAutoReply(data, referenceId) {
    try {
      var recipient = data.email;
      var subject = 'Thank You for Contacting Agnivridhi India - Ref: ' + referenceId;
      var submittedAt = data.timestamp ? Utilities.formatDate(new Date(data.timestamp), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm') : Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
    
      var htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 30px; border-radius: 5px 5px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🙏 Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your inquiry</p>
          </div>
        
          <div style="background: white; padding: 30px; border: 1px solid #ddd;">
            <p style="font-size: 16px; color: #333; margin-top: 0;">Dear <strong>\${escapeHtml(data.fullName)}</strong>,</p>
          
            <p style="font-size: 15px; color: #555; line-height: 1.6;">
              Thank you for reaching out to <strong>Agnivridhi India</strong>. We have successfully received your inquiry and our team will review it shortly.
            </p>
          
            <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #0891b2; margin: 20px 0;">
              <p style="margin: 0; color: #0891b2;"><strong>📋 Your Reference ID:</strong></p>
              <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #155e75;">\${referenceId}</p>
              <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;"><em>Please save this for future reference</em></p>
            </div>

          <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin: 20px 0;">
            <h3 style="color: #0891b2; margin: 0 0 10px 0; font-size: 16px;">📝 Your Submitted Details</h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 10px; color: #666; width: 45%;">Submitted At</td>
                <td style="padding: 6px 10px; color: #111;">\${submittedAt}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Full Name</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Email</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.email)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Mobile</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.mobile)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Business / Project</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.businessName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Business Type</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.businessType)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Service / Subject</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.serviceInterested)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Funding Required</td>
                <td style="padding: 6px 10px; color: #111;">\${escapeHtml(data.fundingRequired)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666; vertical-align: top;">Message</td>
                <td style="padding: 6px 10px; color: #111; white-space: pre-wrap;">\${escapeHtml(data.message)}</td>
              </tr>
            </table>
          </div>
          
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; margin-bottom: 15px;">Need immediate assistance?</p>
              <a href="tel:+919289555190" style="display: inline-block; background: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">📞 Call Us: +91 9289555190</a>
            </div>
          </div>
        
          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p>This is an automated email. Please do not reply.</p>
            <p>© 2025 Agnivridhi India. All rights reserved.</p>
          </div>
        </div>
      `;
    
      MailApp.sendEmail({
        to: recipient,
        replyTo: 'noreply@agnivridhiindia.com',
        subject: subject,
        htmlBody: htmlBody,
        name: 'Agnivridhi India'
      });
    
    } catch (error) {
      Logger.log('Auto-reply failed: ' + error.toString());
    }
  }

  /**
   * Escape HTML special characters to avoid HTML injection
   */
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

/**
 * Create initial sheet setup (run this once manually)
 */
function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set headers
  var headers = [
    'Timestamp',
    'Full Name',
    'Mobile',
    'Email',
    'Business Name',
    'Business Type',
    'Funding Required',
    'Service Interested',
    'Message',
    'IP Address',
    'User Agent',
    'Reference ID'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#0891b2')
    .setFontColor('white')
    .setFontWeight('bold')
    .setFontSize(11);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 150); // Name
  sheet.setColumnWidth(3, 120); // Mobile
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Business Name
  sheet.setColumnWidth(6, 120); // Business Type
  sheet.setColumnWidth(7, 150); // Funding
  sheet.setColumnWidth(8, 180); // Service
  sheet.setColumnWidth(9, 250); // Message
  sheet.setColumnWidth(10, 120); // IP
  sheet.setColumnWidth(11, 150); // User Agent
  sheet.setColumnWidth(12, 150); // Reference ID
  
  Logger.log('Sheet setup complete!');
}
