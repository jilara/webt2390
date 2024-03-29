$(document).ready(function(){
    // Image swapping in gallery
    $('.gallery-item').click(function(){
        var $img = $(this).find('img');
        var originalSrc = $img.attr('src');
        var altSrc = $(this).data('alt-src');
        
        // Toggle between original and alternative images
        if ($img.attr('src') === originalSrc) {
            $img.attr('src', altSrc);
        } 
    });
    // pic swap gallery
    $('.thumbnails img').click(function(){
        var newSrc = $(this).attr('src');
        $('.main-image img').attr('src', newSrc);
    });
});
