<?php
define('PAGE_TITLE', 'Home - Flower Shop');
define('H1_TITLE', 'Welcome to Our Flower Shop');
include 'header.php';
?>

<body>

    <main class="container">
    
        <div class="hero">
            <div>
            <h2><?php echo H1_TITLE; ?></h2>
                <p>Discover the perfect flowers for every occasion!</p>
                
            </div>
        </div>
        <section class="feature">
            <div class="feature-item">
                <img src="images/wedding.jpeg" alt="Wedding Flowers">
                <h3>Wedding Flowers</h3>
                <p>Beautiful arrangements to make your special day perfect.</p>
            </div>
            <div class="feature-item">
                <img src="images/carnation.jpg" alt="Carnation Flowers">
                <h3>Birthday Flowers</h3>
                <p>Vibrant flowers to celebrate a joyous occasion.</p>
            </div>
            <div class="feature-item">
                <img src="images/annivers.jpeg" alt="Anniversary Flowers">
                <h3>Anniversary Flowers</h3>
                <p>Elegant and romantic choices to mark your milestone.</p>
            </div>
        </section>
        <?php include 'footer.php'; ?>
    </main>
    
</body>
</html>