"use strict";

var handHour = document.getElementById('handHour');
var handMinutes = document.getElementById('handMinutes');
var handSeconds = document.getElementById('handSeconds');

var startWatch = function startWatch() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  handHour.style.transform = "rotate(".concat(hours * 30 + minutes / 2, "deg)");
  handMinutes.style.transform = "rotate(".concat(minutes * 6 + seconds / 10, "deg)");
  handSeconds.style.transform = "rotate(".concat(seconds * 6, "deg)");
};

setInterval(startWatch, 1000);