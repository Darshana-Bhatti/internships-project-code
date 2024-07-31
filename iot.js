//unique
let slideIndexU = 0;

function moveSlider(n) {
    slideIndexU += n;
    showSlidesU();
}

function showSlidesU() {
    const slides = document.querySelectorAll('.cardU');
    const totalSlides = slides.length;

    if (slideIndexU < 0) {
        slideIndexU = totalSlides - 1;
    }
    if (slideIndexU >= totalSlides) {
        slideIndexU = 0;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.card-sliderU').style.transform = `translateX(-${slideIndexU * slideWidth}px)`;
}

//11
let slideIndexE = 1;
showSlides(slideIndexE);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndexE += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexE = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexE = 1}
  if (n < 1) {slideIndexE = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexE-1].style.display = "block";
  dots[slideIndexE-1].className += " active";
}
//client
let Dragging = false;
        let startPosition1 = 0;
        let currentTranslate1 = 0;
        let sliderInterval;

        const slider1 = document.querySelector('.sliderC');

        slider1.addEventListener('mousedown', dragStart);
        slider1.addEventListener('touchstart', dragStart);

        slider1.addEventListener('mouseup', dragEnd);
        slider1.addEventListener('touchend', dragEnd);

        slider1.addEventListener('mousemove', drag);
        slider1.addEventListener('touchmove', drag);

        // Auto slider
        function startSlider() {
            sliderInterval = setInterval(() => {
                currentTranslate1 -= 100; // Adjust this value to control slide speed
                slider1.style.transform = `translateX(${currentTranslate1}px)`;
            }, 4000); // Adjust this value to control slide interval
        }

        function stopSlider() {
            clearInterval(sliderInterval);
        }

        function dragStart(event) {
            if (event.type === 'touchstart') {
                startPosition1 = event.touches[0].clientX;
            } else {
                startPosition1 = event.clientX;
                isDragging = true;
                stopSlider();
            }
        }

        function dragEnd() {
            Dragging = false;
            startSlider();
        }

        function drag(event) {
            if (Dragging) {
                const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                const difference = currentPosition - startPosition1;
                currentTranslate1 += difference;
                slider.style.transform = `translateX(${currentTranslate1}px)`;
                startPosition = currentPosition;
            }
        }
//form
document.addEventListener('DOMContentLoaded', function () {
    var rangeInput = document.getElementById('budget-range');
    var rangeOutput = document.getElementById('budget-value');

    rangeInput.addEventListener('input', function () {
        rangeOutput.textContent = 'Budget: Rs ' + rangeInput.value;
    });

    // Initialize range value
    rangeOutput.textContent = 'Budget: Rs ' + rangeInput.value;
});

        