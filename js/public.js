$('#aboutMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
})
$('#registerMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#register").offset().top
    }, 2000);
})
$('#packagesMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#packages").offset().top
    }, 2000);
})
$(".into-slider").slick({
    // rtl: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    rtl: true
});