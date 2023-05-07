$(document).ready(function() {
    $(".lightSlider-cars").lightSlider({
        item: 5,
        responsive : [
            {
                breakpoint:768,
                settings: {
                    item:3
                  }
            },
        ]
    });

    $(".lightSlider-clubs").lightSlider({
        item: 4,
        adaptiveHeight: true,
        responsive : [
            {
                breakpoint:768,
                settings: {
                    item:1,
                    adaptiveHeight: true
                  }
            },
        ]
    });

    
});