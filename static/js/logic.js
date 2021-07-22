var myMap = L.map("map", {
    center: [14.5994, 28.6731],
    zoom: 3
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 22,
    zoomOffset: -1,
    id:"mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  d3.csv("../../static/data/map_data.csv").then(function(data) {
    console.log(data);
    var circlemarkers = []
    for (var i = 0; i< data.length; i++) {
      var country = data[i].name;
      console.log(country)
      var lat = data[i].latitude
      var lng = data[i].longitude
      var count = data[i].count
//       var depth = feature.geometry.coordinates[2];
//       console.log(depth)
//       var mag = feature.properties.mag;
//       console.log(mag)
//       var latlng = feature.geometry.coordinates
//       var color = "";
        circlemarkers.push(
          L.marker([lat, lng]
          ).bindPopup("<h3>" + country +"<h3><hr><p>" + "Number of Movies Produced: "+ count+ "</p>").addTo(myMap));
        }


    });

