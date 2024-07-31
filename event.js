let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let sliderInterval;

    const slider = document.querySelector('.sliderC');

    // Event listeners for touch and mouse events
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);

    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('touchend', dragEnd);

    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    // Start auto slider when page loads
    startSlider();

    // Auto slider function
    function startSlider() {
        sliderInterval = setInterval(() => {
            if (!isDragging) {
                moveSlider(-1); // Adjust this value to control slide speed
            }
        }, 1000); // Adjust this value to control slide interval
    }

    // Stop auto slider when dragging
    function stopSlider() {
        clearInterval(sliderInterval);
    }

    // Function to handle drag start
    function dragStart(event) {
        if (event.type === 'touchstart') {
            startPosition = event.touches[0].clientX;
        } else {
            startPosition = event.clientX;
        }
        isDragging = true;
        stopSlider();
    }

    // Function to handle drag end
    function dragEnd() {
        isDragging = false;
        startSlider();
    }

    // Function to handle dragging
    function drag(event) {
        if (isDragging) {
            const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            const difference = currentPosition - startPosition;
            currentTranslate += difference;
            slider.style.transform = `translateX(${currentTranslate}px)`;
            startPosition = currentPosition;
        }
    }

    // Function to move the slider
    function moveSlider(direction) {
        currentTranslate += direction * 100; // Adjust this value to control slide distance
        if (currentTranslate > 0) {
            currentTranslate = -(slider.scrollWidth - slider.clientWidth); // Loop back to the beginning
        } else if (currentTranslate < -(slider.scrollWidth - slider.clientWidth)) {
            currentTranslate = 0; // Loop back to the beginning
        }
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Pause auto slider when mouse enters slider area
    slider.addEventListener('mouseenter', () => {
        stopSlider();
    });

    // Resume auto slider when mouse leaves slider area
    slider.addEventListener('mouseleave', () => {
        startSlider();
    });
    //2
    document.addEventListener('DOMContentLoaded', function() {
        (function() {
            let isDragging = false;
            let startPosition = 0;
            let currentTranslate = 0;
            let sliderInterval;
        
            const slider = document.querySelector('.sliderC');
        
            // Event listeners for touch and mouse events
            slider.addEventListener('mousedown', dragStart);
            slider.addEventListener('touchstart', dragStart);
        
            slider.addEventListener('mouseup', dragEnd);
            slider.addEventListener('touchend', dragEnd);
        
            slider.addEventListener('mousemove', drag);
            slider.addEventListener('touchmove', drag);
        
            // Start auto slider when page loads
            startSlider();
        
            // Auto slider function
            function startSlider() {
                sliderInterval = setInterval(() => {
                    if (!isDragging) {
                        moveSlider(-1); // Adjust this value to control slide speed
                    }
                }, 1000); // Adjust this value to control slide interval
            }
        
            // Stop auto slider when dragging
            function stopSlider() {
                clearInterval(sliderInterval);
            }
        
            // Function to handle drag start
            function dragStart(event) {
                if (event.type === 'touchstart') {
                    startPosition = event.touches[0].clientX;
                } else {
                    startPosition = event.clientX;
                }
                isDragging = true;
                stopSlider();
            }
        
            // Function to handle drag end
            function dragEnd() {
                isDragging = false;
                startSlider();
            }
        
            // Function to handle dragging
            function drag(event) {
                if (isDragging) {
                    const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                    const difference = currentPosition - startPosition;
                    currentTranslate += difference;
                    slider.style.transform = `translateX(${currentTranslate}px)`;
                    startPosition = currentPosition;
                }
            }
        
            // Function to move the slider
            function moveSlider(direction) {
                currentTranslate += direction * 100; // Adjust this value to control slide distance
                if (currentTranslate > 0) {
                    currentTranslate = -(slider.scrollWidth - slider.clientWidth); // Loop back to the beginning
                } else if (currentTranslate < -(slider.scrollWidth - slider.clientWidth)) {
                    currentTranslate = 0; // Loop back to the beginning
                }
                slider.style.transform = `translateX(${currentTranslate}px)`;
            }
        
            // Pause auto slider when mouse enters slider area
            slider.addEventListener('mouseenter', () => {
                stopSlider();
            });
        
            // Resume auto slider when mouse leaves slider area
            slider.addEventListener('mouseleave', () => {
                startSlider();
            });
        })();
        
    });
    //2
    $(document).ready(function() {
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = $(".imgD img");
            for (i = 0; i < slides.length; i++) {
                slides.eq(i).css("display", "none");
            }
            slideIndex++;
            if (slideIndex > slides.length - 2) {slideIndex = 0} // Reset when reaching the end
            slides.eq(slideIndex).css("display", "block");
            slides.eq(slideIndex + 1).css("display", "block");
            slides.eq(slideIndex + 2).css("display", "block");
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    });
    //3
    let isDraggingE = false;
    let startPositionE = 0;
    let currentTranslateE = 0;
    let sliderIntervalE;
    
    const sliderE = document.querySelector('.sliderE');
    
    // Event listeners for touch and mouse events
    sliderE.addEventListener('mousedown', dragStartE);
    sliderE.addEventListener('touchstart', dragStartE);
    
    sliderE.addEventListener('mouseup', dragEndE);
    sliderE.addEventListener('touchend', dragEndE);
    
    sliderE.addEventListener('mousemove', dragE);
    sliderE.addEventListener('touchmove', dragE);
    
    // Start auto slider when page loads
    startSliderE();
    
    // Auto slider function
    function startSliderE() {
        sliderIntervalE = setInterval(() => {
            if (!isDraggingE) {
                moveSliderE(-1); // Adjust this value to control slide speed
            }
        }, 3000); // Adjust this value to control slide interval
    }
    
    // Stop auto slider when dragging
    function stopSliderE() {
        clearInterval(sliderIntervalE);
    }
    
    // Function to handle drag start
    function dragStartE(event) {
        if (event.type === 'touchstart') {
            startPositionE = event.touches[0].clientX;
        } else {
            startPositionE = event.clientX;
        }
        isDraggingE = true;
        stopSliderE();
    }
    
    // Function to handle drag end
    function dragEndE() {
        isDraggingE = false;
        startSliderE();
    }
    
    // Function to handle dragging
    function dragE(event) {
        if (isDraggingE) {
            const currentPositionE = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            const differenceE = currentPositionE - startPositionE;
            currentTranslateE += differenceE;
            sliderE.style.transform = `translateX(${currentTranslateE}px)`;
            startPositionE = currentPositionE;
        }
    }
    
    // Function to move the slider
    function moveSliderE(direction) {
        currentTranslateE += direction * sliderE.offsetWidth; // Adjust this value to control slide distance
        if (currentTranslateE > 0) {
            currentTranslateE = -(sliderE.scrollWidth - sliderE.clientWidth); // Loop back to the beginning
        } else if (currentTranslateE < -(sliderE.scrollWidth - sliderE.clientWidth)) {
            currentTranslateE = 0; // Loop back to the beginning
        }
        sliderE.style.transform = `translateX(${currentTranslateE}px)`;
    }
    
    // Pause auto slider when mouse enters slider area
    sliderE.addEventListener('mouseenter', () => {
        stopSliderE();
    });
    
    // Resume auto slider when mouse leaves slider area
    sliderE.addEventListener('mouseleave', () => {
        startSliderE();
    });
    //F************************************
    let isDraggingF = false;
let startPositionF = 0;
let currentTranslateF = 0;
let sliderIntervalF;

const sliderF = document.querySelector('.sliderF');

// Event listeners for touch and mouse events
sliderF.addEventListener('mousedown', dragStartF);
sliderF.addEventListener('touchstart', dragStartF);

sliderF.addEventListener('mouseup', dragEndF);
sliderF.addEventListener('touchend', dragEndF);

sliderF.addEventListener('mousemove', dragF);
sliderF.addEventListener('touchmove', dragF);

// Start auto slider when page loads
startSliderF();

// Auto slider function
function startSliderF() {
    sliderIntervalF = setInterval(() => {
        if (!isDraggingF) {
            moveSliderF(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderF() {
    clearInterval(sliderIntervalF);
}

// Function to handle drag start
function dragStartF(event) {
    if (event.type === 'touchstart') {
        startPositionF = event.touches[0].clientX;
    } else {
        startPositionF = event.clientX;
    }
    isDraggingF = true;
    stopSliderF();
}

// Function to handle drag end
function dragEndF() {
    isDraggingF = false;
    startSliderF();
}

// Function to handle dragging
function dragF(event) {
    if (isDraggingF) {
        const currentPositionF = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceF = currentPositionF - startPositionF;
        currentTranslateF += differenceF;
        sliderF.style.transform = `translateX(${currentTranslateF}px)`;
        startPositionF = currentPositionF;
    }
}

// Function to move the slider
function moveSliderF(direction) {
    currentTranslateF += direction * sliderF.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateF > 0) {
        currentTranslateF = -(sliderF.scrollWidth - sliderF.clientWidth); // Loop back to the beginning
    } else if (currentTranslateF < -(sliderF.scrollWidth - sliderF.clientWidth)) {
        currentTranslateF = 0; // Loop back to the beginning
    }
    sliderF.style.transform = `translateX(${currentTranslateF}px)`;
}

// Pause auto slider when mouse enters slider area
sliderF.addEventListener('mouseenter', () => {
    stopSliderF();
});

// Resume auto slider when mouse leaves slider area
sliderF.addEventListener('mouseleave', () => {
    startSliderF();
});
//G*********************
let isDraggingG = false;
let startPositionG = 0;
let currentTranslateG = 0;
let sliderIntervalG;

const sliderG = document.querySelector('.sliderG');

// Event listeners for touch and mouse events
sliderG.addEventListener('mousedown', dragStartG);
sliderG.addEventListener('touchstart', dragStartG);

sliderG.addEventListener('mouseup', dragEndG);
sliderG.addEventListener('touchend', dragEndG);

sliderG.addEventListener('mousemove', dragG);
sliderG.addEventListener('touchmove', dragG);

// Start auto slider when page loads
startSliderG();

// Auto slider function
function startSliderG() {
    sliderIntervalG = setInterval(() => {
        if (!isDraggingG) {
            moveSliderG(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderG() {
    clearInterval(sliderIntervalG);
}

// Function to handle drag start
function dragStartG(event) {
    if (event.type === 'touchstart') {
        startPositionG = event.touches[0].clientX;
    } else {
        startPositionG = event.clientX;
    }
    isDraggingG = true;
    stopSliderG();
}

// Function to handle drag end
function dragEndG() {
    isDraggingG = false;
    startSliderG();
}

// Function to handle dragging
function dragG(event) {
    if (isDraggingG) {
        const currentPositionG = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceG = currentPositionG - startPositionG;
        currentTranslateG += differenceG;
        sliderG.style.transform = `translateX(${currentTranslateG}px)`;
        startPositionG = currentPositionG;
    }
}

// Function to move the slider
function moveSliderG(direction) {
    currentTranslateG += direction * sliderG.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateG > 0) {
        currentTranslateG = -(sliderG.scrollWidth - sliderG.clientWidth); // Loop back to the beginning
    } else if (currentTranslateG < -(sliderG.scrollWidth - sliderG.clientWidth)) {
        currentTranslateG = 0; // Loop back to the beginning
    }
    sliderG.style.transform = `translateX(${currentTranslateG}px)`;
}

// Pause auto slider when mouse enters slider area
sliderG.addEventListener('mouseenter', () => {
    stopSliderG();
});

// Resume auto slider when mouse leaves slider area
sliderG.addEventListener('mouseleave', () => {
    startSliderG();
});
//H************************* 
let isDraggingH = false;
let startPositionH = 0;
let currentTranslateH = 0;
let sliderIntervalH;

const sliderH = document.querySelector('.sliderH');

// Event listeners for touch and mouse events
sliderH.addEventListener('mousedown', dragStartH);
sliderH.addEventListener('touchstart', dragStartH);

sliderH.addEventListener('mouseup', dragEndH);
sliderH.addEventListener('touchend', dragEndH);

sliderH.addEventListener('mousemove', dragH);
sliderH.addEventListener('touchmove', dragH);

// Start auto slider when page loads
startSliderH();

// Auto slider function
function startSliderH() {
    sliderIntervalH = setInterval(() => {
        if (!isDraggingH) {
            moveSliderH(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderH() {
    clearInterval(sliderIntervalH);
}

// Function to handle drag start
function dragStartH(event) {
    if (event.type === 'touchstart') {
        startPositionH = event.touches[0].clientX;
    } else {
        startPositionH = event.clientX;
    }
    isDraggingH = true;
    stopSliderH();
}

// Function to handle drag end
function dragEndH() {
    isDraggingH = false;
    startSliderH();
}

// Function to handle dragging
function dragH(event) {
    if (isDraggingH) {
        const currentPositionH = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceH = currentPositionH - startPositionH;
        currentTranslateH += differenceH;
        sliderH.style.transform = `translateX(${currentTranslateH}px)`;
        startPositionH = currentPositionH;
    }
}

// Function to move the slider
function moveSliderH(direction) {
    currentTranslateH += direction * sliderH.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateH > 0) {
        currentTranslateH = -(sliderH.scrollWidth - sliderH.clientWidth); // Loop back to the beginning
    } else if (currentTranslateH < -(sliderH.scrollWidth - sliderH.clientWidth)) {
        currentTranslateH = 0; // Loop back to the beginning
    }
    sliderH.style.transform = `translateX(${currentTranslateH}px)`;
}

// Pause auto slider when mouse enters slider area
sliderH.addEventListener('mouseenter', () => {
    stopSliderH();
});

// Resume auto slider when mouse leaves slider area
sliderH.addEventListener('mouseleave', () => {
    startSliderH();
});
//I***********************************
let isDraggingI = false;
let startPositionI = 0;
let currentTranslateI = 0;
let sliderIntervalI;

const sliderI = document.querySelector('.sliderI');

// Event listeners for touch and mouse events
sliderI.addEventListener('mousedown', dragStartI);
sliderI.addEventListener('touchstart', dragStartI);

sliderI.addEventListener('mouseup', dragEndI);
sliderI.addEventListener('touchend', dragEndI);

sliderI.addEventListener('mousemove', dragI);
sliderI.addEventListener('touchmove', dragI);

// Start auto slider when page loads
startSliderI();

// Auto slider function
function startSliderI() {
    sliderIntervalI = setInterval(() => {
        if (!isDraggingI) {
            moveSliderI(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderI() {
    clearInterval(sliderIntervalI);
}

// Function to handle drag start
function dragStartI(event) {
    if (event.type === 'touchstart') {
        startPositionI = event.touches[0].clientX;
    } else {
        startPositionI = event.clientX;
    }
    isDraggingI = true;
    stopSliderI();
}

// Function to handle drag end
function dragEndI() {
    isDraggingI = false;
    startSliderI();
}

// Function to handle dragging
function dragI(event) {
    if (isDraggingI) {
        const currentPositionI = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceI = currentPositionI - startPositionI;
        currentTranslateI += differenceI;
        sliderI.style.transform = `translateX(${currentTranslateI}px)`;
        startPositionI = currentPositionI;
    }
}

// Function to move the slider
function moveSliderI(direction) {
    currentTranslateI += direction * sliderI.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateI > 0) {
        currentTranslateI = -(sliderI.scrollWidth - sliderI.clientWidth); // Loop back to the beginning
    } else if (currentTranslateI < -(sliderI.scrollWidth - sliderI.clientWidth)) {
        currentTranslateI = 0; // Loop back to the beginning
    }
    sliderI.style.transform = `translateX(${currentTranslateI}px)`;
}

// Pause auto slider when mouse enters slider area
sliderI.addEventListener('mouseenter', () => {
    stopSliderI();
});

// Resume auto slider when mouse leaves slider area
sliderI.addEventListener('mouseleave', () => {
    startSliderI();
});
//J***************************
let isDraggingJ = false;
let startPositionJ = 0;
let currentTranslateJ = 0;
let sliderIntervalJ;

const sliderJ = document.querySelector('.sliderJ');

// Event listeners for touch and mouse events
sliderJ.addEventListener('mousedown', dragStartJ);
sliderJ.addEventListener('touchstart', dragStartJ);

sliderJ.addEventListener('mouseup', dragEndJ);
sliderJ.addEventListener('touchend', dragEndJ);

sliderJ.addEventListener('mousemove', dragJ);
sliderJ.addEventListener('touchmove', dragJ);

// Start auto slider when page loads
startSliderJ();

// Auto slider function
function startSliderJ() {
    sliderIntervalJ = setInterval(() => {
        if (!isDraggingJ) {
            moveSliderJ(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderJ() {
    clearInterval(sliderIntervalJ);
}

// Function to handle drag start
function dragStartJ(event) {
    if (event.type === 'touchstart') {
        startPositionJ = event.touches[0].clientX;
    } else {
        startPositionJ = event.clientX;
    }
    isDraggingJ = true;
    stopSliderJ();
}

// Function to handle drag end
function dragEndJ() {
    isDraggingJ = false;
    startSliderJ();
}

// Function to handle dragging
function dragJ(event) {
    if (isDraggingJ) {
        const currentPositionJ = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceJ = currentPositionJ - startPositionJ;
        currentTranslateJ += differenceJ;
        sliderJ.style.transform = `translateX(${currentTranslateJ}px)`;
        startPositionJ = currentPositionJ;
    }
}

// Function to move the slider
function moveSliderJ(direction) {
    currentTranslateJ += direction * sliderJ.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateJ > 0) {
        currentTranslateJ = -(sliderJ.scrollWidth - sliderJ.clientWidth); // Loop back to the beginning
    } else if (currentTranslateJ < -(sliderJ.scrollWidth - sliderJ.clientWidth)) {
        currentTranslateJ = 0; // Loop back to the beginning
    }
    sliderJ.style.transform = `translateX(${currentTranslateJ}px)`;
}

// Pause auto slider when mouse enters slider area
sliderJ.addEventListener('mouseenter', () => {
    stopSliderJ();
});

// Resume auto slider when mouse leaves slider area
sliderJ.addEventListener('mouseleave', () => {
    startSliderJ();
});
//K*******************8
let isDraggingK = false;
let startPositionK = 0;
let currentTranslateK = 0;
let sliderIntervalK;

const sliderK = document.querySelector('.sliderK');

// Event listeners for touch and mouse events
sliderK.addEventListener('mousedown', dragStartK);
sliderK.addEventListener('touchstart', dragStartK);

sliderK.addEventListener('mouseup', dragEndK);
sliderK.addEventListener('touchend', dragEndK);

sliderK.addEventListener('mousemove', dragK);
sliderK.addEventListener('touchmove', dragK);

// Start auto slider when page loads
startSliderK();

// Auto slider function
function startSliderK() {
    sliderIntervalK = setInterval(() => {
        if (!isDraggingK) {
            moveSliderK(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderK() {
    clearInterval(sliderIntervalK);
}

// Function to handle drag start
function dragStartK(event) {
    if (event.type === 'touchstart') {
        startPositionK = event.touches[0].clientX;
    } else {
        startPositionK = event.clientX;
    }
    isDraggingK = true;
    stopSliderK();
}

// Function to handle drag end
function dragEndK() {
    isDraggingK = false;
    startSliderK();
}

// Function to handle dragging
function dragK(event) {
    if (isDraggingK) {
        const currentPositionK = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceK = currentPositionK - startPositionK;
        currentTranslateK += differenceK;
        sliderK.style.transform = `translateX(${currentTranslateK}px)`;
        startPositionK = currentPositionK;
    }
}

// Function to move the slider
function moveSliderK(direction) {
    currentTranslateK += direction * sliderK.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateK > 0) {
        currentTranslateK = -(sliderK.scrollWidth - sliderK.clientWidth); // Loop back to the beginning
    } else if (currentTranslateK < -(sliderK.scrollWidth - sliderK.clientWidth)) {
        currentTranslateK = 0; // Loop back to the beginning
    }
    sliderK.style.transform = `translateX(${currentTranslateK}px)`;
}

// Pause auto slider when mouse enters slider area
sliderK.addEventListener('mouseenter', () => {
    stopSliderK();
});

// Resume auto slider when mouse leaves slider area
sliderK.addEventListener('mouseleave', () => {
    startSliderK();
});
//K*************************
let isDraggingL = false;
let startPositionL = 0;
let currentTranslateL = 0;
let sliderIntervalL;

const sliderL = document.querySelector('.sliderL');

// Event listeners for touch and mouse events
sliderL.addEventListener('mousedown', dragStartL);
sliderL.addEventListener('touchstart', dragStartL);

sliderL.addEventListener('mouseup', dragEndL);
sliderL.addEventListener('touchend', dragEndL);

sliderL.addEventListener('mousemove', dragL);
sliderL.addEventListener('touchmove', dragL);

// Start auto slider when page loads
startSliderL();

// Auto slider function
function startSliderL() {
    sliderIntervalL = setInterval(() => {
        if (!isDraggingL) {
            moveSliderL(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderL() {
    clearInterval(sliderIntervalL);
}

// Function to handle drag start
function dragStartL(event) {
    if (event.type === 'touchstart') {
        startPositionL = event.touches[0].clientX;
    } else {
        startPositionL = event.clientX;
    }
    isDraggingL = true;
    stopSliderL();
}

// Function to handle drag end
function dragEndL() {
    isDraggingL = false;
    startSliderL();
}

// Function to handle dragging
function dragL(event) {
    if (isDraggingL) {
        const currentPositionL = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceL = currentPositionL - startPositionL;
        currentTranslateL += differenceL;
        sliderL.style.transform = `translateX(${currentTranslateL}px)`;
        startPositionL = currentPositionL;
    }
}

// Function to move the slider
function moveSliderL(direction) {
    currentTranslateL += direction * sliderL.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateL > 0) {
        currentTranslateL = -(sliderL.scrollWidth - sliderL.clientWidth); // Loop back to the beginning
    } else if (currentTranslateL < -(sliderL.scrollWidth - sliderL.clientWidth)) {
        currentTranslateL = 0; // Loop back to the beginning
    }
    sliderL.style.transform = `translateX(${currentTranslateL}px)`;
}

// Pause auto slider when mouse enters slider area
sliderL.addEventListener('mouseenter', () => {
    stopSliderL();
});

// Resume auto slider when mouse leaves slider area
sliderL.addEventListener('mouseleave', () => {
    startSliderL();
});
//M
let isDraggingM = false;
let startPositionM = 0;
let currentTranslateM = 0;
let sliderIntervalM;

const sliderM = document.querySelector('.sliderM');

// Event listeners for touch and mouse events
sliderM.addEventListener('mousedown', dragStartM);
sliderM.addEventListener('touchstart', dragStartM);

sliderM.addEventListener('mouseup', dragEndM);
sliderM.addEventListener('touchend', dragEndM);

sliderM.addEventListener('mousemove', dragM);
sliderM.addEventListener('touchmove', dragM);

// Start auto slider when page loads
startSliderM();

// Auto slider function
function startSliderM() {
    sliderIntervalM = setInterval(() => {
        if (!isDraggingM) {
            moveSliderM(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderM() {
    clearInterval(sliderIntervalM);
}

// Function to handle drag start
function dragStartM(event) {
    if (event.type === 'touchstart') {
        startPositionM = event.touches[0].clientX;
    } else {
        startPositionM = event.clientX;
    }
    isDraggingM = true;
    stopSliderM();
}

// Function to handle drag end
function dragEndM() {
    isDraggingM = false;
    startSliderM();
}

// Function to handle dragging
function dragM(event) {
    if (isDraggingM) {
        const currentPositionM = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceM = currentPositionM - startPositionM;
        currentTranslateM += differenceM;
        sliderM.style.transform = `translateX(${currentTranslateM}px)`;
        startPositionM = currentPositionM;
    }
}

// Function to move the slider
function moveSliderM(direction) {
    currentTranslateM += direction * sliderM.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateM > 0) {
        currentTranslateM = -(sliderM.scrollWidth - sliderM.clientWidth); // Loop back to the beginning
    } else if (currentTranslateM < -(sliderM.scrollWidth - sliderM.clientWidth)) {
        currentTranslateM = 0; // Loop back to the beginning
    }
    sliderM.style.transform = `translateX(${currentTranslateM}px)`;
}

// Pause auto slider when mouse enters slider area
sliderM.addEventListener('mouseenter', () => {
    stopSliderM();
});

// Resume auto slider when mouse leaves slider area
sliderM.addEventListener('mouseleave', () => {
    startSliderM();
});
//N*********************
let isDraggingN = false;
let startPositionN = 0;
let currentTranslateN = 0;
let sliderIntervalN;

const sliderN = document.querySelector('.sliderN');

// Event listeners for touch and mouse events
sliderN.addEventListener('mousedown', dragStartN);
sliderN.addEventListener('touchstart', dragStartN);

sliderN.addEventListener('mouseup', dragEndN);
sliderN.addEventListener('touchend', dragEndN);

sliderN.addEventListener('mousemove', dragN);
sliderN.addEventListener('touchmove', dragN);

// Start auto slider when page loads
startSliderN();

// Auto slider function
function startSliderN() {
    sliderIntervalN = setInterval(() => {
        if (!isDraggingN) {
            moveSliderN(-1); // Adjust this value to control slide speed
        }
    }, 3000); // Adjust this value to control slide interval
}

// Stop auto slider when dragging
function stopSliderN() {
    clearInterval(sliderIntervalN);
}

// Function to handle drag start
function dragStartN(event) {
    if (event.type === 'touchstart') {
        startPositionN = event.touches[0].clientX;
    } else {
        startPositionN = event.clientX;
    }
    isDraggingN = true;
    stopSliderN();
}

// Function to handle drag end
function dragEndN() {
    isDraggingN = false;
    startSliderN();
}

// Function to handle dragging
function dragN(event) {
    if (isDraggingN) {
        const currentPositionN = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const differenceN = currentPositionN - startPositionN;
        currentTranslateN += differenceN;
        sliderN.style.transform = `translateX(${currentTranslateN}px)`;
        startPositionN = currentPositionN;
    }
}

// Function to move the slider
function moveSliderN(direction) {
    currentTranslateN += direction * sliderN.offsetWidth; // Adjust this value to control slide distance
    if (currentTranslateN > 0) {
        currentTranslateN = -(sliderN.scrollWidth - sliderN.clientWidth); // Loop back to the beginning
    } else if (currentTranslateN < -(sliderN.scrollWidth - sliderN.clientWidth)) {
        currentTranslateN = 0; // Loop back to the beginning
    }
    sliderN.style.transform = `translateX(${currentTranslateN}px)`;
}

// Pause auto slider when mouse enters slider area
sliderN.addEventListener('mouseenter', () => {
    stopSliderN();
});

// Resume auto slider when mouse leaves slider area
sliderN.addEventListener('mouseleave', () => {
    startSliderN();
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
  const sliderR = document.querySelector('.slider');
let isDraggingR = false;
let startPositionR = 0;
let currentTranslateR = 0;

sliderR.addEventListener('mousedown', startDraggingR);
sliderR.addEventListener('mouseup', stopDraggingR);
sliderR.addEventListener('mouseleave', stopDraggingR);
sliderR.addEventListener('mousemove', draggingR);

function startDraggingR(event) {
    isDraggingR = true;
    startPositionR = event.clientX;
}

function draggingR(event) {
    if (isDraggingR) {
        const currentPositionR = event.clientX;
        currentTranslateR = currentPositionR - startPositionR;
        setSliderPositionR();
    }
}

function stopDraggingR() {
    isDraggingR = false;
}

function setSliderPositionR() {
    sliderR.style.transition = 'transform 0.5s ease';
    sliderR.style.transform = `translateX(${currentTranslateR}px)`;
}
