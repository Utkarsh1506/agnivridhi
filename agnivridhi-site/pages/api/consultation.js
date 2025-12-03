// API route handler for consultation form submission
// Path: pages/api/consultation.js

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate required fields
    const requiredFields = ['fullName', 'mobile', 'email', 'businessType', 'serviceInterested'];
    const errors = [];

    for (const field of requiredFields) {
      if (!data[field]) {
        errors.push(`${field.replace(/([A-Z])/g, ' $1').trim()} is required`);
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }

    // Validate mobile format (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (data.mobile && !mobileRegex.test(data.mobile)) {
      errors.push('Mobile number must be 10 digits');
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Verify reCAPTCHA if token provided
    if (data.recaptchaToken) {
      const recaptchaVerified = await verifyRecaptcha(data.recaptchaToken);
      if (!recaptchaVerified) {
        return res.status(400).json({
          success: false,
          message: 'reCAPTCHA verification failed. Please try again.'
        });
      }
    }

    // Sanitize and prepare data
    const sanitizedData = {
      fullName: sanitizeInput(data.fullName),
      mobile: sanitizeInput(data.mobile),
      email: sanitizeInput(data.email),
      businessName: sanitizeInput(data.businessName || ''),
      businessType: sanitizeInput(data.businessType),
      fundingRequired: sanitizeInput(data.fundingRequired || 'Not specified'),
      serviceInterested: sanitizeInput(data.serviceInterested),
      message: sanitizeInput(data.message || ''),
      submittedAt: new Date().toISOString(),
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown',
      userAgent: req.headers['user-agent'] || 'Unknown'
    };

    // Send admin notification email (using a service like SendGrid, Mailgun, or Resend)
    const adminEmailSent = await sendAdminNotification(sanitizedData);

    // Send auto-responder to user
    const userEmailSent = await sendAutoResponder(sanitizedData);

    // Push to Google Sheets (optional)
    let sheetsResult = { success: true };
    if (process.env.GOOGLE_SHEETS_ENABLED === 'true') {
      sheetsResult = await pushToGoogleSheets(sanitizedData);
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! We have received your consultation request.',
      data: {
        referenceId: `AGNI-${Date.now()}`,
        adminEmailSent,
        autoResponderSent: userEmailSent,
        sheetsIntegration: sheetsResult
      }
    });

  } catch (error) {
    console.error('Consultation form error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    });
  }
}

// Helper Functions

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
}

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true; // Skip if not configured

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    });

    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

async function sendAdminNotification(data) {
  // Using Resend (recommended) or SendGrid
  const emailService = process.env.EMAIL_SERVICE || 'resend';
  
  if (emailService === 'resend') {
    return sendEmailWithResend({
      to: process.env.ADMIN_EMAIL || 'info@agnivridhiindia.com',
      subject: `New Consultation Request - ${data.fullName}`,
      html: getAdminEmailTemplate(data)
    });
  }
  
  // Fallback: log to console in development
  console.log('Admin notification:', data);
  return true;
}

async function sendAutoResponder(data) {
  const emailService = process.env.EMAIL_SERVICE || 'resend';
  
  if (emailService === 'resend') {
    return sendEmailWithResend({
      to: data.email,
      subject: 'Thank You for Your Consultation Request - Agnivridhi India',
      html: getAutoResponderTemplate(data)
    });
  }
  
  // Fallback: log to console
  console.log('Auto-responder:', data.email);
  return true;
}

async function sendEmailWithResend({ to, subject, html }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'Agnivridhi India <noreply@agnivridhiindia.com>',
        to,
        subject,
        html
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

async function pushToGoogleSheets(data) {
  const sheetsUrl = process.env.GOOGLE_SHEETS_URL;
  if (!sheetsUrl) return { success: false };

  try {
    const response = await fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data)
    });

    return { success: response.ok };
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false };
  }
}

function getAdminEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px 20px; }
            .field { margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0891b2; }
            .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; }
            .value { color: #333; }
            .priority { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin-bottom: 20px; border-radius: 8px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            a { color: #0891b2; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2 style="margin: 0;">🎯 New Consultation Request</h2>
            </div>
            <div class="content">
                <div class="priority">
                    <strong>⚡ Action Required:</strong> New lead needs immediate follow-up!
                </div>
                
                <div class="field">
                    <div class="label">Full Name</div>
                    <div class="value">${data.fullName}</div>
                </div>
                
                <div class="field">
                    <div class="label">Mobile Number</div>
                    <div class="value"><a href="tel:${data.mobile}">${data.mobile}</a></div>
                </div>
                
                <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                
                <div class="field">
                    <div class="label">Business Name</div>
                    <div class="value">${data.businessName || 'Not provided'}</div>
                </div>
                
                <div class="field">
                    <div class="label">Business Type</div>
                    <div class="value">${data.businessType}</div>
                </div>
                
                <div class="field">
                    <div class="label">Funding Required</div>
                    <div class="value"><strong>${data.fundingRequired}</strong></div>
                </div>
                
                <div class="field">
                    <div class="label">Service Interested</div>
                    <div class="value"><strong>${data.serviceInterested}</strong></div>
                </div>
                
                ${data.message ? `
                <div class="field">
                    <div class="label">Additional Details</div>
                    <div class="value">${data.message}</div>
                </div>
                ` : ''}
                
                <div class="field">
                    <div class="label">Submitted At</div>
                    <div class="value">${new Date(data.submittedAt).toLocaleString('en-IN')}</div>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from Agnivridhi India website.</p>
                <p>Please respond to the client within 24 hours.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

function getAutoResponderTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #155e75 100%); color: white; padding: 40px 20px; text-align: center; }
            .content { background: white; padding: 30px 20px; }
            .highlight { background: #ecfeff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0891b2; }
            .cta { background: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 15px 0; font-weight: bold; }
            .contact-info { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f9f9f9; }
            ul { padding-left: 20px; }
            li { margin: 8px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🎉 Thank You, ${data.fullName.split(' ')[0]}!</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px;">We've received your consultation request</p>
            </div>
            <div class="content">
                <p>Dear ${data.fullName},</p>
                
                <p>Thank you for reaching out to <strong>Agnivridhi India</strong>. We've successfully received your consultation request for <strong>${data.serviceInterested}</strong>.</p>
                
                <div class="highlight">
                    <h3 style="margin-top: 0; color: #0891b2;">📋 Your Request Summary</h3>
                    <ul style="margin-bottom: 0;">
                        <li><strong>Service:</strong> ${data.serviceInterested}</li>
                        <li><strong>Funding Range:</strong> ${data.fundingRequired}</li>
                        <li><strong>Business Type:</strong> ${data.businessType}</li>
                    </ul>
                </div>
                
                <h3 style="color: #0891b2;">What Happens Next?</h3>
                <ol>
                    <li>🔍 Our experts will review your requirements within <strong>24 hours</strong></li>
                    <li>📞 We'll contact you on <strong>${data.mobile}</strong> to discuss your needs</li>
                    <li>📊 We'll prepare a customized funding strategy for your business</li>
                    <li>🚀 We'll guide you through the entire application process</li>
                </ol>
                
                <div class="contact-info">
                    <h3 style="margin-top: 0; color: #0891b2;">Need Immediate Assistance?</h3>
                    <p style="margin: 8px 0;">📞 Call us: <a href="tel:+919289555190" style="color: #0891b2; font-weight: bold;">+91 9289555190</a></p>
                    <p style="margin: 8px 0;">📧 Email: <a href="mailto:info@agnivridhiindia.com" style="color: #0891b2;">info@agnivridhiindia.com</a></p>
                    <p style="margin: 8px 0;">💬 WhatsApp: <a href="https://wa.me/919289555190" style="color: #0891b2; font-weight: bold;">+91 9289555190</a></p>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://agnivridhiindia.com" class="cta">Visit Our Website</a>
                </div>
                
                <p>We're committed to helping your business grow and succeed!</p>
                
                <p style="margin-top: 30px;">Best regards,<br>
                <strong>The Agnivridhi India Team</strong></p>
            </div>
            <div class="footer">
                <p style="margin: 5px 0;"><strong>Agnivridhi India Pvt. Ltd.</strong></p>
                <p style="margin: 5px 0;">📧 info@agnivridhiindia.com | 📞 +91 9289555190</p>
                <p style="margin: 15px 0 5px 0; font-size: 11px;">
                    This is an automated message. Please do not reply to this email.<br>
                    If you didn't request this consultation, please ignore this email.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}
