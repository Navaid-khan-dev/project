// function showPosition(position) {
//   console.log(position.coords.latitude, position.coords.longitude);

//     x = document.getElementById('map')
//   x.innerHTML = "<iframe id=\"map_frame\" class=\"framing\" " +
//     " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" " +

//     "src=\"https://maps.google.com/maps?hl=en&amp;q=" + position.coords.latitude + "," + position.coords.longitude +
//     "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "\"" + "></iframe>";
// }


// // navigator.permissions.query({ name: 'geolocation' })
// // .then(x)





// navigator.geolocation.getCurrentPosition(latitude);
function success(pos) {
  var crd = pos.coords;

  // console.log('Your current position is:');
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
  x = document.getElementById('map')
  x.innerHTML = "<iframe id=\"map_frame\" class=\"framing\" " +
    " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" " +

    "src=\"https://maps.google.com/maps?hl=en&amp;q=" + crd.latitude + "," + crd.longitude +
    "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "\"" + "></iframe>";
}

function error(err) {
  x = document.getElementById('map')
  x.innerHTML = "<iframe id=\"map_frame\" class=\"framing\" " +
    " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" " +

    "src=\"iframe_fail.html" + "\"" + "></iframe>";
}

navigator.geolocation.getCurrentPosition(success, error)




// "src=\"https://maps.google.com/maps?hl=en&amp;q=" +
//   position.coords.latitude + "," + position.coords.longitude +
//   "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" +
//   "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "\"" + "></iframe>";