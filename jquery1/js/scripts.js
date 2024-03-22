$(document).ready(function() {
    // Navbar toggle functionality
    $('.navbar-toggle').click(function() {
        $('.navbar-nav').slideToggle();
    });

    // Style for navbar and accordion
    $('.navbar-nav, .accordion-content').css({
        'color': 'black',
        'font-size': '20px',
        'background-color': 'white',
        'border-radius': '10px',
        'box-shadow': '2px 2px 5px rgba(0, 0, 0, 0.3)'
    });

    $('.accordion-header').css({
        'background-color': '#5c5c5c'
    });

    // Accordion functionality
    $('.accordion-header').click(function() {
        $('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideDown();
    });

    // Data for columns
    var columnData = {
        'column1': "<h2>Tesla</h2><p>Tesla, led by CEO Elon Musk, is renowned for its groundbreaking advancements in electric vehicles (EVs), renewable energy, and energy storage solutions. Tesla's electric cars feature cutting-edge technology such as autonomous driving capabilities, over-the-air software updates, and long-range batteries. Additionally, Tesla's Gigafactories produce lithium-ion batteries at scale, driving down costs and accelerating the adoption of clean energy.</p>",
        'column2': "<h2>Amazon</h2><p>Amazon, under the leadership of CEO Jeff Bezos, has revolutionized e-commerce, cloud computing, and artificial intelligence (AI). Amazon's e-commerce platform offers a seamless shopping experience with features like personalized recommendations, one-click purchasing, and fast delivery through Prime. Furthermore, Amazon Web Services (AWS) provides cloud computing services to businesses worldwide, enabling them to scale their operations and innovate rapidly. Amazon also invests heavily in AI research and development, powering voice assistants like Alexa and enhancing logistics and customer service operations.</p>",
        'column3': "<h2>SpaceX</h2><p>SpaceX, founded by entrepreneur Elon Musk, is a leading aerospace manufacturer and space transportation company. SpaceX has achieved numerous technological milestones, including the development of reusable rockets, the Dragon spacecraft for cargo and crew missions to the International Space Station (ISS), and the Starship spacecraft for interplanetary travel. SpaceX's innovative approach to space exploration has significantly reduced the cost of launching payloads into space and has paved the way for ambitious missions to Mars and beyond.</p>"
    };

    // Populate columns with data
    Object.keys(columnData).forEach(function(columnId) {
        $('#' + columnId).html(columnData[columnId]);
    });

    // Adjust column widths based on window size
    function adjustColumns() {
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.column').css('width', '100%');
        } else {
            var columnWidth = (100 / 3) + '%';
            $('.column').css('width', columnWidth);
        }
    }

    adjustColumns();

    $(window).resize(function() {
        adjustColumns();
    });

    // Set background image for containerA
    $('.containerA').css('background-image', 'url("image/bkg1.jpg")');

    // Carousel functionality
    var slideIndex = 0;

    function showSlides() {
        var slides = $('.slide');
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        slides.hide();
        slides.eq(slideIndex).show();
        slideIndex++;
        setTimeout(showSlides, 8000);
    }

    showSlides();

    $('.prev').click(function() {
        slideIndex -= 2;
        showSlides();
    });

    $('.next').click(function() {
        showSlides();
    });

    // Form submission via AJAX
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function(response) {
                $('#response').fadeIn();
            }
        });
    });
});
