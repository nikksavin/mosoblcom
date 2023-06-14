$(document).ready(function () {
	function heroSliderInit() {
		const heroSlider = document.querySelectorAll(".hero__slider");
		const heroSliderNextBtn = document.querySelectorAll(".hero__nav-next");
		const sliderPag = document.querySelectorAll(".hero__pagination");
		const sliderCounter = document.querySelectorAll(".hero__counter");

		for (i = 0; i < heroSliderNextBtn.length; i++) {
			heroSliderNextBtn[i].classList.add("hero__nav-next-" + i);
		}

		for (i = 0; i < sliderPag.length; i++) {
			sliderPag[i].classList.add("hero__pagination-" + i);
		}

		for (i = 0; i < sliderCounter.length; i++) {
			sliderCounter[i].classList.add("hero__counter-" + i);
		}

		for (i = 0; i < heroSlider.length; i++) {
			heroSlider[i].classList.add("hero__slider-" + i);

			let slider = new Swiper(".hero__slider-" + i, {
				pagination: {
					el: ".hero__pagination-" + i,
					clickable: true,
				},
				slidesPerView: 1,
				paginationClickable: true,
				navigation: {
					nextEl: ".hero__nav-next-" + i,
				},
			});

			let heroSliderPag = new Swiper(".hero__slider-" + i, {
				pagination: {
					el: ".hero__counter-" + i,
					type: "fraction",
					formatFractionCurrent: addZero,
					formatFractionTotal: addZero,
				},
			});

			slider.controller.control = heroSliderPag;

			function addZero(num) {
				return num > 9 ? num : "0" + num;
			}
		}
	}

	heroSliderInit();

	function heroNavInit() {
		let pageMenu = new Swiper(".hero__menu", {
			slidesPerView: "auto",
			spaceBetween: 30,
			watchSlidesProgress: true,
			loop: false,
			mousewheel: {
				forceToAxis: true,
			},
			hashNavigation: {
				watchState: true,
			},
			slideToClickedSlide: true,
			watchSlidesVisibility: true,

			breakpoints: {
				1400: {
					spaceBetween: 70,
				},
			},
		});
	}

	heroNavInit();



	function projectsPageSliderInit() {
		let projectsPageSlider = new Swiper(".page__projects-nav", {
			slidesPerView: "auto",
			spaceBetween: 10,
	
			breakpoints: {
				744: {
					spaceBetween: 20,
				},
				1400: {
					spaceBetween: 25,
				},
			},
		});
	}

	projectsPageSliderInit();



});

