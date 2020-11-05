

var locations = [
      ['The o2 Arena', 51.502918, 0.0030256, 13],
      ['Baku Crystal Hall', 40.3664468, 49.8397079, 12],
      ['Cape Town Stadium', -33.9034601, 18.4111458, 11],
      ['Konya Buyuksehir Stadion', -33.80010128657071, 151.28747820854187, 10],
      ['Lords Cricket Ground', -33.950198, 151.259302, 9],
      ['Stade Yves-du-Manoir', 40.3664468, 49.8397079, 8],
      ['Mestella Stadium', 40.3664468, 49.8397079, 7],
      ['PGE Narodowy', -33.9034601, 18.4111458, 6],
      ['Optus Stadium', -33.80010128657071, 151.28747820854187, 5],
      ['Antwerps Sportpaleis', -33.950198, 151.259302, 4]
      ['Bursa Timsah Arena', -33.9034601, 18.4111458, 3],
      ['Wembley Stadium', -33.80010128657071, 151.28747820854187, 2],
      ['Zenith Arena Lille', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('Map'), {
      zoom: 3,
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