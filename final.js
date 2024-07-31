/*dropdown
function toggleDropdown() {
    var dropdownContent = document.getElementById('aboutDropdown');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
  }
  */
  var dropdownTimeout;

function toggleDropdown(dropdownId) {
  clearTimeout(dropdownTimeout);
  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display = "block";
}

function hideDropdown(dropdownId) {
  dropdownTimeout = setTimeout(function() {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = "none";
  }, 200);
}

function keepDropdown(dropdownId) {
  clearTimeout(dropdownTimeout);
}

function leaveDropdown(dropdownId) {
  dropdownTimeout = setTimeout(function() {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = "none";
  }, 200);
}

  

 //second
  window.onload = function() {
    var slideContainer = document.querySelector('.slide-images');
    var slideWidth = document.querySelector('.slide-image').offsetWidth + 10; // Width of each slide image plus margin-right

    setInterval(function() {
        slideContainer.style.transition = 'transform 1s ease-in-out';
        slideContainer.style.transform = 'translateX(' + (-slideWidth) + 'px)';
        setTimeout(function() {
            slideContainer.appendChild(slideContainer.firstElementChild);
            slideContainer.style.transition = 'none';
            slideContainer.style.transform = 'translateX(0)';
        }, 1000);
    }, 5000); 
};

//seven
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var textBlock = imgs.nextElementSibling.innerHTML;
  
    expandImg.src = imgs.src;
    imgText.innerHTML = textBlock;
    imgText.style.display = "block";
    document.querySelectorAll('.container7').forEach(function(el) {
      el.style.display = "none";
    });
    document.querySelector('.container7').style.display = "flex";
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
  //cau
  const carousel = document.querySelector('.carousel');
      const slides = document.querySelector('.slides');
      const slide = document.querySelectorAll('.slide');
      
      let autoplayInterval;
      
      function startAutoplay() {
        autoplayInterval = setInterval(() => {
          nextSlide();
        }, 3000);
      }
      
      function stopAutoplay() {
        clearInterval(autoplayInterval);
      }
      
      function nextSlide() {
        const slideWidth = slide[0].clientWidth;
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${slideWidth}px)`;
      
        setTimeout(() => {
          slides.appendChild(slides.firstElementChild);
          slides.style.transition = 'none';
          slides.style.transform = 'translateX(0)';
        }, 500);
      }
      
      carousel.addEventListener('mouseenter', () => {
        stopAutoplay();
      });
      
      carousel.addEventListener('mouseleave', () => {
        startAutoplay();
      });
      
      startAutoplay();
     
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
//nineteen
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