$(function () {

//array of images for background
let bodyArr = ["assets/images/backgrounds/body-1.jpg","assets/images/backgrounds/body-2.jpg","assets/images/backgrounds/body-3.jpg","assets/images/backgrounds/body-4.jpg","assets/images/backgrounds/body-5.jpg","assets/images/backgrounds/body-6.jpg","assets/images/backgrounds/body-7.jpg","assets/images/backgrounds/body-8.jpg","assets/images/backgrounds/body-9.jpg","assets/images/backgrounds/body-10.jpg",];

// cycling through background images
const backGroundImgCycle =()=> {

    let photoNum = Math.floor(Math.random() * 10);

    $(".active, .modal-content").css({
        "background": `url(${bodyArr[photoNum]}) no-repeat center center fixed`,
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover",
        "transition": "background 4s ease-in"
    });

    setInterval(function() {
        let photoNum = Math.floor(Math.random() * 10);

            $(".active, .modal-content").css({"background": `url(${bodyArr[photoNum]}) no-repeat center center fixed`,
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "transition": "background 4s ease-in"
            });
    },40000);
};

backGroundImgCycle();

});