timeInMiliSec = 0;

var timer;

function reset() {
    clearInterval(timer)
    timeInMiliSec = 0;
    updateStopwatch(timeInMiliSec);

    document.getElementById("mili-sec").innerHTML = "00"
}

function stop() {
    clearInterval(timer)
}

function stopWatech() {
    clearInterval(timer);

    timer = setInterval(() => {
        timeInMiliSec += 10;

        updateStopwatch(timeInMiliSec);
    }, 10)

}


function updateStopwatch(timeInMiliSec) {
    //10000
    const sec = Math.floor(timeInMiliSec / 1000); //10s
    const mnt = Math.floor(timeInMiliSec / 60000); //
    const ms = Math.floor(timeInMiliSec % 1000) / 10;
    const hour = Math.floor(timeInMiliSec / 3600000)


    document.getElementById("minute").innerHTML = mnt < 10 ? "0" + mnt % 60 : mnt % 60;
    document.getElementById("second").innerHTML = sec < 10 ? "0" + sec % 60 : sec % 60;
    document.getElementById("mili-sec").innerHTML = ms;
    document.getElementById("hour").innerHTML = mnt < 10 ? "0" +mnt % 60 : mnt % 60;

}




