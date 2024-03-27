$(document).ready(function(){
    // Image swapping in gallery
    $('.gallery-item').click(function(){
        var $img = $(this).find('img');
        var originalSrc = $img.attr('src');
        var altSrc = $(this).data('alt-src');
        
        // Check if the current source is the original or alternative
        if ($img.data('current-src') === 'original' || typeof $img.data('current-src') === 'undefined') {
            $img.attr('src', altSrc);
            $img.data('current-src', 'alternative');
        } else {
            $img.attr('src', originalSrc);
            $img.data('current-src', 'original');
        }
    });
});
