import colors from './colors';
import randomIntegerFromInterval from './random_integer';

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onClickBtnStart);
refs.stopBtn.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
    let colorBody = randomIntegerFromInterval(0, colors.length);
    
    document.body.style.backgroundColor = colors[colorBody];
};

function onClickBtnStop() {

};

