

//set responsive items across site

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

//set toggle collapse function on navbar

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on nav toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})


//customised self manual scrolling carousel


  
$(document).ready(function () {
  initialize_owl($('#owl1'));
   
});

//set responses for Carousel

function initialize_owl(el) {
  el.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: false
      }
    }
  });
}

//New Carousel functions//
$(document).ready(function () {
  initialize_owl($('#owl1'));

  
  }); 
//self drag away functionality on responsive carousel
function destroy_owl(el) {
  el.data('owlCarousel').destroy();
}
 //Loop through Carousel
 
$(document).ready(function(){
  const owl = $('.owl-carousel')
  owl.owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    items: 1,
    dots: true
  });


  
  // Custom Nav directional arrows on carousel
  
  $('.owl-carousel__next').click(() => owl.trigger('next.owl.carousel'))
  
  $('.owl-carousel__prev').click(() => owl.trigger('prev.owl.carousel'))
})

// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





