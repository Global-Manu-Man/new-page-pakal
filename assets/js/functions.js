/* ===================
    Table Of Content
======================
01 PRELOADER
02 COUNTER
03 PORTFOLIO ISOTOPE
04 WOW
05 OWL CAROUSEL
06 SWIPER SLIDER
07 BACK TO TOP
08 STICKY BAR
09 STICKY HEADER
10 FIT VIDEO
11 PARALLAX
12 WAVE
13 CONTACT FORM
14 IE DETECTION
15 MEGA MENU

======================*/
(function ($) {
"use strict";


    // BEGIN: 01 Preloader
    var preLoader = function() {
        if($('.preloader').length){
            var $preloader = $('.preloader');
            $preloader.delay(200).fadeOut(600);
        }
    };
    // END: Preloader

    // BEGIN: 02 Counter
    var CountTo = function () {
        var initInstances = function () {
          var $count = $('.counter-item-digit');
          if($count.length) {
            $count.appear(function (direction) {
                $(this).countTo();
            }, {
                offset: '100%',
                triggerOnce: true
            });
          }
        };

        return {
            init: function () {
                initInstances();
            }
        };
    }();
    // END: Counter

    // BEGIN: 03 Portfolio Isotope
    var portfolioIsotope = function() {
        if ( $().isotope ) {
            var $container = $('.portfolio-wrap');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.isotope-item',
                    transitionDuration: '0.5s',
                });
            });
            $('.nav-tabs .nav-filter').on('click',function() {
                var selector = $(this).attr('data-filter');
                $('.nav-tabs .nav-filter').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        }
    };
    // END: Portfolio Isotope

    // BEGIN: 04 Wow
    var wow = function() {
        if($('.wow').length){
            wow = new WOW( {
                mobile: true  // Turn on/off WOW.js on mobile devices.
            }).init();
        }
    };
    // END: Wow Js

    // BEGIN: 05 Owl Carousel
    var owlCarousel = function() {
        var $carousel = $('.owl-carousel');
        if( $carousel.length < 1 ){
            return true;
        }
        $carousel.each( function(){
            var slider = $(this);
            var sliderArrow = slider.attr('data-arrow') == 'false' ? false : true; //option: true or false
            var sliderDots = slider.attr('data-dots') == 'false' ? false :true; //option: true or false
            var sliderAutoPlay = slider.attr('data-autoplay') ? false : true; //option: number in ms
            var sliderAutoPlayTime = slider.attr('data-autoplay') ? Number(sliderAutoPlay) : 4000;
            var sliderSpeed = slider.attr('data-speed') ? slider.attr('data-speed') : 800; //option: number in ms (Smart speed)
            var sliderMargin = slider.attr('data-margin') ? slider.attr('data-margin') : 30; //option: number in px
            var sliderLoop = slider.attr('data-loop') == 'false' ? false : true; //option: true or false
            var sliderStart = slider.attr('data-start') ? slider.attr('data-start') : 0; //option: number
            var sliderSlideBy = slider.attr('data-slideby') ? sliderSlideBy == 'page' ? 'page' : Number(slider.attr('data-slideby')) : Number(1); //option: number
            var sliderHoverPause = slider.attr('data-pause') == 'false' ? false : true; //option: true or false
            var sliderMerge = slider.attr('data-merge') == 'true' ? true : false; //option: number (use in slider items DIV)
            var sliderDrag = slider.attr('data-drag') == 'false' ? false : true; //option: true or false
            var sliderRewind = slider.attr('data-rewind') == 'true' ? true : false; //option: true or false
            var sliderCenter = slider.attr('data-center') == 'true' ? true : false; //option: true or false
            var sliderVideo = slider.attr('data-video') == 'true' ? true : false; //option: true or false
            var sliderLazy = slider.attr('data-lazyload') == 'true' ? true : false; //option: true or false
            var sliderRTL = slider.attr('data-rtl'); //option: true (false by default)
            var sliderItems = slider.attr('data-items') ? slider.attr('data-items') : 4; //option: number (items in all device)
            var sliderItemsXl = slider.attr('data-items-xl')? slider.attr('data-items-xl') : Number(sliderItems) ; //option: number (items in 1200 to end )
            var sliderItemsLg = slider.attr('data-items-lg')? slider.attr('data-items-lg') : Number(sliderItemsXl) ; //option: number (items in 992 to 1199 )
            var sliderItemsMd = slider.attr('data-items-md')? slider.attr('data-items-md') : Number(sliderItemsLg) ; //option: number (items in 768 to 991 )
            var sliderItemsSm = slider.attr('data-items-sm')? slider.attr('data-items-sm') : Number(sliderItemsMd) ; //option: number (items in 576 to 767 )
            var sliderItemsXs = slider.attr('data-items-xs') ? slider.attr('data-items-xs') : Number(sliderItemsSm) ; //option: number (items in start to 575 )
            slider.owlCarousel({
                margin: Number(sliderMargin),
                loop: sliderLoop,
                merge: sliderMerge,
                mouseDrag: sliderDrag,
                startPosition: Number(sliderStart),
                rewind: sliderRewind,
                slideBy: sliderSlideBy,
                center: sliderCenter,
                lazyLoad: sliderLazy,
                nav: sliderArrow,
                navText: [
                            '<i class="ti-angle-left"></i>',
                            '<i class="ti-angle-right"></i>'
                ],
                autoplay: sliderAutoPlay,
                autoplayTimeout: sliderAutoPlayTime,
                autoplayHoverPause: sliderHoverPause,
                dots: sliderDots,
                smartSpeed: Number(sliderSpeed),
                video: sliderVideo,
                rtl: sliderRTL,
                responsive:{
                   0:{ items:Number(sliderItemsXs) },
                  576:{ items:Number(sliderItemsSm) },
                  768:{ items:Number(sliderItemsMd) },
                  992:{ items:Number(sliderItemsLg) },
                  1200:{ items:Number(sliderItemsXl) }
                },
            });
        });
    };
    // END: Owl Carousel

    // BEGIN: 06 Swiper Slider
    var swiperSlider = function() {
        if($(".swiper-slider-fade").length !== 0) {
            var swiper = new Swiper('.swiper-container', {
                effect: 'fade', //other supported effects: coverflow, flip, cube, slide
                pagination: null,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay: 5000,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                simulateTouch: true,
                onSlideChangeEnd: function(swiper) {
                    $('.swiper-slide').each(function() {
                        if ($(this).index() === swiper.activeIndex) {
                            // Fadein in active slide
                            $(this).find('.slider-content').fadeIn(25);
                        } else {
                            // Fadeout in inactive slides
                            $(this).find('.slider-content').fadeOut(25);
                        }
                    });
                }
            });
        }
    };
    // END: Swiper Slider

    // BEGIN: 07 Back To top
     var backTotop = function(){
        var $backtotop = $('.back-top');
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $backtotop.addClass('btn-show');
            } else {
                $backtotop.removeClass('btn-show');
            }
        });
        $backtotop.on('click', function() {
            $('html, body').animate({ scrollTop: 0}, 900, 'easeInOutCirc');
            return false;
        });
    };
    // END: Back To top

    // BEGIN: 08 Sticky bar
    var stickyBar = function() {

        if($(".sticky-element").length) {
          var $stickyElement = $(".sticky-element");
          if ($(window).width() <= 1024) {
              $stickyElement.trigger('sticky_kit:detach');
          }
          else {
              $stickyElement.stick_in_parent({
                  offset_top: 100
              });
          }
        }
    };
    // END: Sticky bar

    // BEGIN: Sticky Header
    var stickyHeader = function() {
        var sticky = $('.navbar-sticky'),
        stickyStatic = $('.header-static');
            $(window).scroll(function () {
                var scTop = $(document).scrollTop();
                if (scTop > 400) {
                    if (!$(".sticky-space").length) {
                        stickyStatic.after('<div class="sticky-space"></div>');
                        $(".sticky-space").css({'height': sticky.height() + 'px'});
                    }
                    sticky.addClass('navbar-sticky-on');
                } 
                else {
                    $(".sticky-space").remove();
                    sticky.removeClass('navbar-sticky-on');
            }
        });
    };
    // END: Sticky Header

    // BEGIN: 10 Fit Video
    var fullWithvideo = function(){
        // Target your .container, .wrapper, .post, etc.
        if($(".fit-video").length){
            var $fitvideo = $(".fit-video");
            $fitvideo.fitVids();
        }
      };
    // END: Fit Video

    // BEGIN: 11 Parallax
    var jarallax = function(){
	    if($('.parallax-bg').length){
	        $('.parallax-bg').jarallax({
	            speed: 0.5
	        });
	    }
    };
    // END: Parallax

    // BEGIN: 12 wave
    var myWave  = function(){
        if($('#wave-one').length){
          var wave_one = $('#wave-one');
          wave_one.wavify({
                  height: 60,
                  bones: 5,
                  amplitude: 20,
                  color: '#fff',
                  speed: .15
          });
        }
        if($('#wave-two').length){
          var wave_two = $('#wave-two');
          wave_two.wavify({
                height: 40,
                bones: 4,
                amplitude: 20,
                color: 'rgba(255, 255, 255, .8)',
                speed: .25
            });
        }
    };
    // End: wave

    // BEGIN: 13 Contact Form
    var form = $('.contact-form');
    var message = $('.contact-msg');
    var form_data;
    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 50000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text(data.responseText);
            setTimeout(function () {
                message.fadeOut();
            }, 5000);
        }
    form.submit(function (e) {
            e.preventDefault();
            form_data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form_data
            })
            .done(done_func)
            .fail(fail_func);
        });
    // END: Contact Form

    // BEGIN: 14 IE Detection
    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    (function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            document.querySelector('body').className += ' ie-browser';
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            document.querySelector('body').className += ' ie-browser';
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
           // IE 12 (aka Edge) => return version number
           var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            document.querySelector('body').className += ' ie-browser';
        }

        // other browser
        return false;
    })();
    // END: IE Detection

    // BEGIN: 15 Mega Menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    // END: Mega Menu

    // Initialze all functions

    $(window).on('scroll', function (){
      stickyBar();
    }).on('load', function() {
      preLoader();
    });

    //Document ready functions
    $(document).ready(function () {
          stickyHeader();
          CountTo.init();
          portfolioIsotope();
          owlCarousel();
          swiperSlider();
          wow();
          backTotop();
          fullWithvideo();
          jarallax();
          myWave();
    });

})(jQuery);

