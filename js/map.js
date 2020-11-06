
var locations = [
      ['The o2 Arena', 51.502918, 0.0030256, 13],
      ['Baku Crystal Hall', 40.3664468, 49.8397079, 12],
      ['Cape Town Stadium', -33.9034601, 18.4111458, 11],
      ['Konya Buyuksehir Stadion', 37.94619, 32.48683, 10],
      ['Lords Cricket Ground', 51.529831, -0.1743504, 9],
      ['Stade Yves-du-Manoir', 48.9246619, 2.2171973, 8],
      ['Mestella Stadium', 39.47466, -0.3607769, 7],
      ['PGE Narodowy', 52.2296756, 21.0436022, 6],
      ['Optus Stadium', -31.9511643, 115.8868572, 5],
      ['Antwerps Sportpaleis', 51.231122, 4.4388404, 4],
      ['Bursa Timsah Arena', 40.2110025, 29.0088561, 3],
      ['Wembley Stadium', 51.5560247, -0.2818064, 2],
      ['Zenith Arena Lille', 50.6337, 3.0749113, 1],
    ];

    var map = new google.maps.Map(document.getElementById('Map'), {
      zoom: 1,
      center: new google.maps.LatLng(51.4582235, 7.0158171),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

