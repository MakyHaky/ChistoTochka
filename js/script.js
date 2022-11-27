let time = 300;
const countDownEl = document. getElementById("timer1");
var radio = document.getElementById('flexRadioDefault1');

function updateCountdown() {
    if (time >=0) {
      const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    }
    else{
      time = 10;
      return countDownEl.innerHTML = "5:00";
    }

}
const myFunction1 = () => {
  setInterval(updateCountdown, 1000);
  //radio.ariaChecked=false;
}
radio.addEventListener('change', myFunction1);