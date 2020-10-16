(function($){
	'use script';
	// Menu
	$(document).ready(function () {
		$('.menu').meanmenu({ 
			meanScreenWidth: "991"
		});
	});

	// Latest Blog Slider
	$(document).ready(function () {
		$(".latest-blog-full").owlCarousel({
			loop		: true,
			autoplay	: true,
			smartSpeed  :900,
			autoplayHoverPause  :true,
        	items               :3,
        	autoplayTimeout     :1900,
        	responsive:{
				0:{
					items:1
				},
				676:{
					items:2
				},
				800:{
					items:3
				},
			}
		});
	});

	// WOW JS
	new WOW().init();

	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if( scroll < 150 ){
				$('.header-top').removeClass('sticky');
			}else{
				$('.header-top').addClass('sticky');
			}
		});


		$(window).on('scroll',function(){
			var scroll1 = $(window).scrollTop();
			if( scroll1 < 150 ){
				$('.mean-bar').removeClass('sticky');
			}else{
				$('.mean-bar').addClass('sticky');
			}
		});
	});

	// scroll Area
	$(document).ready(function(){
		$('.scroll').click(function(){
			$('html').animate({
				'scrollTop' :0
			},700);
			return false;
		});
		$(window).on('scroll',function(){
			var a = $(window).scrollTop();
			if(a>400){
            $('.scroll').slideDown(300);
            
	        }else{
	            $('.scroll').slideUp(200);
	        }
		});
	});

	preloader
	$(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });

	// Menu Class Add
	$(document).ready(function(){
		$('.meanmenu-reveal').click(function(){
			$('.mean-container .mean-nav > ul').addClass('addd');
		});
	});



}(jQuery));