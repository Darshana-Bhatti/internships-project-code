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
//map
var zoomInButtons = document.querySelectorAll('.zoomIn');
    var zoomOutButtons = document.querySelectorAll('.zoomOut');

    zoomInButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var map = button.parentElement.previousElementSibling.querySelector('.iframe-map');
            var mapSrc = map.getAttribute('src');
            map.setAttribute('src', mapSrc.replace('z=12', 'z=15')); // You can adjust zoom level as needed
        });
    });

    zoomOutButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var map = button.parentElement.previousElementSibling.querySelector('.iframe-map');
            var mapSrc = map.getAttribute('src');
            map.setAttribute('src', mapSrc.replace('z=15', 'z=12')); // You can adjust zoom level as needed
        });
    });

    function changeCardColor(cardId) {
        document.getElementById(cardId).style.backgroundColor = 'lightblue';
    }

    function resetCardColor(cardId) {
        document.getElementById(cardId).style.backgroundColor = '#f9f9f9';
    }
