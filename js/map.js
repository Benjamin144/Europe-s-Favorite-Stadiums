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




            
         
