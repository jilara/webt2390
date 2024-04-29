<?php
define('PAGE_TITLE', 'Home - Flower Shop');
define('H1_TITLE', 'Welcome to Our Flower Shop');
include 'header.php';
?>

<body>


    <main class="container">
        <section class="content-section">
            <h2>About Our Flower Shop</h2>
            <p>Founded in 1998, our flower shop has been providing vibrant floral arrangements for all occasions. We are passionate about bringing smiles to people's faces with our hand-picked flowers from sustainable farms around the world.</p>
        </section>
        <section class="content-section">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="images/owner.jpg" alt="Shop Owner">
                <h3>Jane Doe</h3>
                <p>Founder & Lead Florist</p>
            </div>
            <div class="team-member">
                <img src="images/florist.jpg" alt="Senior Florist">
                <h3>John Smith</h3>
                <p>Senior Florist</p>
            </div>
            
        </section>
        <section class="content-section">
            <h2>Our Values</h2>
            <p>Commitment to quality, community involvement, and sustainability are at the heart of everything we do. We strive to create a positive impact through our work and community service.</p>
        </section>
    </main>
    <?php include 'footer.php'; ?>
</body>
</html>
