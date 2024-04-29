<?php
define('PAGE_TITLE', 'Home - Flower Shop');
define('H1_TITLE', 'Welcome to Our Flower Shop');
include 'flowerarrays.php';
?>

<body>

<main class="container">
    <h1><?php echo H1_TITLE; ?></h1>
    <section class="category">
        <?php foreach ($flowers as $flower): ?>
        <div class="category-item">
            <img src="<?php echo htmlspecialchars($flower['image']); ?>" alt="<?php echo htmlspecialchars($flower['name']); ?>">
            <h3><?php echo htmlspecialchars($flower['name']); ?></h3>
            <p><?php echo htmlspecialchars($flower['description']); ?></p>
            <p><?php echo htmlspecialchars($flower['price']); ?></p>
        </div>
        <?php endforeach; ?>
    </section>
</main>
<?php include 'footer.php'; ?>

</body>
</html>