document.addEventListener('DOMContentLoaded', function() {
    // Select all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Add click event listeners to each product card
    productCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Navigate to the product page
            // Here we assume product pages follow a pattern like 'product1.html', 'product2.html', etc.
            window.location.href = `product${index + 1}.html`; // Change this pattern as needed
        });
    });

    // Navigate to the collaboration page when the section is clicked
    const collaborationSection = document.querySelector('.full-width-section');
    collaborationSection.addEventListener('click', function() {
        window.location.href = 'collaboration.html'; // Change to the actual collaboration page URL
    });
});