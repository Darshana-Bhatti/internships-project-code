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
//four2
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderA = document.querySelector(".image-sliderA");
    const imagesA = imageSliderA.querySelectorAll("img");
    const totalImagesA = imagesA.length;
    let currentIndexA = 0;
    let startXA = 0;
    let isDraggingA = false;

    // Show the first image initially
    imagesA[currentIndexA].style.display = "block";

    function showImageA(index) {
        // Hide all images
        imagesA.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesA[index].style.display = "block";
    }

    function nextImageA() {
        currentIndexA = (currentIndexA + 1) % totalImagesA;
        showImageA(currentIndexA);
        updateButtonState();
    }

    function prevImageA() {
        currentIndexA = (currentIndexA - 1 + totalImagesA) % totalImagesA;
        showImageA(currentIndexA);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnA").disabled = currentIndexA === 0;
        document.querySelector(".next-btnA").disabled = currentIndexA === totalImagesA - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnA").addEventListener("click", nextImageA);
    document.querySelector(".prev-btnA").addEventListener("click", prevImageA);

    // Touch event listeners for touch slider
    imageSliderA.addEventListener("touchstart", touchStart);
    imageSliderA.addEventListener("touchmove", touchMove);
    imageSliderA.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderA.addEventListener("mousedown", touchStart);
    imageSliderA.addEventListener("mousemove", touchMove);
    imageSliderA.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingA = true;
        startXA= e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingA) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXA - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageA();
            } else {
                // Swiping right (previous image)
                prevImageA();
            }
            isDraggingA = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingA = false;
    }
});
//four3
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderB = document.querySelector(".image-sliderB");
    const imagesB = imageSliderB.querySelectorAll("img");
    const totalImagesB = imagesB.length;
    let currentIndexB = 0;
    let startXB = 0;
    let isDraggingB = false;

    // Show the first image initially
    imagesB[currentIndexB].style.display = "block";

    function showImageB(index) {
        // Hide all images
        imagesB.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesB[index].style.display = "block";
    }

    function nextImageB() {
        currentIndexB = (currentIndexB + 1) % totalImagesB;
        showImageB(currentIndexB);
        updateButtonState();
    }

    function prevImageB() {
        currentIndexB = (currentIndexB - 1 + totalImagesB) % totalImagesB;
        showImageB(currentIndexB);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnB").disabled = currentIndexB === 0;
        document.querySelector(".next-btnB").disabled = currentIndexB === totalImagesB - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnB").addEventListener("click", nextImageB);
    document.querySelector(".prev-btnB").addEventListener("click", prevImageB);

    // Touch event listeners for touch slider
    imageSliderB.addEventListener("touchstart", touchStart);
    imageSliderB.addEventListener("touchmove", touchMove);
    imageSliderB.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderB.addEventListener("mousedown", touchStart);
    imageSliderB.addEventListener("mousemove", touchMove);
    imageSliderB.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingB = true;
        startXB = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingB) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXB - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageB();
            } else {
                // Swiping right (previous image)
                prevImageB();
            }
            isDraggingB = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingB = false;
    }
});
//four4
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderC = document.querySelector(".image-sliderC");
    const imagesC = imageSliderC.querySelectorAll("img");
    const totalImagesC = imagesC.length;
    let currentIndexC = 0;
    let startXC = 0;
    let isDraggingC = false;

    // Show the first image initially
    imagesC[currentIndexC].style.display = "block";

    function showImageC(index) {
        // Hide all images
        imagesC.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesC[index].style.display = "block";
    }

    function nextImageC() {
        currentIndexC = (currentIndexC + 1) % totalImagesC;
        showImageC(currentIndexC);
        updateButtonState();
    }

    function prevImageC() {
        currentIndexC = (currentIndexC - 1 + totalImagesC) % totalImagesC;
        showImageC(currentIndexC);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnC").disabled = currentIndexC === 0;
        document.querySelector(".next-btnC").disabled = currentIndexC === totalImagesC - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnC").addEventListener("click", nextImageC);
    document.querySelector(".prev-btnC").addEventListener("click", prevImageC);

    // Touch event listeners for touch slider
    imageSliderC.addEventListener("touchstart", touchStart);
    imageSliderC.addEventListener("touchmove", touchMove);
    imageSliderC.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderC.addEventListener("mousedown", touchStart);
    imageSliderC.addEventListener("mousemove", touchMove);
    imageSliderC.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingC = true;
        startXC = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingC) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXC - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageC();
            } else {
                // Swiping right (previous image)
                prevImageC();
            }
            isDraggingC = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingC = false;
    }
});
//four5
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderD = document.querySelector(".image-sliderD");
    const imagesD = imageSliderD.querySelectorAll("img");
    const totalImagesD = imagesD.length;
    let currentIndexD = 0;
    let startXD = 0;
    let isDraggingD = false;

    // Show the first image initially
    imagesD[currentIndexD].style.display = "block";

    function showImageD(index) {
        // Hide all images
        imagesD.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesD[index].style.display = "block";
    }

    function nextImageD() {
        currentIndexD = (currentIndexD + 1) % totalImagesD;
        showImageD(currentIndexD);
        updateButtonState();
    }

    function prevImageD() {
        currentIndexD = (currentIndexD - 1 + totalImagesD) % totalImagesD;
        showImageD(currentIndexD);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnD").disabled = currentIndexD === 0;
        document.querySelector(".next-btnD").disabled = currentIndexD === totalImagesD - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnD").addEventListener("click", nextImageD);
    document.querySelector(".prev-btnD").addEventListener("click", prevImageD);

    // Touch event listeners for touch slider
    imageSliderD.addEventListener("touchstart", touchStart);
    imageSliderD.addEventListener("touchmove", touchMove);
    imageSliderD.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderD.addEventListener("mousedown", touchStart);
    imageSliderD.addEventListener("mousemove", touchMove);
    imageSliderD.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingD = true;
        startXD = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingD) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXD - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageD();
            } else {
                // Swiping right (previous image)
                prevImageD();
            }
            isDraggingD = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingD = false;
    }
});
//four6
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderE = document.querySelector(".image-sliderE");
    const imagesE = imageSliderE.querySelectorAll("img");
    const totalImagesE = imagesE.length;
    let currentIndexE = 0;
    let startXE = 0;
    let isDraggingE = false;

    // Show the first image initially
    imagesE[currentIndexE].style.display = "block";

    function showImageE(index) {
        // Hide all images
        imagesE.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesE[index].style.display = "block";
    }

    function nextImageE() {
        currentIndexE = (currentIndexE + 1) % totalImagesE;
        showImageE(currentIndexE);
        updateButtonState();
    }

    function prevImageE() {
        currentIndexE = (currentIndexE - 1 + totalImagesE) % totalImagesE;
        showImageE(currentIndexE);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnE").disabled = currentIndexE === 0;
        document.querySelector(".next-btnE").disabled = currentIndexE === totalImagesE - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnE").addEventListener("click", nextImageE);
    document.querySelector(".prev-btnE").addEventListener("click", prevImageE);

    // Touch event listeners for touch slider
    imageSliderE.addEventListener("touchstart", touchStart);
    imageSliderE.addEventListener("touchmove", touchMove);
    imageSliderE.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderE.addEventListener("mousedown", touchStart);
    imageSliderE.addEventListener("mousemove", touchMove);
    imageSliderE.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingE = true;
        startXE = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingE) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXE - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageE();
            } else {
                // Swiping right (previous image)
                prevImageE();
            }
            isDraggingE = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingE = false;
    }
});
//four7
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderF = document.querySelector(".image-sliderF");
    const imagesF = imageSliderF.querySelectorAll("img");
    const totalImagesF = imagesF.length;
    let currentIndexF = 0;
    let startXF = 0;
    let isDraggingF = false;

    // Show the first image initially
    imagesF[currentIndexF].style.display = "block";

    function showImageF(index) {
        // Hide all images
        imagesF.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesF[index].style.display = "block";
    }

    function nextImageF() {
        currentIndexF = (currentIndexF + 1) % totalImagesF;
        showImageF(currentIndexF);
        updateButtonState();
    }

    function prevImageF() {
        currentIndexF = (currentIndexF - 1 + totalImagesF) % totalImagesF;
        showImageF(currentIndexF);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnF").disabled = currentIndexF === 0;
        document.querySelector(".next-btnF").disabled = currentIndexF === totalImagesF - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnF").addEventListener("click", nextImageF);
    document.querySelector(".prev-btnF").addEventListener("click", prevImageF);

    // Touch event listeners for touch slider
    imageSliderF.addEventListener("touchstart", touchStart);
    imageSliderF.addEventListener("touchmove", touchMove);
    imageSliderF.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderF.addEventListener("mousedown", touchStart);
    imageSliderF.addEventListener("mousemove", touchMove);
    imageSliderF.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingF = true;
        startXF = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingF) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXF - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageF();
            } else {
                // Swiping right (previous image)
                prevImageF();
            }
            isDraggingF = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingF = false;
    }
});
//four8
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderG = document.querySelector(".image-sliderG");
    const imagesG = imageSliderG.querySelectorAll("img");
    const totalImagesG = imagesG.length;
    let currentIndexG = 0;
    let startXG = 0;
    let isDraggingG = false;

    // Show the first image initially
    imagesG[currentIndexG].style.display = "block";

    function showImageG(index) {
        // Hide all images
        imagesG.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesG[index].style.display = "block";
    }

    function nextImageG() {
        currentIndexG = (currentIndexG + 1) % totalImagesG;
        showImageG(currentIndexG);
        updateButtonState();
    }

    function prevImageG() {
        currentIndexG = (currentIndexG - 1 + totalImagesG) % totalImagesG;
        showImageG(currentIndexG);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnG").disabled = currentIndexG === 0;
        document.querySelector(".next-btnG").disabled = currentIndexG== totalImagesG - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnG").addEventListener("click", nextImageG);
    document.querySelector(".prev-btnG").addEventListener("click", prevImageG);

    // Touch event listeners for touch slider
    imageSliderG.addEventListener("touchstart", touchStart);
    imageSliderG.addEventListener("touchmove", touchMove);
    imageSliderG.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderG.addEventListener("mousedown", touchStart);
    imageSliderG.addEventListener("mousemove", touchMove);
    imageSliderG.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingG = true;
        startXG = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingG) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXG - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageG();
            } else {
                // Swiping right (previous image)
                prevImageG();
            }
            isDraggingG = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }

    function touchEnd() {
        isDraggingG = false;
    }
});
//four9
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderH = document.querySelector(".image-sliderH");
    const imagesH = imageSliderH.querySelectorAll("img");
    const totalImagesH = imagesH.length;
    let currentIndexH = 0;
    let startXH = 0;
    let isDraggingH = false;

    // Show the first image initially
    imagesH[currentIndexH].style.display = "block";

    function showImageH(index) {
        // Hide all images
        imagesH.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesH[index].style.display = "block";
    }

    function nextImageH() {
        currentIndexH = (currentIndexH + 1) % totalImagesH;
        showImageH(currentIndexH);
        updateButtonState();
    }

    function prevImageH() {
        currentIndexH = (currentIndexH - 1 + totalImagesH) % totalImagesH;
        showImageH(currentIndexH);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnH").disabled = currentIndexH === 0;
        document.querySelector(".next-btnH").disabled = currentIndexH== totalImagesH - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnH").addEventListener("click", nextImageH);
    document.querySelector(".prev-btnH").addEventListener("click", prevImageH);

    // Touch event listeners for touch slider
    imageSliderH.addEventListener("touchstart", touchStart);
    imageSliderH.addEventListener("touchmove", touchMove);
    imageSliderH.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderH.addEventListener("mousedown", touchStart);
    imageSliderH.addEventListener("mousemove", touchMove);
    imageSliderH.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingH = true;
        startXH = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingH) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXH - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageH();
            } else {
                // Swiping right (previous image)
                prevImageH();
            }
            isDraggingH = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }
    function touchEnd() {
        isDraggingH = false;
    }
});
//four10
document.addEventListener("DOMContentLoaded", function() {
    const imageSliderI = document.querySelector(".image-sliderI");
    const imagesI = imageSliderI.querySelectorAll("img");
    const totalImagesI = imagesI.length;
    let currentIndexI = 0;
    let startXI = 0;
    let isDraggingI = false;

    // Show the first image initially
    imagesI[currentIndexI].style.display = "block";

    function showImageI(index) {
        // Hide all images
        imagesI.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesI[index].style.display = "block";
    }

    function nextImageI() {
        currentIndexI = (currentIndexI + 1) % totalImagesI;
        showImageI(currentIndexI);
        updateButtonState();
    }

    function prevImageI() {
        currentIndexI = (currentIndexI - 1 + totalImagesI) % totalImagesI;
        showImageI(currentIndexI);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnI").disabled = currentIndexI === 0;
        document.querySelector(".next-btnI").disabled = currentIndexI== totalImagesI - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnI").addEventListener("click", nextImageI);
    document.querySelector(".prev-btnI").addEventListener("click", prevImageI);

    // Touch event listeners for touch slider
    imageSliderI.addEventListener("touchstart", touchStart);
    imageSliderI.addEventListener("touchmove", touchMove);
    imageSliderI.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderI.addEventListener("mousedown", touchStart);
    imageSliderI.addEventListener("mousemove", touchMove);
    imageSliderI.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingI = true;
        startXI = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingI) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXI - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageI();
            } else {
                // Swiping right (previous image)
                prevImageI();
            }
            isDraggingI = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }
    function touchEnd() {
        isDraggingI = false;
    }
});
//four11

