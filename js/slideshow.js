'use strict'

//--------------Overlay------------------
let slideIndex = 1;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let slideInterval;
let slidespeed= 3000;

//show slides
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // if (interval.value != null) {
    //     slideInterval = setTimeout(showSlides, interval.value);
    // } else {
    //     slideInterval = setTimeout(showSlides, 3 * 1000);
    // }
    let speed = document.getElementById("speed").value;
    slideInterval = setTimeout( showSlides, speed);
}

//timer
function changetime() {
    slidespeed= speed;
    stopSlide();
    playSlide();

}


//previous control
function prevSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex--;
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//next controls
function nextSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//thumbnail image controls
function currentSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = index;
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//play and stop buttons
//play
function playSlide() {
    slideInterval = setTimeout(showSlides, 3*1000);
    playButton.style.display = "none";
    stopButton.style.display = "block";
}
//stop
function stopSlide() {
    clearTimeout(slideInterval);
    stopButton.style.display = "none";
    playButton.style.display = "block";
}

// Set default style of images to "none"
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// Show the first image
slides[0].style.display = "block";
dots[0].className += " active";