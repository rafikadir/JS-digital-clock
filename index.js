setInterval(showTime, 1000);
function showTime() {
    var date = new Date();
    var hour = date.getHours() % 12 || 12;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    // minutes = minutes < 10 ? `0${minutes}` : minutes;
    console.log(minutes)
    const showHours = document.getElementById("hour");
    showHours.innerHTML = hour;

    const showMin = document.getElementById("minute");
    showMin.innerHTML = minutes;

    const showSec = document.getElementById("sec");
    showSec.innerHTML = seconds;
}