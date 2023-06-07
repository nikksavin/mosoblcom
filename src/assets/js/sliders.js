$(document).ready(function() {
    
    // let heroSlider = new Swiper('.hero', {
    //     direction: 'vertical',
    //     slidesPerView: 1,
    //     paginationClickable: true,
    //     mousewheel: true,
    //     mousewheelControl: true,
    //     speed: 600
    // });

    let heroInnerSlider = new Swiper('.hero', {
        pagination: {
            el: '.hero__pagination',
            clickable: true
        },
        slidesPerView: 1,
        paginationClickable: true,
    });

})

$(document).ready(function() {
	$('#hero').pagepiling({
	   
       
	});
});