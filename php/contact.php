<?php
define('PAGE_TITLE', 'Contact - Flower Shop');
define('H1_TITLE', 'Welcome to Our Flower Shop');
include 'contactarray.php';
?>

<body>

    <main class="container">

    <h1><?php echo H1_TITLE; ?></h1>
    <div class="contact-info">
        <p><strong>Address:</strong> <?php echo htmlspecialchars($contactDetails['address']); ?></p>
        <p><strong>Phone:</strong> <?php echo htmlspecialchars($contactDetails['phone']); ?></p>
        <p><strong>Email:</strong> <a href="mailto:<?php echo htmlspecialchars($contactDetails['email']); ?>"><?php echo htmlspecialchars($contactDetails['email']); ?></a></p>
        <p><strong>Follow us on social media:</strong></p>
        
    </div>


        <h2>Contact Us</h2>
        <div class="contact-form">
            <form action="submit_contact.php" method="post">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </div>
            </form>
            
        </div>
        
    </main>
    
    <?php include 'footer.php'; ?>
    
</body>
</html>