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

	// $('#nav .btn-style').on('click', function() {
	//     $("body").removeClass("overflow-hidden")
	//     $('#page').removeClass('bg-overlay')

	//     $('#nav').removeClass('active')
	//     $('#menu').removeClass('active')
	// })

	// $('#popup-success .btn-style').on('click', function() {
	//     $('.is-close').trigger('click')
	// })
});
