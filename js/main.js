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

    // Consultation Form Handler with Full Integration
    $('#consultationForm').on('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button to prevent double submission
        var $submitBtn = $(this).find('button[type="submit"]');
        var originalBtnText = $submitBtn.html();
        $submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Processing...');
        
        // Execute reCAPTCHA v3 (invisible)
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LePnfYrAAAAADeuSp1IJtJ_fyCSsEB9y-BVCoqz', {action: 'consultation'}).then(function(token) {
                    submitConsultationForm(token, $submitBtn, originalBtnText);
                });
            });
        } else {
            // If reCAPTCHA not loaded, submit without it
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
            message: $('#message').val() || 'No additional details provided',
            recaptchaToken: recaptchaToken,
            timestamp: new Date().toISOString(),
            source: window.location.href
        };
        
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
        
        // Send to Google Sheets using GET request to avoid CORS
        var googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbzoZ4xX4i4zg1_3x1VbhsU7CQ3ayZmgAnehf_cFMip2J2bxCctIqXAFYBUYvc94ogrV/exec';
        
        // Create URLSearchParams for form data
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
        
        fetch(googleSheetsUrl + '?' + params.toString(), {
            method: 'GET',
            mode: 'no-cors'
        })
        .then(function() {
            console.log('Form submission sent to Google Sheets');
            
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
            console.error('Form submission error:', error);
            
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

})(jQuery);



