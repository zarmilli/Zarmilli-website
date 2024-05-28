document.addEventListener('DOMContentLoaded', function() {
    // Navigate to the store page when the "Shop Now" button is clicked
    const shopNowButton = document.querySelector('.shop-now-button');
    shopNowButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'store.html'; // Change to the actual store page URL
    });

    // Navigate to the men's page when the "Men" section is clicked
    const menSection = document.querySelector('.category.men');
    menSection.addEventListener('click', function() {
        window.open('men.html', '_blank'); // Change to the actual men's page URL
    });

    // Navigate to the women's page when the "Women" section is clicked
    const womenSection = document.querySelector('.category.women');
    womenSection.addEventListener('click', function() {
        window.open('women.html', '_blank'); // Change to the actual women's page URL
    });

    // Navigate to the collaboration page when the section is clicked
    const collaborationSection = document.querySelector('.full-width-section');
    collaborationSection.addEventListener('click', function() {
        window.location.href = 'collaboration.html'; // Change to the actual collaboration page URL
    });
});
