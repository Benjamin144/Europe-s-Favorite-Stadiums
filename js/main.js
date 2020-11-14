//set toggle collapse function on navbar

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on nav toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})





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





