document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    
    // Simple logic to add a slight tilt or interaction when clicking
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = "scale(0.95) translateY(-10px)";
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = "scale(1) translateY(-15px)";
        });
    });

    // Console log to confirm the site is ready
    console.log("Allure Exclusive Collection Loaded.");
});
