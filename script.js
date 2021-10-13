let time = 0;
let interval;

let start = document.querySelector(".btn1")
let hold = document.querySelector(".btn2")
let timesList = document.querySelector(".savedTimes")
let stop = document.querySelector(".btn3")
let currentTime = document.querySelector(".currentTime")

stop.setAttribute("disabled", true)

start.addEventListener("click", function() {
  start.setAttribute("disabled", true)
  stop.removeAttribute("disabled")

  interval = setInterval(function () {
    time += 0.01

    currentTime.innerText = Math.round(time * 100) / 100
  }, 10);
});

stop.addEventListener("click", function() {
  start.removeAttribute("disabled")
  stop.setAttribute("disabled", true)

  clearInterval(interval)

});

hold.addEventListener("click", function() {
  let item = document.createElement("li")
  item.innerText = Math.round(time * 100) / 100
  timesList.prepend(item);
});
