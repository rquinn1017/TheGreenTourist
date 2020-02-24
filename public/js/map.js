// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(37.5732008,-77.53987649999999),
//       zoom:5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     };
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: { lat: 37.740760, lng: -78.633929 },
    zoom: 8.25
  });
  infoWindow = new google.maps.InfoWindow;

  // let locations = 

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('You');
        // infoWindow.open(map);
      map.setCenter(pos);

      let marker = new google.maps.Marker({
        map: map,
        position: pos,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
      // var marker = new google.maps.Marker({ position: pos, map: map },
      // );


    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

$.ajax({
  method: "GET",
  url: "api/companies",

}).done(function (companies) {
  console.log(companies);

  $('#vaGreenTable').DataTable({})
});

