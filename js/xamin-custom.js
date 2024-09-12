/*
Template: Xamin -Data Science & Analytics HTML Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------
1. Back To Top
2. Wow Animation
3. Top menu sticky
4. Owl Carousel
5. Isotope
6. Accordion
7.Progress Bar
8. Page Loader
9.Magnific Popup
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {

	"use strict";

	function activaTab(pill) {
		jQuery(pill).addClass('active show');
	}

	jQuery(window).on('load', function (e) {
		jQuery('ul.page-numbers').addClass('justify-content-center');

		// Back To Top
		jQuery('#back-to-top').fadeOut();

		// Wow Animation
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();

		jQuery('.sub-menu').css('display', 'none');
		jQuery('.sub-menu').prev().addClass('isubmenu');
		/*jQuery(".sub-menu").before('<i class="fa fa-angle-down toggledrop" aria-hidden="true"></i>');*/


		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}
	});

	jQuery(window).on('resize', function () {

		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}

		jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		});

		jQuery("#top-menu .menu-item .toggledrop").off("click");
		if (jQuery(window).width() < 992) {
			jQuery('#top-menu .menu-item .toggledrop').on('click', function (e) {
				e.preventDefault();
				jQuery(this).next('.children, .sub-menu').slideToggle();
			});
		}
	});

	/*------------------------
	Tabs
	--------------------------*/
	jQuery(window).on('scroll', function (e) {
		//top menu sticky
		if (jQuery(this).scrollTop() > 10) {
			jQuery('header').addClass('menu-sticky');
		} else {
			jQuery('header').removeClass('menu-sticky');
		}

		// Pill Tab
		var nav = jQuery('#pills-tab');
		if (nav.length) {
			var contentNav = nav.offset().top - window.outerHeight;
			if (jQuery(window).scrollTop() >= (contentNav)) {
				e.preventDefault();
				jQuery('#pills-tab li a').removeClass('active');
				jQuery('#pills-tab li a[aria-selected=true]').addClass('active');
			}
		}

		// Feature Tab
		var nav1 = jQuery('#features');
		if (nav1.length) {
			var contentNav1 = nav1.offset().top - window.outerHeight;
			if (jQuery(window).scrollTop() >= (contentNav1)) {
				e.preventDefault();
				jQuery('#features .row li a').removeClass('active');
				jQuery('#features .row li a[aria-selected=true]').addClass('active');
			}
		}

		//Back To Top
		if (jQuery(this).scrollTop() > 250) {
			jQuery('#back-to-top').fadeIn(1400);
		} else {
			jQuery('#back-to-top').fadeOut(400);
		}
	});

	/*---------------------------
	Tabs
	---------------------------*/
	jQuery(document).ready(function () {

		// scroll body to 0px on click
		jQuery('#top').on('click', function () {
			jQuery('top').tooltip('hide');
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		// Owl Carousel
		jQuery('.owl-carousel').each(function () {
			var jQuerycarousel = jQuery(this);
			jQuerycarousel.owlCarousel({
				items: jQuerycarousel.data("items"),
				loop: jQuerycarousel.data("loop"),
				margin: jQuerycarousel.data("margin"),
				nav: jQuerycarousel.data("nav"),
				dots: jQuerycarousel.data("dots"),
				autoplay: jQuerycarousel.data("autoplay"),
				autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
				navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
				responsiveClass: true,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: jQuerycarousel.data("items-mobile-sm"),
						nav: false,
						dots: false
					},
					// breakpoint from 480 up
					480: {
						items: jQuerycarousel.data("items-mobile"),
						nav: false,
						dots: true,
						
					},
					// breakpoint from 786 up
					768: {
						items: jQuerycarousel.data("items-tab")
					},
					// breakpoint from 1023 up
					1023: {
						items: jQuerycarousel.data("items-laptop")
					},
					1199: {
						items: jQuerycarousel.data("items")
					}
				}
			});
		});

		  /*------------------------
        2 Isotope
        --------------------------*/
        if($(".isotope").length){
         $('.isotope').isotope({
            itemSelector: '.iq-grid-item',
        });

        // filter items on button click
        $('.isotope-filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $('.isotope').isotope({
                resizable: true,
                filter: filterValue
            });
            $('.isotope-filters button').removeClass('active');
            $(this).addClass('active');
        });
    }
        /*------------------------
        3 Masonry
        --------------------------*/
         if($(".iq-masonry-block").length){   
        var $msnry = $('.iq-masonry-block .iq-masonry');
        if ($msnry) {
            var $filter = $('.iq-masonry-block .isotope-filters');
            $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            // bind filter button click
            $filter.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                    filter: filterValue
                });
            });

            $filter.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function() {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }
    }
		/*------------------------
		Accordion
		--------------------------*/
		jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide();
		jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
		jQuery('.iq-accordion .iq-accordion-block').on("click", function () {
			if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
				jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
				jQuery(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
			}
		});

		jQuery('.iq-faq .iq-block .iq-details').hide();
		jQuery('.iq-faq .iq-block:first').addClass('iq-active').children().slideDown('slow');
		jQuery('.iq-faq .iq-block').on("click", function() {
			if (jQuery(this).children('div').is(':hidden')) {
				jQuery('.iq-faq .iq-block').removeClass('iq-active').children('div').slideUp('slow');
				jQuery(this).toggleClass('iq-active').children('div').slideDown('slow');
			}
		});
		
		/*------------------------
		Progress Bar
		--------------------------*/
		jQuery('.iq-progress-bar > span').each(function () {
			var jQuerythis = jQuery(this);
			var width = jQuery(this).data('percent');
			jQuerythis.css({
				'transition': 'width 2s'
			});
			setTimeout(function () {
				jQuerythis.appear(function () {
					jQuerythis.css('width', width + '%');
				});
			}, 500);
		});

		jQuery('.nav.nav-pills').each(function () {
			var b = jQuery(this).find('a.active').attr('href');
			activaTab(b);
		});

		/*------------------------
		Page Loader
		--------------------------*/
		jQuery("#load").fadeOut();
		jQuery("#loading").delay(0).fadeOut("slow");

		// Video MagnificPopup
		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		});

		jQuery('.timer').countTo();
	});
})(jQuery);