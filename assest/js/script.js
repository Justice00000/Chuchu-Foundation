let slideIndex = 0;
showSlide(slideIndex);

// Function to show the current slide
function showSlide(index) {
    let slides = document.querySelectorAll('.slide');

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
    updateIndicators(); // Update indicators
}

// Function to update the indicators
function updateIndicators() {
    let indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === slideIndex);
    });
}

// Event listener for indicators (clicking an indicator will show the corresponding slide)
document.querySelectorAll('.indicator').forEach((indicator, idx) => {
    indicator.addEventListener('click', function () {
        slideIndex = idx; // Set the current slide to the clicked indicator's index
        showSlide(slideIndex);
    });
});

// Auto slide functionality
setInterval(() => {
    slideIndex = (slideIndex < document.querySelectorAll('.slide').length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
}, 3000); // Change slide every 3 seconds