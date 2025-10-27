(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs with better defaults
    if (typeof WOW !== 'undefined') {
        new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 80, mobile: true, live: true }).init();
    }

    // Sticky Navbar with enhanced glassmorphism when floating
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm sticky');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm sticky');
        }
    });

    // Hero Testimonial Carousel with variable-width cards
    $(".testimonial-hero-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 800,
        center: true,
        dots: false,
        loop: true,
        margin: 40,
        stagePadding: 30,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                stagePadding: 20,
                margin: 20
            },
            576:{
                items:1,
                stagePadding: 40,
                margin: 25
            },
            768:{
                items:2,
                stagePadding: 50,
                margin: 30
            },
            992:{
                items:2,
                stagePadding: 60,
                margin: 35
            },
            1200:{
                items:3,
                stagePadding: 80,
                margin: 40
            }
        }
    });

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Facts counter
    if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 8,
            time: 1800
        });
    }


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Floating WhatsApp button removed as requested


        // Smooth scroll for on-page anchors with navbar offset
        $(document).on('click', 'a[href^="#"]', function (e) {
                var target = this.getAttribute('href');
                if (target.length > 1 && $(target).length) {
                        e.preventDefault();
                        var top = $(target).offset().top - 70;
                        $('html, body').animate({ scrollTop: top }, 700, 'easeInOutExpo');
                }
        });

    // Handle Consult With dropdown change to show/hide payment section
    $('#consultWith').on('change', function() {
        var selectedOption = $(this).find('option:selected');
        var price = selectedOption.data('price');
        var consultType = selectedOption.val();
        
        if (price > 0) {
            // Show payment section
            $('#paymentSection').slideDown();
            $('#paymentFields').slideDown();
            
            // Set required attribute for payment fields
            $('#transactionId, #upiId, #paymentDate, #paymentTime, #paymentScreenshot').prop('required', true);
            
            // Display appropriate QR code
            var qrHtml = '<img src="img/qr-' + price + '.png" alt="Payment QR Code" class="img-fluid" style="max-width: 200px;">';
            qrHtml += '<p class="mt-2 mb-0 text-primary fw-bold">Amount: ₹' + price + '</p>';
            qrHtml += '<p class="small text-muted">' + consultType + '</p>';
            $('#qrCodeContainer').html(qrHtml);
        } else {
            // Hide payment section for free consultation
            $('#paymentSection').slideUp();
            $('#paymentFields').slideUp();
            
            // Remove required attribute for payment fields
            $('#transactionId, #upiId, #paymentDate, #paymentTime, #paymentScreenshot').prop('required', false);
            // Clear values including file input
            $('#transactionId').val('');
            $('#upiId').val('');
            $('#paymentDate').val('');
            $('#paymentTime').val('');
            $('#paymentScreenshot').val('');
            
            $('#qrCodeContainer').html('');
        }
    });
    
    // Set minimum date for preferred date and payment date to today
    $(document).ready(function() {
        var today = new Date().toISOString().split('T')[0];
        $('#preferredDate').attr('min', today);
        $('#paymentDate').attr('max', today); // Payment date should not be in future
        
        // Debug: Log when modal is opened
        $('#consultationModal').on('show.bs.modal', function() {
            console.log('🚪 Modal opening...');
        });
        
        $('#consultationModal').on('shown.bs.modal', function() {
            console.log('✅ Modal fully opened');
            console.log('📋 Form fields after modal open:');
            console.log('   - fullName exists:', $('#fullName').length);
            console.log('   - email exists:', $('#email').length);
            console.log('   - mobile exists:', $('#mobile').length);
        });
        
        // Debug: Detect if form is being reset unexpectedly
        $('#consultationForm').on('reset', function() {
            console.log('⚠️ Form reset detected!');
            console.trace('Reset called from:');
        });
    });

    // Consultation Form Handler with Full Integration
    $('#consultationForm').on('submit', function(e) {
        e.preventDefault();
        
        console.log('🎯 Consultation form submit event triggered');
        console.log('📝 Form element:', this);
        console.log('🔍 Checking field values at submission:');
        console.log('   - fullName input exists:', $('#fullName').length);
        console.log('   - fullName value:', $('#fullName').val());
        console.log('   - email input exists:', $('#email').length);
        console.log('   - email value:', $('#email').val());
        console.log('   - mobile input exists:', $('#mobile').length);
        console.log('   - mobile value:', $('#mobile').val());
        
        // Disable submit button to prevent double submission
        var $submitBtn = $(this).find('button[type="submit"]');
        var originalBtnText = $submitBtn.html();
        $submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Processing...');
        
        // Execute reCAPTCHA v3 (invisible)
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LePnfYrAAAAADeuSp1IJtJ_fyCSsEB9y-BVCoqz', {action: 'consultation'})
                .then(function(token) {
                    console.log('✅ reCAPTCHA token received:', token ? 'Valid' : 'Null');
                    submitConsultationForm(token, $submitBtn, originalBtnText);
                })
                .catch(function(error) {
                    console.error('❌ reCAPTCHA error:', error);
                    console.log('⚠️ Submitting without reCAPTCHA due to error');
                    submitConsultationForm(null, $submitBtn, originalBtnText);
                });
            });
        } else {
            // If reCAPTCHA not loaded, submit without it
            console.log('⚠️ reCAPTCHA not loaded, submitting without it');
            submitConsultationForm(null, $submitBtn, originalBtnText);
        }
    });
    
    function submitConsultationForm(recaptchaToken, $submitBtn, originalBtnText) {
        // Get form data
        var formData = {
            fullName: $('#fullName').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            businessName: $('#businessName').val() || 'Not Provided',
            businessType: $('#businessType').val(),
            fundingRequired: $('#fundingRequired').val(),
            serviceInterested: $('#serviceInterested').val(),
            preferredDate: $('#preferredDate').val(),
            preferredTime: $('#preferredTime').val(),
            consultWith: $('#consultWith').val(),
            transactionId: $('#transactionId').val() || 'N/A',
            upiId: $('#upiId').val() || 'N/A',
            paymentDate: $('#paymentDate').val() || 'N/A',
            paymentTime: $('#paymentTime').val() || 'N/A',
            hasPaymentScreenshot: ($('#paymentScreenshot').length && $('#paymentScreenshot')[0].files && $('#paymentScreenshot')[0].files.length > 0) ? 'Yes' : 'No',
            message: $('#message').val() || 'No additional details provided',
            recaptchaToken: recaptchaToken,
            timestamp: new Date().toISOString(),
            source: window.location.href
        };
        
        // Debug log
        console.log('📋 Consultation Form Data:', formData);
        console.log('📧 Email field value:', formData.email);
        console.log('📱 Mobile field value:', formData.mobile);
        
        // Track with Google Analytics (GA4)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                event_category: 'Consultation Form',
                event_label: formData.serviceInterested,
                value: formData.fundingRequired,
                business_type: formData.businessType
            });
        }
        
        // Track with Google Analytics (Universal Analytics - if still using)
        if (typeof ga !== 'undefined') {
            ga('send', 'event', 'Consultation Form', 'Submit', formData.serviceInterested);
        }
        
        // Decide transport: POST multipart if a screenshot is attached, else fallback to GET
        var googleSheetsUrl = (window.AGNI_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbzoZ4xX4i4zg1_3x1VbhsU7CQ3ayZmgAnehf_cFMip2J2bxCctIqXAFYBUYvc94ogrV/exec');

        var hasFile = ($('#paymentScreenshot').length && $('#paymentScreenshot')[0].files && $('#paymentScreenshot')[0].files.length > 0);
        var fetchPromise;
        if (hasFile) {
            // Optional client-side validation: max 5MB, image types only
            var file = $('#paymentScreenshot')[0].files[0];
            var maxBytes = 5 * 1024 * 1024; // 5 MB
            if (file.size > maxBytes) {
                $('#formSuccess')
                    .removeClass('alert-success')
                    .addClass('alert-danger')
                    .html('<i class="fas fa-exclamation-circle me-2"></i>Screenshot is too large. Please upload an image under 5 MB.')
                    .removeClass('d-none');
                $submitBtn.prop('disabled', false).html(originalBtnText);
                return;
            }
            if (!/^image\//.test(file.type)) {
                $('#formSuccess')
                    .removeClass('alert-success')
                    .addClass('alert-danger')
                    .html('<i class="fas fa-exclamation-circle me-2"></i>Please upload an image file (JPG, PNG, etc.).')
                    .removeClass('d-none');
                $submitBtn.prop('disabled', false).html(originalBtnText);
                return;
            }

            var fd = new FormData();
            fd.append('fullName', formData.fullName);
            fd.append('mobile', formData.mobile);
            fd.append('email', formData.email);
            fd.append('businessName', formData.businessName);
            fd.append('businessType', formData.businessType);
            fd.append('fundingRequired', formData.fundingRequired);
            fd.append('serviceInterested', formData.serviceInterested);
            fd.append('preferredDate', formData.preferredDate);
            fd.append('preferredTime', formData.preferredTime);
            fd.append('consultWith', formData.consultWith);
            fd.append('transactionId', formData.transactionId);
            fd.append('upiId', formData.upiId);
            fd.append('paymentDate', formData.paymentDate);
            fd.append('paymentTime', formData.paymentTime);
            fd.append('message', formData.message);
            fd.append('recaptchaToken', formData.recaptchaToken || '');
            fd.append('timestamp', formData.timestamp);
            fd.append('source', formData.source);
            fd.append('paymentScreenshot', file, file.name);

            fetchPromise = fetch(googleSheetsUrl, { method: 'POST', mode: 'no-cors', body: fd });
        } else {
            // GET fallback (no file path)
            var params = new URLSearchParams();
            params.append('fullName', formData.fullName);
            params.append('mobile', formData.mobile);
            params.append('email', formData.email);
            params.append('businessName', formData.businessName);
            params.append('businessType', formData.businessType);
            params.append('fundingRequired', formData.fundingRequired);
            params.append('serviceInterested', formData.serviceInterested);
            params.append('preferredDate', formData.preferredDate);
            params.append('preferredTime', formData.preferredTime);
            params.append('consultWith', formData.consultWith);
            params.append('transactionId', formData.transactionId);
            params.append('upiId', formData.upiId);
            params.append('paymentDate', formData.paymentDate);
            params.append('paymentTime', formData.paymentTime);
            params.append('message', formData.message);
            params.append('hasPaymentScreenshot', formData.hasPaymentScreenshot);
            params.append('timestamp', formData.timestamp);
            if (formData.recaptchaToken) { params.append('recaptchaToken', formData.recaptchaToken); }
            params.append('source', formData.source);
            
            var finalUrl = googleSheetsUrl + '?' + params.toString();
            console.log('🌐 Sending GET request to:', googleSheetsUrl);
            console.log('📊 Query params length:', params.toString().length);
            console.log('📦 Full URL length:', finalUrl.length);
            
            fetchPromise = fetch(finalUrl, { method: 'GET', mode: 'no-cors' });
        }

        fetchPromise
        .then(function() {
            console.log('✅ Form submission sent to Google Sheets');
            
            // Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                    'value': 1.0,
                    'currency': 'INR'
                });
            }
            
            // Track with Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead', {
                    content_name: formData.serviceInterested,
                    content_category: 'Consultation',
                    value: formData.fundingRequired,
                    currency: 'INR'
                });
            }
            
            // Show success message
            $('#formSuccess').html(
                '<i class="fas fa-check-circle me-2"></i>' +
                '<strong>Thank you!</strong> Your consultation request has been received. ' +
                'We\'ll contact you within 24 hours.'
            );
            $('#consultationForm').addClass('d-none');
            $('#formSuccess').removeClass('d-none');
            
            // Reset form and close modal after 5 seconds
            setTimeout(function() {
                $('#consultationModal').modal('hide');
                setTimeout(function() {
                    $('#consultationForm').removeClass('d-none');
                    $('#formSuccess').addClass('d-none');
                    $('#consultationForm')[0].reset();
                    $submitBtn.prop('disabled', false).html(originalBtnText);
                }, 500);
            }, 5000);
        })
        .catch(function(error) {
            console.error('❌ Form submission error:', error);
            
            // Track error
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: 'Form submission failed',
                    fatal: false
                });
            }
            
            // Show error message
            $('#formSuccess')
                .removeClass('alert-success')
                .addClass('alert-danger')
                .html('<i class="fas fa-exclamation-circle me-2"></i>An error occurred. Please try again or call us at +91 9289555190')
                .removeClass('d-none');
            
            // Re-enable submit button
            $submitBtn.prop('disabled', false).html(originalBtnText);
            
            // Hide error after 5 seconds
            setTimeout(function() {
                $('#formSuccess').addClass('d-none').removeClass('alert-danger').addClass('alert-success');
            }, 5000);
        });
    }

    // Contact Form Handler
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button
        var $submitBtn = $(this).find('button[type="submit"]');
        var originalBtnText = $submitBtn.html();
        $submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Sending...');
        
        // Hide previous messages
        $('#contactFormSuccess, #contactFormError').addClass('d-none');
        
        // Execute reCAPTCHA v3
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LePnfYrAAAAADeuSp1IJtJ_fyCSsEB9y-BVCoqz', {action: 'contact'}).then(function(token) {
                    submitContactForm(token, $submitBtn, originalBtnText);
                });
            });
        } else {
            submitContactForm(null, $submitBtn, originalBtnText);
        }
    });
    
    function submitContactForm(recaptchaToken, $submitBtn, originalBtnText) {
        // Get form data
        var formData = {
            fullName: $('#contactName').val(),
            mobile: $('#contactPhone').val(),
            email: $('#contactEmail').val(),
            businessName: $('#contactProject').val() || 'Not Provided',
            businessType: 'Contact Form Inquiry',
            fundingRequired: 'N/A',
            serviceInterested: $('#contactSubject').val(),
            message: $('#contactMessage').val(),
            timestamp: new Date().toISOString(),
            source: 'Contact Page - ' + window.location.href
        };
        
        // Track with Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                event_category: 'Contact Form',
                event_label: 'Contact Page',
                value: 1
            });
        }
        
        // Send to Google Sheets
    var googleSheetsUrl = (window.AGNI_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbzoZ4xX4i4zg1_3x1VbhsU7CQ3ayZmgAnehf_cFMip2J2bxCctIqXAFYBUYvc94ogrV/exec');
        
        var params = new URLSearchParams();
        params.append('fullName', formData.fullName);
        params.append('mobile', formData.mobile);
        params.append('email', formData.email);
        params.append('businessName', formData.businessName);
        params.append('businessType', formData.businessType);
        params.append('fundingRequired', formData.fundingRequired);
        params.append('serviceInterested', formData.serviceInterested);
        params.append('message', formData.message);
    params.append('timestamp', formData.timestamp);
    if (recaptchaToken) { params.append('recaptchaToken', recaptchaToken); }
        params.append('source', formData.source);
        
        fetch(googleSheetsUrl + '?' + params.toString(), {
            method: 'GET',
            mode: 'no-cors'
        })
        .then(function() {
            console.log('Contact form submission sent to Google Sheets');
            
            // Track with Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact', {
                    content_name: 'Contact Form',
                    content_category: 'Inquiry'
                });
            }
            
            // Show success message
            $('#contactFormSuccess').removeClass('d-none');
            $('#contactForm')[0].reset();
            
            // Re-enable submit button
            $submitBtn.prop('disabled', false).html(originalBtnText);
            
            // Hide success message after 10 seconds
            setTimeout(function() {
                $('#contactFormSuccess').addClass('d-none');
            }, 10000);
        })
        .catch(function(error) {
            console.error('Contact form submission error:', error);
            
            // Show error message
            $('#contactFormError').removeClass('d-none');
            
            // Re-enable submit button
            $submitBtn.prop('disabled', false).html(originalBtnText);
            
            // Hide error after 5 seconds
            setTimeout(function() {
                $('#contactFormError').addClass('d-none');
            }, 5000);
        });
    }

})(jQuery);






