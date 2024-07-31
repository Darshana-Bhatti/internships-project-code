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