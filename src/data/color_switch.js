import colors from './colors';
import randomIntegerFromInterval from './random_integer';

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onClickBtnStart);
refs.stopBtn.addEventListener('click', onClickBtnStop);

let timeInterval = null;
 let isActive = false;

function onClickBtnStart() {
    
    if (isActive) return;
    isActive = true;
    timeInterval = setInterval(changeColorBody, 1000);
     console.log('click start');
};

function onClickBtnStop() {
if (!isActive) return;
    isActive = false;
    clearInterval(timeInterval);
    console.log('click stop');

};

function changeColorBody() {
    let colorIndex = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
}
