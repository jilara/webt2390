<?php
// Footer data
$footerData = [
    'contact' => 'Call us: (555) 123-4567',
    'email' => 'info@flowershop.com',
    'address' => '123 Flower Street, Garden City, NY',
    
];
?>

<footer>
    <div class="footer-content">
        <p><?php echo htmlspecialchars($footerData['contact']); ?></p>
        <p>Email: <a href="mailto:<?php echo htmlspecialchars($footerData['email']); ?>"><?php echo htmlspecialchars($footerData['email']); ?></a></p>
        <p>Address: <?php echo htmlspecialchars($footerData['address']); ?></p>
        <ul>
            <?php foreach ($footerData['social_media'] as $platform => $url): ?>
                <li><a href="<?php echo htmlspecialchars($url); ?>"><?php echo htmlspecialchars($platform); ?></a></li>
            <?php endforeach; ?>
        </ul>
        
        <p>&copy; <?php echo date("Y"); ?> Flower Shop. All rights reserved.</p>
    </div>
</footer>

