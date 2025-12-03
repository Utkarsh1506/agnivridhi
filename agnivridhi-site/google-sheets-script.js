function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Generate reference ID
    var referenceId = generateReferenceId();
    
    Logger.log('=== doPost called ===');
    Logger.log('e.parameter keys: ' + (e && e.parameter ? Object.keys(e.parameter).join(', ') : 'none'));

    // Build data object from parameters
    var p = e.parameter || {};
    var data = {
      fullName: p.fullName || '',
      mobile: p.mobile || '',
      email: p.email || '',
      businessName: p.businessName || 'Not Provided',
      businessType: p.businessType || '',
      fundingRequired: p.fundingRequired || 'Not specified', // Optional field; removed from form
      serviceInterested: p.serviceInterested || '',
      preferredDate: p.preferredDate || '',
      preferredTime: p.preferredTime || '',
      consultWith: p.consultWith || '',
      transactionId: p.transactionId || 'N/A',
      upiId: p.upiId || 'N/A',
      paymentDate: p.paymentDate || 'N/A',
      paymentTime: p.paymentTime || 'N/A',
      message: p.message || 'No additional details',
      ipAddress: p.ipAddress || 'Unknown',
      userAgent: p.userAgent || 'Unknown',
      referenceId: referenceId
    };
    
    Logger.log('=== Data to be written ===');
    Logger.log('fullName: ' + data.fullName);
    Logger.log('email: ' + data.email);
    Logger.log('mobile: ' + data.mobile);
    
    // Prepare row data
    var rowData = [
      new Date(), // Timestamp
      data.fullName || '',
      data.mobile || '',
      data.email || '',
      data.businessName || 'Not Provided',
      data.businessType || '',
      data.fundingRequired || 'Not specified',
      data.serviceInterested || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.consultWith || '',
      data.transactionId || 'N/A',
      data.upiId || 'N/A',
      data.paymentDate || 'N/A',
      data.paymentTime || 'N/A',
      '', // Payment Screenshot URL (removed)
      data.message || 'No additional details',
      data.ipAddress || 'Unknown',
      data.userAgent || 'Unknown',
      data.referenceId || referenceId
    ];
    
  // Append the row to the sheet
  sheet.appendRow(rowData);
    
  // Format the new row
  var lastRow = sheet.getLastRow();
    
    // Apply formatting
    sheet.getRange(lastRow, 1).setNumberFormat('yyyy-MM-dd HH:mm:ss'); // Timestamp
    sheet.getRange(lastRow, 3).setNumberFormat('0'); // Mobile as text
  sheet.getRange(lastRow, 1, 1, 20).setFontSize(10); // Font size
    
    // Color code based on consultant type
    var consultWith = data.consultWith || '';
    if (consultWith.includes('Branch Manager')) {
      sheet.getRange(lastRow, 1, 1, 19).setBackground('#d4edda'); // Green for highest tier
    } else if (consultWith.includes('Senior Manager')) {
      sheet.getRange(lastRow, 1, 1, 19).setBackground('#cfe2ff'); // Blue for senior
    } else if (consultWith.includes('Manager')) {
      sheet.getRange(lastRow, 1, 1, 19).setBackground('#fff3cd'); // Yellow for manager
    } else {
      sheet.getRange(lastRow, 1, 1, 19).setBackground('#f8f9fa'); // Light gray for free
    }
    
    // Auto-resize columns
  sheet.autoResizeColumns(1, 20);
    
    // Build a record from the actual sheet values to ensure accuracy
    var values = sheet.getRange(lastRow, 1, 1, 20).getValues()[0];
    var record = {
      timestamp: values[0],
      fullName: values[1],
      mobile: values[2],
      email: values[3],
      businessName: values[4],
      businessType: values[5],
      fundingRequired: values[6],
      serviceInterested: values[7],
      preferredDate: values[8],
      preferredTime: values[9],
      consultWith: values[10],
      transactionId: values[11],
      upiId: values[12],
      paymentDate: values[13],
      paymentTime: values[14],
      message: values[16],
      ipAddress: values[17],
      userAgent: values[18],
      referenceId: values[19]
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
  // Log all incoming parameters for debugging
  try {
    Logger.log('doGet called with parameters: ' + JSON.stringify(e.parameter));
  } catch(err) {
    Logger.log('Could not log parameters: ' + err);
  }
  
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
        fundingRequired: e.parameter.fundingRequired || 'Not specified',
        serviceInterested: e.parameter.serviceInterested || '',
        preferredDate: e.parameter.preferredDate || '',
        preferredTime: e.parameter.preferredTime || '',
        consultWith: e.parameter.consultWith || '',
        transactionId: e.parameter.transactionId || 'N/A',
        upiId: e.parameter.upiId || 'N/A',
        paymentDate: e.parameter.paymentDate || 'N/A',
        paymentTime: e.parameter.paymentTime || 'N/A',
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
        data.preferredDate,
        data.preferredTime,
        data.consultWith,
        data.transactionId,
        data.upiId,
        data.paymentDate,
        data.paymentTime,
      (e.parameter.paymentScreenshotUrl || ''), // Payment Screenshot URL (legacy field, kept for compatibility)
      data.message,
        data.ipAddress,
        data.userAgent,
        referenceId
      ];
      
  // Append the row to the sheet
  sheet.appendRow(rowData);
      
  // Format the new row
  var lastRow = sheet.getLastRow();
      
      // Apply color coding based on consultant type
      var consultWith = data.consultWith || '';
      if (consultWith.includes('Branch Manager')) {
        sheet.getRange(lastRow, 1, 1, 20).setBackground('#d4edda'); // Green for highest tier
      } else if (consultWith.includes('Senior Manager')) {
        sheet.getRange(lastRow, 1, 1, 20).setBackground('#cfe2ff'); // Blue for senior
      } else if (consultWith.includes('Manager')) {
        sheet.getRange(lastRow, 1, 1, 20).setBackground('#fff3cd'); // Yellow for manager
      } else {
        sheet.getRange(lastRow, 1, 1, 20).setBackground('#f8f9fa'); // Light gray for free
      }
      
      // Build a record from the actual sheet values to ensure accuracy
      var values = sheet.getRange(lastRow, 1, 1, 20).getValues()[0];
      var record = {
        timestamp: values[0],
        fullName: values[1],
        mobile: values[2],
        email: values[3],
        businessName: values[4],
        businessType: values[5],
        fundingRequired: values[6],
        serviceInterested: values[7],
        preferredDate: values[8],
        preferredTime: values[9],
        consultWith: values[10],
        transactionId: values[11],
        upiId: values[12],
        paymentDate: values[13],
        paymentTime: values[14],
        message: values[16],
        ipAddress: values[17],
        userAgent: values[18],
        referenceId: values[19]
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
    
    // Determine payment status
    var isPaid = data.consultWith && !data.consultWith.includes('Free');
    var paymentDetails = '';
    
    if (isPaid) {
      paymentDetails = `
        <tr style="background: #fef3c7;">
          <td colspan="2" style="padding: 10px; border-bottom: 1px solid #ddd;">
            <strong style="color: #f59e0b;">💳 Payment Details:</strong>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Transaction ID:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.transactionId}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">UPI ID:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.upiId}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Payment Date:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.paymentDate} at ${data.paymentTime}</td>
        </tr>
      `;
    }
    
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
            <tr style="background: #e0f2fe;">
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">📅 Preferred Date:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${data.preferredDate}</strong></td>
            </tr>
            <tr style="background: #e0f2fe;">
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">🕐 Preferred Time:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${data.preferredTime}</strong></td>
            </tr>
            <tr style="background: #dcfce7;">
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">👤 Consult With:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>${data.consultWith}</strong></td>
            </tr>
            ${paymentDetails}
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Payment Screenshot:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">            </tr>
          </table></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong style="color: #0891b2;">Payment Screenshot:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.hasPaymentScreenshot || 'No'}</td>
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
    
      // Build payment info section if applicable
      var paymentInfo = '';
      if (data.consultWith && !data.consultWith.includes('Free')) {
        paymentInfo = `
          <tr style="background: #fef3c7;">
            <td colspan="2" style="padding: 10px 10px 5px 10px; color: #f59e0b; font-weight: bold;">💳 Payment Information</td>
          </tr>
          <tr>
            <td style="padding: 6px 10px; color: #666;">Transaction ID</td>
            <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.transactionId)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 10px; color: #666;">UPI ID</td>
            <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.upiId)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 10px; color: #666;">Payment Date & Time</td>
            <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.paymentDate)} at ${escapeHtml(data.paymentTime)}</td>
          </tr>
        `;
      }
      
      var htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 30px; border-radius: 5px 5px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🙏 Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your inquiry</p>
          </div>
        
          <div style="background: white; padding: 30px; border: 1px solid #ddd;">
            <p style="font-size: 16px; color: #333; margin-top: 0;">Dear <strong>${escapeHtml(data.fullName)}</strong>,</p>
          
            <p style="font-size: 15px; color: #555; line-height: 1.6;">
              Thank you for reaching out to <strong>Agnivridhi India</strong>. We have successfully received your inquiry and our team will review it shortly.
            </p>
          
            <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #0891b2; margin: 20px 0;">
              <p style="margin: 0; color: #0891b2;"><strong>📋 Your Reference ID:</strong></p>
              <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #155e75;">${referenceId}</p>
              <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;"><em>Please save this for future reference</em></p>
            </div>

          <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin: 20px 0;">
            <h3 style="color: #0891b2; margin: 0 0 10px 0; font-size: 16px;">📝 Your Submitted Details</h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 10px; color: #666; width: 45%;">Submitted At</td>
                <td style="padding: 6px 10px; color: #111;">${submittedAt}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Full Name</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Email</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.email)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Mobile</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.mobile)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Business / Project</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.businessName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Business Type</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.businessType)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Service / Subject</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.serviceInterested)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; color: #666;">Funding Required</td>
                <td style="padding: 6px 10px; color: #111;">${escapeHtml(data.fundingRequired)}</td>
              </tr>
              <tr style="background: #e0f2fe;">
                <td style="padding: 6px 10px; color: #666;">📅 Preferred Date</td>
                <td style="padding: 6px 10px; color: #111; font-weight: bold;">${escapeHtml(data.preferredDate)}</td>
              </tr>
              <tr style="background: #e0f2fe;">
                <td style="padding: 6px 10px; color: #666;">🕐 Preferred Time</td>
                <td style="padding: 6px 10px; color: #111; font-weight: bold;">${escapeHtml(data.preferredTime)}</td>
              </tr>
              <tr style="background: #dcfce7;">
                <td style="padding: 6px 10px; color: #666;">👤 Consulting With</td>
                <td style="padding: 6px 10px; color: #111; font-weight: bold;">${escapeHtml(data.consultWith)}</td>
              </tr>
              ${paymentInfo}
              <tr>
                <td style="padding: 6px 10px; color: #666; vertical-align: top;">Message</td>
                <td style="padding: 6px 10px; color: #111; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
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
    'Preferred Date',
    'Preferred Time',
    'Consult With',
    'Transaction ID',
    'UPI ID',
    'Payment Date',
  'Payment Time',
  'Payment Screenshot URL',
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
  sheet.setColumnWidth(9, 120); // Preferred Date
  sheet.setColumnWidth(10, 150); // Preferred Time
  sheet.setColumnWidth(11, 180); // Consult With
  sheet.setColumnWidth(12, 150); // Transaction ID
  sheet.setColumnWidth(13, 150); // UPI ID
  sheet.setColumnWidth(14, 120); // Payment Date
  sheet.setColumnWidth(15, 100); // Payment Time
  sheet.setColumnWidth(16, 220); // Payment Screenshot URL
  sheet.setColumnWidth(17, 250); // Message
  sheet.setColumnWidth(18, 120); // IP
  sheet.setColumnWidth(19, 150); // User Agent
  sheet.setColumnWidth(20, 150); // Reference ID
  
  Logger.log('Sheet setup complete with new fields!');
}
