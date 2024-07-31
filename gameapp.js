//center
var i = 0;
      let slides = document.querySelectorAll(".slide");
      let slider = document.querySelector(".slider");
      var pause = false;
      function moveRight() {
        slides[i].className = "slide";
        i = (i + 1) % slides.length;
        slides[i].className = "slide active";
        let Xvalue = -160 * i;
        slider.style.transform = `translateX(${Xvalue}px)`;
      }
      function moveLeft() {
        slides[i].className = "slide";
        i = (i - 1 + slides.length) % slides.length;
        slides[i].className = "slide active";
        let Xvalue = -160 * i;
        slider.style.transform = `translateX(${Xvalue}px)`;
      }

      const interval = setInterval(() => {
        if (!pause) {
          moveRight();
        }
      }, 2000);

      function playPause() {
        let state = document.querySelector(".icon");
        if (state.innerHTML == "pause") {
          state.innerHTML = "play";
          pause = true;
        } else {
          state.innerHTML = "pause";
          pause = false;
        }
      }
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