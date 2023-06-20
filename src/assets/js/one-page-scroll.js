$(document).ready(function () {
	gsap.config({
		nullTargetWarn: false,
		trialWarn: false
	});

	// GSAP ANIMATION ON LOAD PAGE
	const tl = new TimelineMax();
	
	if ($('body').hasClass('index-page')) {
		$('.hero__slide').addClass('opacity-in')
		
		function myFunc() {
			$('.hero__slide').addClass('opacity-out')
		}

		tl
		.to(".hr-line", 0.5, {width: 100 + '%'})
		.fromTo(".header__wrapper", 1, {y: -100 + '%', opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
		.fromTo(".hero__menu", 1, {y: -100 + '%', opacity: 0}, {y: 0, opacity: 1}, "-=1")
		.fromTo(`.hero__section--banner .hero__slide-image`, 1, {scale: 1, opacity: 0 }, {scale: 1.5, opacity: 1}, "-=1")
		.fromTo(".hero__get-request", 1, {y: 200, opacity: 0 }, {y: 0, opacity: 1}, "-=1")

		.fromTo(".hero__section--banner .hero__direction", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.2")
		.fromTo(".hero__section--banner .hero__title", 0.5, {opacity: 0}, {opacity: 1}, "-=0.3")
		.fromTo(".hero__section--banner .hero__btn", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.5")
		.fromTo(".hero__section--banner .hero__nav", 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=0.5")
		.fromTo(".hero__section--banner .hero__bottom", 0.5, {y: 80, opacity: 0 }, {y: 0, opacity: 1}, "-=0.5")

		.fromTo(".hero__section--banner .hero__slide-image", 2, {scale: 1.5 }, {scale: 1})
		.fromTo(".hero__section--banner .hero__right, .hero__section--banner .hero__text", 2, {y: 80, opacity: 0 }, {y: 0, opacity: 1, myFunc}, "-=2")
	  
	} else {
		tl
		.to(".hr-line", 0.5, {width: 100 + '%'})
		.fromTo(".header__wrapper", 1, {y: -100 + '%', opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
	}

	// GSAP ANIMATION ON LOAD SECTION
	if ($(window).width() > 744 && $("#hero").length) {
		$("#hero").pagepiling({
			navigation: false,
			menu: "#menu",
			anchors: [
				"screen1",
				"screen2",
				"screen3",
				"screen4",
				"screen5",
				"screen6",
			],
			easing : 'linear',

			afterLoad: function(anchorLink, index) {
				tl
				.fromTo(`#${anchorLink} .hero__slide-image`, 1, {scale: 1.5, opacity: 0.5 }, {scale: 1, opacity: 1})

				.fromTo(`#${anchorLink} .hero__direction`, 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=1")
				.fromTo(`#${anchorLink} .hero__title`, 0.5, {opacity: 0}, {opacity: 1}, "-=1")
				.fromTo(`#${anchorLink} .hero__btn`, 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=1")
				.fromTo(`#${anchorLink} .hero__nav`, 0.5, {x: -50 + '%', opacity: 0}, {x: 0, opacity: 1}, "-=1")
				.fromTo(`#${anchorLink} .hero__bottom`, 0.5, {y: 80, opacity: 0 }, {y: 0, opacity: 1}, "-=1")
				.fromTo(`#${anchorLink} .hero__right, #${anchorLink} .hero__text`, 1, {y: 80, opacity: 0 }, {y: 0, opacity: 1}, "-=1")
			},

			onLeave: function(index, nextIndex, direction) {
				$('.hero__direction').css('opacity', 0)
				$('.hero__text').css('opacity', 0)
				$('.hero__title').css('opacity', 0)
				$('.hero__btn').css('opacity', 0)
				$('.hero__nav').css('opacity', 0)
				$('.hero__right').css('opacity', 0)
				$('.hero__slide-image').css({'opacity': 0.5, 'transform': 'scale(1.5)'})
				$(".hero__bottom").css('opacity', 0)
			}
		});
	}
});
