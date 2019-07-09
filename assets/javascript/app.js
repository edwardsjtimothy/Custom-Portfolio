$(function () {

    //hover event trigger 


    $(".hero-pic").mouseenter(function () {

            $(".hero-pic").css({
                "border": "2px solid #ff3300",
                "height": "240px",
                "width": "240px"
            });

            function wave() {
                var ripple = 280;
                var pos = -20;
                var color = "#00ffff";

                $("fade-btn").css("z-index", "2");

                function stopWave() {
                    clearInterval(fadeIn);
                };

                //alternating color of propagating rings
               var fadeIn = setInterval(function() {
                for (i = 0; i < 2; i++) {
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
                        "z-index": "1",
                    });

                    

                    $(".hero-content").append(wave.hide().fadeIn(2500));
                    ripple += 40;
                    pos -= 20;
                };
                if (ripple >= 2000) stopWave();
            }, 100);


            // $(".hire-me").fadeIn(2000).show();
            $(".hire-me").hide().css("visibility", "visible").fadeIn(2000);
        }
                wave();
    });

    

// $(".hero-pic").mouseleave(function() {
//     $(".hero-pic").css("border", "2px solid #00ffff");

// });



});
