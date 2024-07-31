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
//industry
document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".industryinfo1"); 
    const arrowBtns = document.querySelectorAll(".industryinfo i"); 
    const wrapper = document.querySelector(".industryinfo"); 

    const firstCard = carousel.querySelector(".cardD");
    if (!firstCard) {
        console.error('No element with class "cardD" found.');
        return;
    }

    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 

    const dragStart = (e) => { 
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 

    const dragging = (e) => { 
        if (!isDragging) return; 
    
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) { 
            
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
    
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 

    const dragStop = () => { 
        isDragging = false; 
        carousel.classList.remove("dragging"); 
    }; 

    const autoPlay = () => { 
    
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
        
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
        
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
        
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500); 
    }; 

    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
});
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

        // Start auto slider when page loads
        startSlider();
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

