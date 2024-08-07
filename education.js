//eight
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider8');
    const slides = document.querySelectorAll('.eight1');
    const prevButton = document.querySelector('.prev8');
    const nextButton = document.querySelector('.next8');
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - 1) {
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

    nextButton.addEventListener('click', goToNextSlide);
    prevButton.addEventListener('click', goToPrevSlide);
});
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
//21
function showPlayBtn(btnId) {
    var playBtn = document.getElementById(btnId);
    playBtn.style.display = "inline";
  }

  function togglePlay(id, img) {
    var audio = document.getElementById(id);
    if (audio.paused) {
      audio.play();
      img.src = "pause.png"; 
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start
      img.src = "play-btn.svg"; // Change back to play button image
    }
  }

  function changeImage(btnId, newImage) {
    var playBtn = document.getElementById(btnId);
    playBtn.src = newImage;
  }
  //20
  const slider = document.querySelector('.slider');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationId;
  
    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mousemove', dragging);
  
    function startDragging(event) {
      isDragging = true;
      startPosition = event.clientX;
      clearInterval(animationId);
    }
  
    function dragging(event) {
      if (isDragging) {
        const currentPosition = event.clientX;
        currentTranslate = currentPosition - startPosition + prevTranslate;
        setSliderPosition();
      }
    }
  
    function stopDragging() {
      isDragging = false;
      prevTranslate = currentTranslate;
    }
  
    function setSliderPosition() {
      if (currentTranslate > 0) {
        currentTranslate = 0;
      }
      const sliderWidth = slider.offsetWidth;
      const innerWidth = slider.scrollWidth;
      const threshold = sliderWidth - innerWidth;
      if (currentTranslate < threshold) {
        currentTranslate = threshold;
      }
      slider.style.transition = 'transform 0.5s ease';
      slider.style.transform = `translateX(${currentTranslate}px)`;
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
