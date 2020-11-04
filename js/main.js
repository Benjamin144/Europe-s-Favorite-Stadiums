



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

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on nav toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})

//* customised self manual scrolling carousel
  
$(document).ready(function () {
  initialize_owl($('#owl1'));
    
});

function initialize_owl(el) {
  el.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
}

//*self drag away functionality

function destroy_owl(el) {
  el.data('owlCarousel').destroy();
}

