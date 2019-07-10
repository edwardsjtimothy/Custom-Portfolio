$(function () {

    //used to intermitently pulse ring divs after they have been generated
    var pulseArr = [];

    function heartbeat () {


        // $(".pulse").each(function() {
        //     console.log($(".pulse").attr("pulse"));

        // });
        

        for (i = 0; i < pulseArr.length; i++) {
           var beat = $(".pulse").attr("pulse", 1);
           console.log(beat);

            
        //     // .animate({ borderWidth: "5px" }, 100).animate({ borderWidth: "2px" }, 100);
        // }
    };
};



    //runs when profile photo is moused over 
    $(".hero-pic").mouseenter(function () {


        //enlarges photo and changes border color
        $(".hero-pic").css({
            "border": "2px solid #ff3300",
            "height": "240px",
            "width": "240px"
        });

        function wave() {

            //variables to determining diameter and position of first generated ring div
            var ripple = 280;
            var pos = -20;
            var color = "#00ffff";

            //variable used to give each ring div a unique number 
            var pulse = 0;

            //increases z-index of name and button to ensure they layered on top of ring divs
            $("fade-btn").css("z-index", "2");

            //stop for ring div generation interval
            function stopWave() {
                clearInterval(fadeIn);
            };



            //running this function every one 0.1 seconds untill stopWave() is triggered
            var fadeIn = setInterval(function () {

                //alternating color of propagating rings
                for (i = 0; i < 2; i++) {
                    if (i === 1) {
                        color = "#ff3300"
                    } else {
                        color = "#00ffff"
                    };

                    //generating ring divs
                    var wave = $("<div>");
                    wave.addClass("pulse")
                    wave.attr("pulse", pulse);
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

                

                    //fading in ring divs when they are generated and creating a pulse

                    $(".hero-content").append(wave.hide().fadeIn(1000).animate({ borderWidth: "5px" }, 100).animate({ borderWidth: "2px" }, 100));

                    //adjusting variables to change diameter and position of generated ring divs
                    ripple += 40;
                    pos -= 20;

                    //used to intermitently pulse ring divs after they have been generated
                    pulse += 1;
                    pulseArr.push(pulse);
                };

                //stopping ring propagation after ripple reaches 2000
                if (ripple >= 2000) stopWave();
            }, 100);


            // fading in "hire me" button
            $(".hire-me").hide().css("visibility", "visible").fadeIn(2000);
        }

        //calling ring div function 
        wave();
    });

    
$(".hire-me").click(function() {
    heartbeat();
});

});
