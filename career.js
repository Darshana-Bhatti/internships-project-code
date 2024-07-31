//unique
let slideIndex = 0;

function moveSlider(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelectorAll('.cardU');
    const totalSlides = slides.length;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.card-slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
//four
document.addEventListener("DOMContentLoaded", function() {
    const imageSlider = document.querySelector(".image-slider");
    const images = imageSlider.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    // Show the first image initially
    images[currentIndex].style.display = "block";

    function showImage(index) {
        // Hide all images
        images.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        images[index].style.display = "block";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        updateButtonState();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btn").disabled = currentIndex === 0;
        document.querySelector(".next-btn").disabled = currentIndex === totalImages - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btn").addEventListener("click", nextImage);
    document.querySelector(".prev-btn").addEventListener("click", prevImage);

    // Touch event listeners for touch slider
    imageSlider.addEventListener("touchstart", touchStart);
    imageSlider.addEventListener("touchmove", touchMove);
    imageSlider.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSlider.addEventListener("mousedown", touchStart);
    imageSlider.addEventListener("mousemove", touchMove);
    imageSlider.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startX - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImage();
            } else {
                // Swiping right (previous image)
                prevImage();
            }
            isDragging = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDragging = false;
    }
});
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
  //19
  new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 10
  }).mount();
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