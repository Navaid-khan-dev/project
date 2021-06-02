$(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000,
    pause: "false"
  })

});
var h = document.documentElement.clientHeight;
console.log(h);

if (h >= 1200 && h < 1500) {
  varim = 3
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 100 + 'px';

  document.getElementById("canvas").style.marginLeft = 150 + 'px';
} else if (h >= 1000) {
  varim = 3.3
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 60 + 'px';
  document.getElementById("canvas").style.marginLeft = 110 + 'px';
} else if (h >= 850 && h < 1000) {
  varim = 4
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 60 + 'px';
  document.getElementById("canvas").style.marginLeft = 110 + 'px';
} else if (h >= 680 && h < 850) {
  varim = 5
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 60 + 'px';
  document.getElementById("canvas").style.marginLeft = 90 + 'px';
} else if (h >= 550 && h < 680) {
  varim = 6
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 40 + 'px';
  document.getElementById("canvas").style.marginLeft = 60 + 'px';
} else if (h < 550) {
  varim = 8
  // console.log(varim);
  // console.log(h);

  document.getElementById("canvas").style.marginTop = 30 + 'px';
  document.getElementById("canvas").style.marginLeft = 50 + 'px';
}