document.addEventListener("DOMContentLoaded", function() {
    const imageSliderJ = document.querySelector(".image-sliderJ");
    const imagesJ = imageSliderJ.querySelectorAll("img");
    const totalImagesJ = imagesJ.length;
    let currentIndexJ = 0;
    let startXJ = 0;
    let isDraggingJ = false;

    // Show the first image initially
    imagesJ[currentIndexJ].style.display = "block";

    function showImageJ(index) {
        // Hide all images
        imagesJ.forEach(img => img.style.display = "none");
        // Show the image at the specified index
        imagesJ[index].style.display = "block";
    }

    function nextImageJ() {
        currentIndexJ = (currentIndexJ + 1) % totalImagesJ;
        showImageJ(currentIndexJ);
        updateButtonState();
    }

    function prevImageJ() {
        currentIndexJ = (currentIndexJ - 1 + totalImagesJ) % totalImagesJ;
        showImageJ(currentIndexJ);
        updateButtonState();
    }

    function updateButtonState() {
        document.querySelector(".prev-btnJ").disabled = currentIndexJ === 0;
        document.querySelector(".next-btnJ").disabled = currentIndexJ== totalImagesJ - 1;
    }

    // Event listeners for next and previous buttons
    document.querySelector(".next-btnJ").addEventListener("click", nextImageJ);
    document.querySelector(".prev-btnJ").addEventListener("click", prevImageJ);

    // Touch event listeners for touch slider
    imageSliderJ.addEventListener("touchstart", touchStart);
    imageSliderJ.addEventListener("touchmove", touchMove);
    imageSliderJ.addEventListener("touchend", touchEnd);

    // Mouse event listeners for mouse slider
    imageSliderJ.addEventListener("mousedown", touchStart);
    imageSliderJ.addEventListener("mousemove", touchMove);
    imageSliderJ.addEventListener("mouseup", touchEnd);

    function touchStart(e) {
        isDraggingJ = true;
        startXJ = e.clientX || e.touches[0].clientX;
    }

    function touchMove(e) {
        if (!isDraggingJ) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startXJ - currentX;

        // Adjust sensitivity, e.g., only change image after dragging at least 50 pixels
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiping left (next image)
                nextImageJ();
            } else {
                // Swiping right (previous image)
                prevImageJ();
            }
            isDraggingJ = false; // Reset drag state after changing image
        }

        // Prevent default scrolling behavior
        e.preventDefault();
    }
    function touchEnd() {
        isDraggingJ = false;
    }
});
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
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//client2
let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let sliderInterval;

        const slider = document.querySelector('.sliderC');

        slider.addEventListener('mousedown', dragStart);
        slider.addEventListener('touchstart', dragStart);

        slider.addEventListener('mouseup', dragEnd);
        slider.addEventListener('touchend', dragEnd);

        slider.addEventListener('mousemove', drag);
        slider.addEventListener('touchmove', drag);

        // Auto slider
        function startSlider() {
            sliderInterval = setInterval(() => {
                currentTranslate -= 100; // Adjust this value to control slide speed
                slider.style.transform = `translateX(${currentTranslate}px)`;
            }, 2000); // Adjust this value to control slide interval
        }

        function stopSlider() {
            clearInterval(sliderInterval);
        }

        function dragStart(event) {
            if (event.type === 'touchstart') {
                startPosition = event.touches[0].clientX;
            } else {
                startPosition = event.clientX;
                isDragging = true;
                stopSlider();
            }
        }

        function dragEnd() {
            isDragging = false;
            startSlider();
        }

        function drag(event) {
            if (isDragging) {
                const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                const difference = currentPosition - startPosition;
                currentTranslate += difference;
                slider.style.transform = `translateX(${currentTranslate}px)`;
                startPosition = currentPosition;
            }
        }

        // Start auto slider when page loads
        startSlider();
        //ninteen
        new Glide('.glide', {
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            gap: 10
          }).mount();
//caur
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
