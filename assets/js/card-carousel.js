// Function to handle click event for next button
function handleNextClick() {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
    } else {
        scrollPosition = 0; // Reset scroll position to the beginning
    }
    moveCarousel(scrollPosition);
}

// Function to handle click event for previous button
function handlePrevClick() {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
    } else {
        scrollPosition = carouselWidth - cardWidth * 4; // Reset scroll position to the end
    }
    moveCarousel(scrollPosition);
}

// Function to move the carousel to the specified position
function moveCarousel(position) {
    carouselItems.forEach(item => {
        item.style.transition = "transform 0.6s ease"; // Smooth transition for each item
        item.style.transform = `translateX(-${position}px)`; // Apply translate effect to each item
    });
}

// Get the carousel and inner elements
var carousel = document.getElementById("movies-card-slider");
var carouselInner = carousel.querySelector(".movies-card-slider-carousel-inner");
var carouselItems = carouselInner.querySelectorAll(".movies-card-slider-carousel-item");

// Calculate initial scroll width and card width
var carouselWidth = carouselInner.scrollWidth;
var cardWidth = carouselItems[0].offsetWidth;

// Initial scroll position
var scrollPosition = 0;

// Attach click event listeners to next and previous buttons
carousel.querySelector(".movies-card-slider-carousel-next").addEventListener("click", handleNextClick);
carousel.querySelector(".movies-card-slider-carousel-prev").addEventListener("click", handlePrevClick);

// Check if it's a large screen, if not, add slide class
if (!window.matchMedia("(min-width: 768px)").matches) {
    carousel.classList.add("slide");
}
