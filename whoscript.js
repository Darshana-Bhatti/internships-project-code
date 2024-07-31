function toggleDropdown() {
    var dropdownContent = document.getElementById('aboutDropdown');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
  }
  //fifth
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.fifth1');
    const slideWidth = slides[0].offsetWidth;
    const visibleSlides = 3; // Number of slides visible at once
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * (slideWidth)}px)`;
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            updateSlider();
        }
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    document.querySelector('.next').addEventListener('click', goToNextSlide);
    document.querySelector('.prev').addEventListener('click', goToPrevSlide);

    let startX = 0;
    let deltaX = 0;

    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        deltaX = startX - e.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (deltaX > 50) {
            goToNextSlide();
        } else if (deltaX < -50) {
            goToPrevSlide();
        }
        startX = 0;
        deltaX = 0;
    }

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
});


