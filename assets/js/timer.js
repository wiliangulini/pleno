let startTimer = (duration, display, bar) => {
    let timer = duration, minutes, seconds;
    let inter = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        let totalSeconds = 5 * 60
        , remainingSeconds = minutes * 60 + seconds

        bar.style.width = (remainingSeconds*100/totalSeconds) + "%";

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(inter);
            timer = duration;
        }
    }, 1000);



}

window.onload = function () {
    let minutes = 60 * 5,
    display = document.querySelector('#time');
    bar = document.querySelector('#progressBar');
    startTimer(minutes, display, bar);


};
