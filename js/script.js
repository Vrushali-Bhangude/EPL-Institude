const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close the menu when pressing the escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        toggleMenu();
    }
});

// Ensure the hamburger menu is focusable and can be activated by keyboard
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;
let slideInterval;

const showSlide = (index) => {
    currentIndex = index;
    if (currentIndex >= 3) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 2;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const startAutoplay = () => {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000); // Change slide every 4 seconds
};

const stopAutoplay = () => {
    clearInterval(slideInterval);
};

// Event listeners for buttons
prev.addEventListener('click', () => {
    stopAutoplay();
    showSlide(currentIndex - 1);
    startAutoplay(); // Restart autoplay after manual navigation
});

next.addEventListener('click', () => {
    stopAutoplay();
    showSlide(currentIndex + 1);
    startAutoplay(); // Restart autoplay after manual navigation
});

// Start autoplay on page load
startAutoplay();
 // Add a fade-in effect on page load
 window.addEventListener('load', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('visible');
        }, index * 200); // Stagger the fade-in effect by 200ms for each box
    });
});

// Get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Show modal with full-size image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        modalImage.src = imgSrc;
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicked outside of the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

