$(function () {

    //hover event trigger 

    var hover = true;


    $(".hero-pic").mouseenter(function () {

        if (hover) {

            $(".hero-pic").css({
                "border": "2px solid #ff3300",
                "height": "240px",
                "width": "240px"
            });

            function wave() {
                var ripple = 280;
                var pos = -20;
                var color = "#00ffff";

                //alternating color of propagating rings
                for (i = 0; i < 100; i++) {
                    if (i % 2) {
                        color = "#ff3300"
                    } else {
                        color = "#00ffff"
                    };

                    //generating ring divs
                    var wave = $("<div>");
                    wave.css({
                        "height": ripple + "px",
                        "width": ripple + "px",
                        "border-radius": "50%",
                        "border": "2px solid" + color,
                        "position": "absolute",
                        "top": pos + "px",
                        "left": pos + "px",
                    });

                    $(".hero-content").append(wave.hide().fadeIn());
                    ripple += 40;
                    pos -= 20;
                };
            }
            setTimeout(function () {
                wave();
            }, 1000);
        }
    });
});
    

// $(".hero-pic").mouseleave(function() {
//     $(".hero-pic").css("border", "2px solid #00ffff");

// });


