function loadMap() {

var mapOptions = {
               center:new google.maps.LatLng(39.474567, -0.358199),
               zoom:5
            }
            
            var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
            
            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(39.474567, -0.358199),
               map: map,
               draggable:true,
               icon:'/scripts/img/logo-footer.png'
            });
            
            marker.setMap(map);
            
            var infowindow = new google.maps.InfoWindow({
               content:"Nou Mestalla"
            });
				
            infowindow.open(map,marker);
         }



//*coordinates for highlighted stadiums
stadiums = new Object()
var stadiums = [
      ['Nou Mestalla', 39.474567, -0.3581991, 4],
      ['Le Zenith', 49.3947735, 1.0582603, 5],
      ['Stade Olympique Yves-du-Manoir', 48.9300287, 2.2462959, 3],
      ['Baku Crystal Hall', 40.3441648, 49.8498872, 2],
      ['Sportpaleis, Antwerp', 51.2271264, 4.4473945, 1]
    ];


    //* google map API functionality wit info windows
    var mapOptions = { center:new google.maps.Map(document.getElementById('map'),mapOptions),
      center:new google.maps.LatLng(52.1675343, -2.3311425),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < stadiums.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(stadiums[i][1], stadiums[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


            
         
