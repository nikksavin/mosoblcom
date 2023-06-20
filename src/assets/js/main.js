$(document).ready(function () {
	// ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
	$("html").on("click", function (e) {
		if (
			!$(e.target).closest(".header__burger").length &&
            !$(e.target).closest(".nav__mobile-close").length &&
			!$(e.target).closest("#nav-mobile").length
		) {
			$("body").removeClass("overflow-hidden");
			$("#page").removeClass("bg-overlay");

			$("#nav-mobile").removeClass("active");
			$("#nav").removeClass("active");
		}
	});

	// HEADER FIXED
    $(window).on('scroll', function() {
		if ($(window).scrollTop() > $('header').height()) {
		  $('header').addClass('header-fixed')
		} else if ($(window).scrollTop() == 0) {
		  $('header').removeClass('header-fixed')
		  $('header').removeClass('header-backscroll')
		}
	  })
	  
	let lastScrollTop = 0;
	$(window).scroll(function(){
		let currentScroll = $(this).scrollTop()
		if (currentScroll > lastScrollTop){
			$('.header-fixed').removeClass('header-backscroll')
		} else {
			$('.header-fixed').addClass('header-backscroll')
		}
		lastScrollTop = currentScroll
	})

	$(".header__burger").on("click", function () {
		$(this).toggleClass("active");

		$("#nav-mobile").toggleClass("active");

		$("body").toggleClass("overflow-hidden");
		$("#page").toggleClass("bg-overlay");
	});

    $(".nav__mobile-close").on("click", function () {
		$(this).toggleClass("active");

		$("#nav-mobile").toggleClass("active");

		$("body").toggleClass("overflow-hidden");
		$("#page").toggleClass("bg-overlay");
	});


	// GSAP ANIMATION
	const tl = new TimelineMax();

	function myFunc() {
		$('.hero__slide').addClass('opacity')
	}

	tl
	  .to(".hr-line", 0.5, {width: 100 + '%'})
	  .fromTo(".header__wrapper", 1, {y: -100 + '%', opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
	  .fromTo(".hero__menu", 1, {y: -100 + '%', opacity: 0}, {y: 0, opacity: 1}, "-=1")
	  .fromTo(".hero__slide-image", 1, {scale: 1, opacity: 0 }, {scale: 1.5, opacity: 1}, "-=1")

	  .fromTo(".hero__direction", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.2")
	  .fromTo(".hero__title", 0.5, {opacity: 0}, {opacity: 1}, "-=0.3")
	  .fromTo(".hero__btn", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.5")
	  .fromTo(".hero__nav", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.5")

	  .fromTo(".hero__slide-image", 2, {scale: 1.5 }, {scale: 1})
	  .fromTo(".hero__right-text", 2, {y: 80, opacity: 0 }, {y: 0, opacity: 1, myFunc}, "-=2")
	  

	  // PLAY VIDEO ONCLICK
	$('.hero__right-video-content').click(function() {
		var video = $(this).prev()[0];
  
		if (video.paused) {
		  $(this).parent().addClass('active')
		  video.play();
		}
	});
  
	$('video').click(function() {
	  var video = $(this)[0];
  
		if (!video.paused) {
		  $(this).parent().removeClass('active')
		  video.pause();
		}
	})

});
