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

});
