function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateCountdown(timer, time, btn) {
  btn.setAttribute('disabled', true);
    while (time >=0) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds:seconds;
      timer.innerHTML = `${minutes}:${seconds}`;
      time--;
      await sleep(1000);
    }
    time = 300;
    timer.innerHTML = "5:00";
    btn.removeAttribute('disabled');
}

document.getElementById("btnOn1").addEventListener('click', function() {
  var btn = document.getElementById("dropdownMenuButton1");
  var time = 3;
  var timer = document.getElementById("timer1");
  updateCountdown(timer, time, btn);
})

document.getElementById("btnOn2").addEventListener('click', function() {
  var btn = document.getElementById("dropdownMenuButton2");
  var time = 3;
  var timer = document.getElementById("timer2");
  updateCountdown(timer, time, btn);
})

document.getElementById("btnOn3").addEventListener('click', function() {
  var btn = document.getElementById("dropdownMenuButton3");
  var time = 3;
  var timer = document.getElementById("timer3");
  updateCountdown(timer, time, btn);
})