jQuery(function ($) {

    'use strict';

    // Mean menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    // Sticky navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-area').addClass('is-sticky');
        } else {
            $('.navbar-area').removeClass('is-sticky');
        }
    });

    // Scrolltop
    $(window).on('scroll', function() {
        if( $(this).scrollTop() > 300 ) {
            $("#scrolltop").addClass("scrolltopactive");
        }
        else {
            $("#scrolltop").removeClass("scrolltopactive");
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // Navbar
    $("#dot").on("click", function(e) {
        $(this).siblings(".navbar-dots-dropdown").toggleClass("show");
    })
    $('body').on('click', function (e) {
        if (!$('#dot').is(e.target) 
            && $('#dot').has(e.target).length === 0 
            && $('.show').has(e.target).length === 0
        ) {
            $('.navbar-dots-dropdown').removeClass('show');
        }
    });

    // Revolution
    $("#rev_slider_26_1").show().revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay: 9000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"on",
            touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                enable:false,
            },
            bullets: {
                enable:true,
                hide_onmobile:false,
                style:"bullet-bar",
                hide_onleave:false,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
            }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1500,1024,778,480],
        gridheight:[868,768,660,450],
        lazyType:"none",
        parallax: {
            type:"scroll",
            origo:"slidercenter",
            speed:2000,
            levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });
    
    // Faq-accordion
    $(".faq-accordion-header").on("click", function() {
        $(this).parent(".faq-accordion-item").toggleClass("faq-accordion-item-active").siblings().removeClass("faq-accordion-item-active")
    })

    // Magnific-popup
    $("#video-popup").magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // Partner-carousel
    var swiper = new Swiper('.partner-carousel', {
        slidesPerView: 7,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 7,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Partner-carousel-two
    var swiper = new Swiper('.partner-carousel-two', {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Testimonial-carousel-two
    var swiper = new Swiper('.testimonial-carousel-two', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
        },
    });
    $(".testimonial-carousel-two").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Instructor-carousel
    var swiper = new Swiper('.instructor-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            1550: {
                slidesPerView: 'auto',
            },
        },
        pagination: {
            el: '.instructor-pagination',
            clickable: true
        },
    });
    var windowTab = $(window).width();
    if(windowTab < 992) {
        $(".instructor-pagination").appendTo(".instructor-carousel");
    }
    $(".instructor-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Instagram-carousel
    var swiper = new Swiper('.instagram-carousel', {
        slidesPerView: 7,
        loop: true,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 7,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Counter
    $('.counter').counterUp({
        time: 1000
    });

    // Product +/- button
    $(".qu-btn").on("click", function(e) {
        var btn = $(this),
        inp = btn.siblings(".qu-input").val();
        if(btn.hasClass("inc")){
            var i = parseFloat(inp) + 1;
        }
        else {
            if (inp > 1) (i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
            else i = 1;
        }
        btn.addClass("deact").siblings("input").val(i)
    })

    // Course-details-item
    $(".product-tab-list li").click(function() {
        var tab_modal = $(this).attr("data-product-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".summery-info-details-item[data-summery-info-details=" +tab_modal+ "]").addClass("summery-info-details-item-active").siblings().removeClass("summery-info-details-item-active");
    })

    // Course-carousel
    var swiper = new Swiper('.course-carousel', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    });

    // Popup-gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    // Course-details-item
    $(".product-tab-list li").click(function() {
        var tab_modal = $(this).attr("data-product-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-information-item[data-product-details-tab=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Related-product-carousel
    var swiper = new Swiper('.related-product-carousel', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    });

    // Profile-action-information
    $(".profile-information-tab li").click(function() {
        var tab_modal = $(this).attr("data-profile-information-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".profile-information-details-item[data-profile-information-details=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Profile-dashboard
    $(".profile-dashboard-tab li").click(function() {
        var tab_modal = $(this).attr("data-profile-dashboard-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".profile-dashboard-details-item[data-profile-dashboard-details=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Event-speaker-carousel
    var swiper = new Swiper('.event-speaker-carousel', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // NICE SELECT
    $('.select_js').niceSelect();

    // Categories Carousel
    var swiper = new Swiper('.categories-carousel', {
        slidesPerView: 'auto',
        speed: 3500,
        // autoplay: {
        //     delay: 2000,
        // },
        breakpoints: {  
            300: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            375: {
                slidesPerView: 4,
                spaceBetween: 7,
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 13,
            },
            1000: {
                slidesPerView: 5,
                spaceBetween: 27,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 27,
            },
        },
    });

    // Categories Selected 
    $(document).ready(function () {
        $(".category-img").click(function () {
            $(this).toggleClass("active");
        })
    })
    // Switch Tabs
    $(document).ready(function () {
        $(".tab-link").click(function () {
          $(".tab-link").removeClass("active");
          $(".tab-underline").hide();
          $(".tab-pane").removeClass("active");
      
          $(this).addClass("active");
          $(this).siblings(".tab-underline").show();
          $("#" + $(this).data("tab")).addClass("active");
          
        });
      });
    
    // Filter Modal
    $(document).ready(function () {
        $("#filter-btn").click(function () {
            $(".filter-modal").show()
        })

        $(document).click(function (event) {
            if (!$(event.target).closest(".filter-modal, #filter-btn").length) {
              $(".filter-modal").hide(); 
            }
          });
    })

    // Dessert Modal 
    $(document).ready (function () {
        $(".dessert-info").click(function () {
            $(".dessert-modal").show()
        })

        $(document).click(function (event) {
            if(!$(event.target).closest(".dessert-modal, .dessert-info").length) {
                $(".dessert-modal").hide();
            }
        })
    })

    // Selected Star 
    $(document).ready(function () {
        $('.star-shape i').click(function () {
            $(this).toggleClass('selected');
        });
    });

    // Uploaded Logo 
    $(document).ready(function() {
        $("input[type='file']").on("change", function() {
            const uploadedImgs = $(this).siblings("div");
            const inputField = $(this);
    
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgContainer = $("<div>").addClass("uploaded-img-container");
                    const img = $("<img>").attr("src", e.target.result);
                    const deleteIcon = $("<button>").addClass("delete-icon").html("&times;");
    
                    deleteIcon.on("click", function() {
                        imgContainer.remove(); 
                        inputField.val('');
                    });
    
                    imgContainer.append(img).append(deleteIcon);
                    uploadedImgs.append(imgContainer);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    // Subscribe form
    $("#contactForm, .newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // ajax mailchimp
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });


}($));

