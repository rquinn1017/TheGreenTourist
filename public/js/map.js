var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    // center: { lat: 38, lng: -78.633929 },
      zoom: 12
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
        title: "You are here",
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
  $.ajax({
    method: "GET",
    url: "api/companies",
  
  }).done(function (companies) {
    console.log(companies);
  
    for (var i = 0; i < companies.length; i++) {
      var lat = companies[i].Latitude;
      var lng = companies[i].Longitude;
    
      console.log(i, lat, lng);
      var marker = new google.maps.Marker({
        map: map,
        position: {
          lat: lat,
          lng: lng
        },
        title: companies[i].Facility
      });
    };
  });


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

});

$(document).ready(function () {
$('table').on('click', 'tr' , function (event) {
  // $(document).on('click', '.update', function() {
    

    var $headerRow = $(this).closest('table').find('thead tr:first'),
        $headerRowTds = $headerRow.find("th");

    var $row = $(this).closest("tr"),
        $tds = $row.find("td");

    $headerRowTds.each(function(i) {
      // let header = $(this).text();
      let selectedLID = $tds.eq(5).text();
      let selectedLat = $tds.eq(6).text();
      let selectedLon = $tds.eq(7).text();

  console.log(selectedLID, selectedLat, selectedLon)
      

    });
    
});


});
