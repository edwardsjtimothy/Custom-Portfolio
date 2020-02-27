$(function () {

    //elements hidden on page load
    $(".resume-con").hide();
    $(".res-btn").hide();
    $(".back-btn").hide();

    //variable to specify whether or not prof pic has been moused over
    let hover = false;

    //variable to establish initial wait period before running random pulse function.
    let bpm = 10000;
   

    //checking if hero photo has been moused over

    const hoverCheck =()=> {
           setTimeout(function(){
                if (!hover) {
                    $(".modal").modal();
                };
          },30000);
        };

    //pulses ring divs
    const heartbeat =()=> {

        let beat = 0
        setInterval(function () {

            $(".pulse").each(function () {
                if ($(this).data("pulse") === beat) {
                    $(this).animate({ borderWidth: "5px" }, 200).animate({ borderWidth: "2px" }, 200);
                }
            });
            beat += 1;
        }, 50);
    };

    //reverses wave and hides hero content
    const collapse =()=> {
        let beat = 70
        const collapse = setInterval(function () {
            
            $(".pulse").each(function () {
                if ($(this).data("pulse") === beat) {
                    $(this).animate({ borderWidth: "5px" }, 100).animate({ borderWidth: "2px" }, 100).animate({opacity: "0.0"});
                }
            });
            beat -= 1;
            if (beat <= -6) {
                clearInterval(collapse);
                
                $(".hero-pic").fadeOut(500);
                $(".hero-heading").fadeOut(500);
                $(".hire-me").fadeOut(500);
                $(".hero").animate({
                    height: "0%",
                    borderBottom: "hidden",
                },500);
        
                $(".res-wrap").show(1000);
                $(".resume-con").show(1000);
                $(".res-btn").show(1000);
                $(".back-btn").show(1000);
                
                
            }; 
        }, 30);
    };

    const newWave =()=> {
        
        $(".hero-pic").fadeIn(1000);
        $(".hero-heading").fadeIn(1000);
        $(".hire-me").fadeIn(1000);

        let beat = 0
        const newWaveAnim = setInterval(function () {

            $(".pulse").each(function () {
                if ($(this).data("pulse") === beat) {
                    $(this).animate({opacity: "1.0"}, 100).animate({ borderWidth: "5px" }, 100).animate({ borderWidth: "2px" }, 100);
                }
            });
            beat += 1;
            if (beat >= 55) {
                clearInterval(newWaveAnim);
                $(".bod-con").show("fast");
                $(".hero-border").show();
                $(".hero").animate({
                    height: "50%",
                    borderBottom: "2px solid #ff3300"
                },500);
            }; 
        }, 30);
    };

    //runs when profile photo is moused over 
    $(".hero-pic").mouseenter(()=> {

        hover = true;

        //enlarges photo and changes border color

        $(".hero-pic").css({
            "border": "2px solid #ff3300",
            "height": "240px",
            "width": "240px"
        });

        function wave() {

            //variables to determining diameter and position of first generated ring div
            let ripple = 280;
            let pos = -20;
            let color = "#00ffff";

            //variable used to give each ring div a unique number 
            let pulse = 0;

            //increases z-index of name and button to ensure they layered on top of ring divs
            $("fade-btn").css("z-index", "2");

            //running this function every one 0.1 seconds untill stopWave() is triggered
            let fadeIn = setInterval(function () {

                //alternating color of propagating rings
                for (i = 0; i < 2; i++) {
                    if (i === 1) {
                        color = "#ff3300"
                    } else {
                        color = "#00ffff"
                    };

                    //generating ring divs
                    let wave = $("<div>");
                    wave.addClass("pulse")
                    wave.data("pulse", pulse);
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
                };

                //stopping ring propagation after ripple reaches 2000
                if (ripple >= 2300) clearInterval(fadeIn);
            }, 100);


            // fading in "hire me" button
            $(".hire-me").hide().css("visibility", "visible").fadeIn(2000);
        }

        //calling ring div function 
        wave();
    });

    //used to intermitently pulse ring divs after they have been generated
    setInterval(function () {
        if (hover) heartbeat();
        bpm = Math.floor(Math.random() * 10000) + 30000;
    }, bpm);

    //enlarges card on mouse enter 

    

    //click function for hire-me button
    $(".hire-me").click(function(){
        $(".bod-con").hide("fast");
        $(".hero-border").hide("fast");
        $(".hero").css("border-bottom", "none");
        $(".hero").animate({
            height: "100%"
        },500, collapse());
    });

    //click function for back button
    $(".back-btn").click(function(){
        $(".res-wrap").hide("fast");
        $(".hero").css("border-bottom", "2px solid #ff3300");
        $(".hero").animate({
            height: "100%",
        },500, newWave());
    });

    //cycling background
hoverCheck();
});
