$(document).ready(function() {
    $("h2").click(function() {
        $(this).next(".content").slideToggle();
    });
});
