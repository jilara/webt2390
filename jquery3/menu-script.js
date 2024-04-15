

  document.querySelectorAll('.menu-img').forEach(item => {
    item.addEventListener('click', function() {
        // Show an enlarged view or a modal with more details
        alert(this.getAttribute('data-description') + " - Price: " + this.getAttribute('data-price'));
    });
});

$(function() {
    // Initialize the accordion
    $(".accordion").accordion({
        collapsible: true,
        active: false, // Start with all sections collapsed
        heightStyle: "content" // Adjusts the height of the accordion to the content of each section
    });
});

