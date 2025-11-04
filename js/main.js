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

    // Hero Testimonial Carousel - Center focus with pop effect
    $(".testimonial-hero-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        rewind: false,
        margin: 30,
        stagePadding: 0,
        nav : false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        slideBy: 1,
        slideTransition: 'ease',
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1,
                margin: 15,
                loop: true,
                center: true
            },
            576:{
                items: 1,
                margin: 20,
                loop: true,
                center: true
            },
            768:{
                items: 3,
                margin: 25,
                loop: true,
                center: true
            },
            992:{
                items: 3,
                margin: 30,
                loop: true,
                center: true
            },
            1200:{
                items: 3,
                margin: 30,
                loop: true,
                center: true
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
            $('#transactionId, #upiId, #paymentDate, #paymentTime').prop('required', true);
            // Screenshot is optional now
            
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
            $('#transactionId, #upiId, #paymentDate, #paymentTime').prop('required', false);
            // Clear values including file input
            $('#transactionId').val('');
            $('#upiId').val('');
            $('#paymentDate').val('');
            $('#paymentTime').val('');
            
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
            Promise.resolve()
                .then(function() {
                    return new Promise(function(resolve, reject) {
                        grecaptcha.ready(function() {
                            try {
                                grecaptcha.execute('6Lc0DP0rAAAAAKuwLNnne-ogAHK-5JH0ANJLsmk_', {action: 'consultation'})
                                    .then(function(token) {
                                        console.log('✅ reCAPTCHA token received:', token ? 'Valid' : 'Null');
                                        submitConsultationForm(token, $submitBtn, originalBtnText);
                                        resolve();
                                    })
                                    .catch(function(error) {
                                        console.error('❌ reCAPTCHA error:', error);
                                        console.log('⚠️ Submitting without reCAPTCHA due to error');
                                        submitConsultationForm(null, $submitBtn, originalBtnText);
                                        resolve();
                                    });
                            } catch (err) {
                                console.error('❌ reCAPTCHA execute error:', err);
                                submitConsultationForm(null, $submitBtn, originalBtnText);
                                resolve();
                            }
                        });
                    });
                })
                .catch(function(err) {
                    console.error('❌ reCAPTCHA outer promise error:', err);
                    submitConsultationForm(null, $submitBtn, originalBtnText);
                });
        } else {
            // If reCAPTCHA not loaded, submit without it
            console.log('⚠️ reCAPTCHA not loaded, submitting without it');
            submitConsultationForm(null, $submitBtn, originalBtnText);
        }
    });
    
    function submitConsultationForm(recaptchaToken, $submitBtn, originalBtnText) {
        // Get form data - capture values immediately before any async operations
        var fullNameVal = $('#fullName').val();
        var mobileVal = $('#mobile').val();
        var emailVal = $('#email').val();
        var businessNameVal = $('#businessName').val() || 'Not Provided';
    var businessTypeVal = $('#businessType').val();
    // Funding Required field was removed from forms; keep param optional/blank for compatibility
    var fundingRequiredVal = '';
        var serviceInterestedVal = $('#serviceInterested').val();
        var preferredDateVal = $('#preferredDate').val();
        var preferredTimeVal = $('#preferredTime').val();
        var consultWithVal = $('#consultWith').val();
        var transactionIdVal = $('#transactionId').val() || 'N/A';
        var upiIdVal = $('#upiId').val() || 'N/A';
        var paymentDateVal = $('#paymentDate').val() || 'N/A';
        var paymentTimeVal = $('#paymentTime').val() || 'N/A';
        var messageVal = $('#message').val() || 'No additional details provided';
        
        var formData = {
            fullName: fullNameVal,
            mobile: mobileVal,
            email: emailVal,
            businessName: businessNameVal,
            businessType: businessTypeVal,
            fundingRequired: fundingRequiredVal,
            serviceInterested: serviceInterestedVal,
            preferredDate: preferredDateVal,
            preferredTime: preferredTimeVal,
            consultWith: consultWithVal,
            transactionId: transactionIdVal,
            upiId: upiIdVal,
            paymentDate: paymentDateVal,
            paymentTime: paymentTimeVal,
            message: messageVal,
            recaptchaToken: recaptchaToken,
            timestamp: new Date().toISOString(),
            source: window.location.href
        };
        
        // Debug log
        console.log('📋 Consultation Form Data:', formData);
        console.log('📧 Email field value:', formData.email);
        console.log('📱 Mobile field value:', formData.mobile);
        console.log('💳 Payment fields:', {
            transactionId: formData.transactionId,
            upiId: formData.upiId,
            paymentDate: formData.paymentDate,
            paymentTime: formData.paymentTime
        });
        
        // Track with Google Analytics (GA4)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                event_category: 'Consultation Form',
                event_label: formData.serviceInterested,
                business_type: formData.businessType
            });
        }
        
        // Track with Google Analytics (Universal Analytics - if still using)
        if (typeof ga !== 'undefined') {
            ga('send', 'event', 'Consultation Form', 'Submit', formData.serviceInterested);
        }
        
        // Use GET with query params - simple and works with no-cors
        var googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxhXssWcCEYQarFtOakmxU4iizigxPbPUiPf-_-Bb368ZFpB45GEw0lrKpXYgdk9Ix3/exec';
        
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
        params.append('timestamp', formData.timestamp);
        if (formData.recaptchaToken) { params.append('recaptchaToken', formData.recaptchaToken); }
        params.append('source', formData.source);
        
        var finalUrl = googleSheetsUrl + '?' + params.toString();
        console.log('🌐 Sending GET request');
        console.log('📦 URL length:', finalUrl.length);
        
        fetch(finalUrl, { method: 'GET', mode: 'no-cors' })
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
                    content_category: 'Consultation'
                });
            }
            
            // Show success message
            var successMessage = '<i class="fas fa-check-circle me-2"></i>' +
                '<strong>Thank you!</strong> Your consultation request has been received.';
            
            successMessage += '<br><small class="text-muted mt-2 d-block">We\'ll contact you within 24 hours.</small>';
            
            $('#formSuccess').html(successMessage);
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
                grecaptcha.execute('6Lc0DP0rAAAAAKuwLNnne-ogAHK-5JH0ANJLsmk_', {action: 'contact'}).then(function(token) {
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
            fundingRequired: 'Not specified',
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
        var googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxhXssWcCEYQarFtOakmxU4iizigxPbPUiPf-_-Bb368ZFpB45GEw0lrKpXYgdk9Ix3/exec';
        
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






