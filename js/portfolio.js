$(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $('[data-toggle="nav"]').click(function() {
        $('#main-nav-links').slideToggle(200);
        $('.page').toggleClass('switcher');
    });
});