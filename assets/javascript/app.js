$(function() {

//hover event trigger 

var hover = true;

$(".hero-pic").mouseenter(function() {
    
    if (hover) {
        var ripple = 260;
        var wave = $("<div>");
        wave.css({
            "height": ripple + "px",
            "width": ripple + "px",
            "border-radius": "50%",
            "border": "4px solid #00ffff"
        });
        console.log(wave);
    }
    
   
    
    
});

// $(".hero-pic").mouseleave(function() {
//     $(".hero-pic").css("border", "2px solid #00ffff");

// });




});