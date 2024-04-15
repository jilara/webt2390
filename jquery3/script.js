$(document).ready(function() {
    // Example jQuery to toggle the navigation menu on mobile devices
    $("#main-nav").click(function() {
        $(this).find("ul").slideToggle();
    });
});
$(document).ready(function() {
    $('.toggle-header').click(function() {
        $(this).next('.menu-content').slideToggle();
    });
});