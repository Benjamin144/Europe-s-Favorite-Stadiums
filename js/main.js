



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

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})

    // owl-crousel for blog
    //$('.owl-carousel').owlCarousel({
        //loop: true,
        //autoplay: false,
        //autoplayTimeout: 3000,
        //dots: false,
        //nav: true,
        //navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        //responsive: responsive
    //});

//});

$(document).ready(function () {
  initialize_owl($('#owl1'));
  
  let tabs = [
    { target: '#home', owl: '#owl1' },
    { target: '#profile', owl: '#owl2' },
    { target: '#messages', owl: '#owl3' },
    { target: '#settings', owl: '#owl4' },
  ];

  // Setup 'bs.tab' event listeners for each tab
  tabs.forEach((tab) => {
    $(`a[href="${ tab.target }"]`)
      .on('shown.bs.tab', () => initialize_owl($(tab.owl)))
      .on('hide.bs.tab', () => destroy_owl($(tab.owl)));
  });    
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

function destroy_owl(el) {
  el.data('owlCarousel').destroy();
}

