function showPosition(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  x = document.getElementById('map')
  x.innerHTML = "<iframe id=\"map_frame\" class=\"framing\" " +
    " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" " +

    "src=\"https://maps.google.com/maps?hl=en&amp;q=" +
    position.coords.latitude + "," + position.coords.longitude +
    "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" +
    "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "\"" + "></iframe>";
}


navigator.geolocation.getCurrentPosition(showPosition);

// "src=\"https://maps.google.com/maps?hl=en&amp;q=" +
//   position.coords.latitude + "," + position.coords.longitude +
//   "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" +
//   "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" + "\"" + "></iframe>";