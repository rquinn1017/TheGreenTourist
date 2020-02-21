function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(37.5732008,-77.53987649999999),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    };


$.ajax({
    method: "GET",
    url: "api/companies",
    
}).done(function(companies){
    console.log(companies);
});
    