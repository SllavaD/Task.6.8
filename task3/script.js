const backgroundEl = document.querySelector('#background');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    backgroundEl.removeEventListener('click', makeGreen);
    backgroundEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    backgroundEl.removeEventListener('click', makeYellow);
    backgroundEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    backgroundEl.removeEventListener('click', makeRed);
    backgroundEl.addEventListener('click', makeGreen);
}

backgroundEl.addEventListener('click', makeGreen);