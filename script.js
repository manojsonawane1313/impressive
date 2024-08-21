document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleContact() {
    const contactSection = document.querySelector('.contact');
    contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
}
function toggleAbout() {
    const aboutSection = document.querySelector('#about');
    aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.products-grid .product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(searchInput) ? 'block' : 'none';
    });
}

function showAlert() {
    alert('More information coming soon!');
}
function showProductDetails(imageSrc, title, description, price) {
    document.getElementById('productDetailsImage').src = imageSrc;
    document.getElementById('productDetailsTitle').textContent = title;
    document.getElementById('productDetailsDescription').textContent = description;
    document.getElementById('productDetailsPrice').textContent = price;

    const overlay = document.getElementById('productDetailsOverlay');
    overlay.classList.add('active');
}

function toggleSearchBar() {
    const searchContainer = document.getElementById('searchContainer');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    if (searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
        searchIcon.style.display = 'block';
    } else {
        searchContainer.classList.add('active');
        searchIcon.style.display = 'none';
        searchInput.focus(); // Automatically focus on the input field
    }
}

document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('searchContainer');
    const searchIcon = document.getElementById('searchIcon');
    
    // Check if the click was outside the search container and the search icon
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        searchContainer.classList.remove('active');
        searchIcon.style.display = 'block'; // Ensure search icon is visible
    }
});

// JavaScript to handle navigation visibility on scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;
    
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.top = "-60px"; // Adjust based on the height of your nav
        nav.classList.add('scrolled');
    } else {
        // Scrolling up
        nav.style.top = "0";
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});
