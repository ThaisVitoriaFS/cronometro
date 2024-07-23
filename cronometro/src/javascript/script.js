const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervalid = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor(time / 360000) / 6000;
    const seconds = Math.floor(time / 6000) / 100;
    const hundredths = time % 100;

    /*return `$(hours.toString().padStart(2, '0')):`*/
    return  $(hours.toString().padStart(2, '0'))
}
