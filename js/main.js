$(document).ready(function() {

$nav=$('.nav');
$toggleCollapse=$('.toggle-collapse')
//click event on toggle menu
$toggleCollapse.click(function() {
$nav.toggleClass("collapse");
});

//owl-carousel for review items
$('.owl-carousel').owlCarousel();

});


var stadiums = [
      ['Nou Mestalla', 39.474567, -0.3581991, 4],
      ['Le Zenith', 49.3947735, 1.0582603, 5],
      ['Stade Olympique Yves-du-Manoir', 48.9300287, 2.2462959, 3],
      ['Baku Crystal Hall', 40.3441648, 49.8498872, 2],
      ['Sportpaleis, Antwerp', 51.2271264, 4.4473945, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: new google.maps.LatLng( 52.1675343, -2.3311425),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

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
