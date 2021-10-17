let time = 50;
let minute = 0
let clicks = 0;
let interval;

const start = document.querySelector(".btn1")
const hold = document.querySelector(".btn2")
const timesList = document.querySelector(".savedTimes")
const stop = document.querySelector(".btn3")
const currentTime = document.querySelector(".currentTime")
const currentMinute = document.querySelector(".currentMinute")

stop.setAttribute("disabled", true)

start.addEventListener("click", function() {
  start.setAttribute("disabled", true)
  stop.removeAttribute("disabled")

  interval = setInterval(function () {
    time += 0.01

    let currentTime1 = Math.round(time * 100) / 100

    if (currentTime1 == 60) {
      minute += 1
      currentMinute.innerText = minute + "minutes"
      time = 0
    } else {
      currentTime.innerText = currentTime1
    }
  }, 10);
});

stop.addEventListener("click", function() {
  start.removeAttribute("disabled")
  stop.setAttribute("disabled", true)

  clearInterval(interval)

});

hold.addEventListener("click", function() {
  time1Minute1 = document.createElement("li")
  roundedTime = Math.round(time * 100) / 100

  if (minute == 0) {
    time1Minute1.innerText = roundedTime + "s"
  } else {
    time1Minute1.innerText = minute + "min " + roundedTime + "s"
  }

  timesList.prepend(time1Minute1)
})
