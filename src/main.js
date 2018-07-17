"use strict";

var nombre = "Ulises";

google.maps.event.addDomListener(window, "load", function () {

		var search_input = document.getElementById("search-place");
		var autocomplete = new google.maps.places.Autocomplete(search_input);

		google.maps.event.addListener(autocomplete, "place_changed", function () {

			var place = autocomplete.getPlace();

			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(15);
			}

		});

		//marcar el camino

	});