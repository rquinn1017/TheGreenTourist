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
    center: {lat: 37.540760, lng: -77.933929},
    zoom: 8
  });
  infoWindow = new google.maps.InfoWindow;

  // let locations = 

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent('You');
    //   infoWindow.open(map);
      map.setCenter(pos);
      // var center = {lat: 37.540760, lng: -79.433929};
      var marker = new google.maps.Marker({position: pos, map: map});
    }, function() {
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
    
}).done(function(companies){
    console.log(companies);
    $('#companies').DataTable({
      companies: companies,
      "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
      "pagingType": "full_numbers"
     })
     
});
    
