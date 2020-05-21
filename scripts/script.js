let i = 0;
showSlides(i);

function showSlides() {
    let slides = document.getElementsByClassName("slide-element");
    if (i >= slides.length) {
        i = 0;
    }
    if (i < 0) {
        i = slides.length - 1;

    }

    Array.from(slides).forEach((item) => item.style.display = 'none');
    slides[i].style.display = 'flex';
}

function next(next = true) {
    if (next) {
        i++;
    }
    else {
        i--;
    }

    showSlides(i);

}

let timer;
let text;

function setTimer() {

    if (timer) {
        clearInterval(timer);
        timer = null;
        text = 'Start';
    } else {
        timer = setInterval(next, 1000);
        text = 'Stop';
    }
    document.getElementById('slideShow').innerText = `${text}  SlideShow`
}

document.getElementById('slideShow').onclick = function () {
    setTimer();
};