var ColorSwitcher = (function() {
    
    function initColorSwitcher(colorSheets) {
        var tempCon, colorSwitcher, controlBtn, colorSwitchs, linkHolderHtml, linkHolder;

        if (Object.prototype.toString.call(colorSheets) !== "[object Array]") {
            return;
        }

        tempCon = document.createDocumentFragment();
        
        colorSwitcher = document.createElement("div");
        colorSwitcher.classList.add("ColorSwitcher");

        var colorHead = document.createElement("h6");
        var colorText = document.createElement("p");
        colorHead.innerHTML = "Color Switcher";
        colorText.innerHTML = "Select from options below to check template with color variations.";
        colorSwitcher.appendChild(colorHead);
        colorSwitcher.appendChild(colorText);

        controlBtn = document.createElement("button");
        controlBtn.classList.add("ColorSwitcher__control");

        colorSwitchs = document.createElement("div");
        colorSwitchs.classList.add("ColorSwitcher__switchs");

        linkHolderHtml = document.createElement("link");
        linkHolderHtml.rel = "stylesheet";
        linkHolderHtml.id = "ColorSwitcherLinkHolder";
        document.head.appendChild(linkHolderHtml);

        linkHolder = document.getElementById("ColorSwitcherLinkHolder");

        colorSheets.forEach(function(colorSheet, index) {
            var colorSwitch;

            if (colorSheet.color && colorSheet.title && colorSheet.href) {
                colorSwitch = document.createElement("button");

                colorSwitch.classList.add("ColorSwitcher__switch")
                colorSwitch.title = colorSheet.title;
                colorSwitch.dataset.index = index;
                colorSwitch.style.backgroundColor = colorSheet.color;
                
                colorSwitchs.appendChild(colorSwitch);
            }
        });

        colorSwitchs.addEventListener("click", function(event) {
            var index;

            if (event.target.nodeName !== "BUTTON") {
                return;
            }

            index = event.target.dataset.index;
            linkHolder.href = colorSheets[index].href

            return false;
        });

        controlBtn.addEventListener("click", function(event) {
            event.target.parentElement.classList.toggle("ColorSwitcher--open");

            return false;
        });

        colorSwitcher.appendChild(controlBtn);
        colorSwitcher.appendChild(colorSwitchs);
        tempCon.appendChild(colorSwitcher);
        document.body.appendChild(tempCon);
    }

    return {
        init: initColorSwitcher
    };
})();

 var colorSheets = [
    {
        color: "#4bda28",
        title: "Switch to blue",
        href: "assets/css/colors/blue.css"
    },
    {
        color: "#4650dc",
        title: "Switch to orange",
        href: "assets/css/colors/orange.css"
    },
    {
        color: "#f41c54",
        title: "Switch to purple",
        href: "assets/css/colors/purple.css"
    },
    {
        color: "#f00",
        title: "Switch to sunset",
        href: "assets/css/colors/sunset.css"
    },
    {
        color: "#ff8400",
        title: "Switch to amy crisp",
        href: "assets/css/colors/amy-crisp.css"
    },
    {
        color: "#ff463a",
        title: "Switch to aqua splash",
        href: "assets/css/colors/aqua-splash.css"
    }
    
    ];

    // ColorSwitcher.init(colorSheets);

    // Validate email and message ok  
const $form = document.querySelector('form');
if ($form) {
    $form.addEventListener('submit', handleSubmit);
    console.log('mesagge' + $form);
    async function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'Application/json'
            }

        })
        if (response.ok) {
            this.reset();

        }

    }
}


// Validate email de web site
function validate(email) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var okvalide = expReg.test(email);
    if (okvalide == true) {

    } else {

    }

}