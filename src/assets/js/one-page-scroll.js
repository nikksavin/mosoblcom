$(document).ready(function () {
	if ($(window).width() > 744) {
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
			easing : 'linear'
		});
	}
});
