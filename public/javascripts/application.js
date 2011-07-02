function initialize_map(position) {
	var latlng;
	if(position){
			latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	} else{
		latlng = new google.maps.LatLng(-22.915413,-43.170261);
	}
  var myOptions = {
    zoom: 9,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);

  var image = '/images/coop.gif';
  $.getJSON('/coops', function(coops) {
    $(coops).each(function(index, d) {
			var coop = d.coop;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(coop.latitude,coop.longitude),
        map: map,
        icon: image
      });
      $.get("/coops/" + coop.id, function(contentSting) {

        var infowindow = new google.maps.InfoWindow({
            content: contentSting
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      });
    });
  });
}

$(document).ready(function(){
	initialize();
});

function initialize() {
	if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition(initialize_map, handle_errors);
	else
		initialize_map();
}
function handle_errors(error)
{
	switch(error.code) {
		default:
		initialize_map();
		break;

	}
}
