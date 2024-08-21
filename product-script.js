document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the buttons
    const buyNowButton = document.querySelector(".buy-now");
    const addToCartButton = document.querySelector(".add-to-cart");

    // Add event listeners to the buttons
    buyNowButton.addEventListener("click", function() {
        alert("Thank you for your purchase!");
    });

    addToCartButton.addEventListener("click", function() {
        alert("Item added to cart!");
    });
});
function toggleContact() {
    const contactSection = document.querySelector('.contact');
    contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
} 

// JavaScript to handle navigation visibility on scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;
    
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.top = "-60px"; // Adjust based on the height of your nav
    } else {
        // Scrolling up
        nav.style.top = "0";
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});
