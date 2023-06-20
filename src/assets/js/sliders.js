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
			// spaceBetween: 30,
			watchSlidesProgress: true,
			loop: false,
			freemode: true,
			mousewheel: {
				forceToAxis: true,
			},
			hashNavigation: {
				watchState: true,
			},
			slideToClickedSlide: true,
			watchSlidesVisibility: true,
			slidesOffsetAfter: 0

			// breakpoints: {
			// 	1400: {
			// 		spaceBetween: 70,
			// 	},
			// },
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


	function projectsPageGalleryNavSliderInit() {
		let projectsPageGallerNavySlider = new Swiper(".projects-detail__gallery-nav", {
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

	projectsPageGalleryNavSliderInit();


	function projectsPageGallerySliderInit() {
		let projectsPageGallerSlider = new Swiper(".projects-detail__gallery-bottom", {
			slidesPerView: 2,
			spaceBetween: 10,
			centeredSlides: true,
			loop: true,

			navigation: {
				nextEl: ".projects-detail__gallery-next",
				prevEl: ".projects-detail__gallery-prev",
			},
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

	projectsPageGallerySliderInit();


	function projectsPageTimelineSliderInit() {
		let projectsPageTimelineSlider = new Swiper(".projects-detail__timeline-slider", {
			slidesPerView: 1.09,
			// spaceBetween: 10,
			// centeredSlides: true,
			// loop: true,


			breakpoints: {
				544: {
					slidesPerView: 2.09,
				},

				1400: {
					slidesPerView: 4.01,
				},
			},
			
		});
	}

	projectsPageTimelineSliderInit();


	function anotherProjectsSliderInit() {
		let anotherProjectsSlider = new Swiper(".another__projects-items ", {
			slidesPerView: 1,

			navigation: {
				nextEl: ".another__projects-next",
				prevEl: ".another__projects-prev",
			},
			breakpoints: {
				744: {
					slidesPerView: 2,
					spaceBetween: 100,
					centeredSlides: true,
					loop: true,
				},
				// 1400: {
				// 	spaceBetween: 25,
				// },
			},
		});
	}

	anotherProjectsSliderInit();

	function pageDirectionsNavInit() {
		let pageDirectionNav = new Swiper(".page__directions-nav-items", {
			slidesPerView: 'auto',
			spaceBetween: 70,
		});
	}

	pageDirectionsNavInit();

	// BREADCRUMBS
    let breadcrumbsSlider
    let breadcrumbsSliderInit
    
    function breadcrumbsSliderRun() {
        if ($('.breadcrumbs .swiper').length) {
          if ($(window).width() < 1024) {
            if(!breadcrumbsSliderInit) {
              breadcrumbsSliderInit = true
              breadcrumbsSlider = new Swiper(`.breadcrumbs .swiper`, {
                    slidesPerView: 'auto',
                    freeMode: true,
                    slidesOffsetAfter: 0
                })
            }
          } else {
              if (typeof breadcrumbsSlider !== "undefined") {
                breadcrumbsSliderInit = false
                breadcrumbsSlider.destroy()
              }
          }
        }
    }
    
    breadcrumbsSliderRun()

    $(window).on('resize', function() {
      breadcrumbsSliderRun()
    })

	// const swiper = new Swiper('.swiper', {})

	// swiper.on('slideChange', function () {
	// 	currentSlide.textContent = swiper.activeIndex + 1
	// 	gsap.to(swiper.slides[swiper.activeIndex], {scale:1, opacity:1})
	// 	gsap.to(swiper.slides[swiper.previousIndex], {opacity:0.3, scale:0.8})
	// 	swiper.slides[swiper.previousIndex].animation.pause(0)
	// 	swiper.slides[swiper.activeIndex].animation.restart()
	// });

	// swiper.slides.forEach((slide, index)=>{
	// 	let letter = slide.querySelector("h1")
	// 	let description = slide.querySelector("h2")
	// 	let chars = SplitText.create(description, {type:"chars"})
	// 	let tl = gsap.timeline({paused:true})
	// 	tl.from(letter, {scale:0, opacity:0, ease:"back", duration:1})
	// 		.from(chars.chars, {opacity:0, yPercent:50, stagger:0.02}, "-=0.5")
	// 	slide.animation = tl
	// })

	// swiper.slides[0].animation.play()
});

