$(function () {

    //array to store portfolio card data
    let cards = [
        [
            { title: "Astronomican" },
            { para: "Full Stack React application to track victory and defeat in games of Warhammer 40000. Efforts to fully deploy ongoing. Built with React, Node.js, Express,Passport.js, and Bootstrap." },
            { img: "assets/images/portfolio_cards/Astronomican.PNG" },
            { linkOne: "https://astronomican.herokuapp.com/" },
            { linkTwo: "https://github.com/edwardsjtimothy/administratum-rex.git" }
        ],
        [
            { title: "DevBlog" },
            { para: "Full Stack blog application built in Python/Django and Postgresql. Deployed on Heroku with help from AWS S3. Create and account and give it a try!" },
            { img: "assets/images/portfolio_cards/django-blog.PNG" },
            { linkOne: "https://devblogtje.herokuapp.com/" },
            { linkTwo: "https://github.com/edwardsjtimothy/DjangoBlog" }
        ],
        [
            { title: "Memory Madness" },
            { para: "Try not to click each photo more than once or the game will reset. Built using Javascript, React, CSS, and Bootstrap." },
            { img: "assets/images/portfolio_cards/memory-madness.PNG" },
            { linkOne: "https://edwardsjtimothy.github.io/MemoryMadness/" },
            { linkTwo: "https://github.com/edwardsjtimothy/MemoryMadness.git" }
        ],
        [
            { title: "LotR Trivia" },
            { para: "Test you knowledge of Middle-earth with this simple Lord of the Rings Quiz. Try to beat the clock! Impress your family and friends! Built using Javascript, JQuery, CSS, and Bootstrap." },
            { img: "assets/images/portfolio_cards/LotR-Trivia.PNG" },
            { linkOne: "https://edwardsjtimothy.github.io/TriviaGame/" },
            { linkTwo: "https://github.com/edwardsjtimothy/TriviaGame" }
        ],
        [
            { title: "Songs, Bands, and Movies" },
            { para: "A backend app that allows the user to query several APIs via the terminal and process.argv for information on the specified song, band, or movie. Built using Node.js, Express, and Javascript." },
            { img: "assets/images/portfolio_cards/Bands-in-Town.PNG" },
            { linkOne: "" },
            { linkTwo: "https://github.com/edwardsjtimothy/Liri" }
        ],
        [
            { title: "Tip Calculator" },
            { para: "Mental math can be a bit of a bear. This app allows you quickly calculate your desired tip and split the amount between multiple parties. Built using Javascript, JQuery, CSS, and Bootstrap." },
            { img: "assets/images/portfolio_cards/Tip-Calculator.PNG" },
            { linkOne: "https://edwardsjtimothy.github.io/Tip-Calculator/" },
            { linkTwo: "https://github.com/edwardsjtimothy/Tip-Calculator" }
        ],
        [
            { title: "Online Marketplace" },
            { para: "A backend app that simulates the basic functionality of an online marketplace. The user can access inventory via terminal and place an order. The inventory is then updated and a total cost is provided. Built using Node.js, Express, Javascript, and MySQL." },
            { img: "assets/images/portfolio_cards/bamazon.png" },
            { linkOne: "" },
            { linkTwo: "https://github.com/edwardsjtimothy/bamazon" }
        ],
        [
            { title: "Gif Generator" },
            { para: "This app uses the Giphy API to generate 10 gifs based on whichever button is clicked. The user can also add their own buttons. Built using Javascript, JQuery, CSS, and Bootstrap." },
            { img: "assets/images/portfolio_cards/Gif-Generator.PNG" },
            { linkOne: "https://edwardsjtimothy.github.io/Gif-Generator/" },
            { linkTwo: "https://github.com/edwardsjtimothy/Gif-Generator" }
        ],
        [
            { title: "Tic Tac Toe" },
            { para: "Have you ever felt that you needed to play Tic Tac Toe from your web browser with a friend or colleague? No? Well, just in case. Built using Javascript, JQuery, CSS, and Bootstrap." },
            { img: "assets/images/portfolio_cards/Tic-Tac-Toe.PNG" },
            { linkOne: "https://edwardsjtimothy.github.io/Tic-Tac-Toe/" },
            { linkTwo: "https://github.com/edwardsjtimothy/TicTacToe" }
        ],

    ];

    //generates portfolio cards
    const cardGen = () => {
        let rowDiv = $("<div>").addClass("row profile");
        for (i = 0; i < cards.length; i++) {
            let colDiv = $("<div>").addClass("col-12 col-sm-12 col-md-6 col-lg-4 check-it");
            let cardDiv = $("<div>").addClass("card info").css("width", "18rem;")
            let img = $("<img>").attr("src", `${cards[i][2].img}`).addClass("card-img-top")
            let cardBody = $("<div>").addClass("card-body");
            let cardHead = $("<h5>").addClass("card-title").text(`${cards[i][0].title}`);
            let cardPara = $("<p>").addClass("card-text").text(`${cards[i][1].para}`);
            let linkOne = $("<a>").attr({ "target": "_blank", "href": `${cards[i][3].linkOne}` }).addClass("btn btn-dark port-link space").text("The App");
            let linkTwo = $("<a>").attr({ "target": "_blank", "href": `${cards[i][4].linkTwo}` }).addClass("btn btn-dark port-link").text("The Repo");

            if (cards[i][3].linkOne === "") {
                linkOne = null
            }

            rowDiv.append(colDiv);
            colDiv.append(cardDiv);
            cardDiv.append(img);
            cardBody.append(cardHead, cardPara, linkOne, linkTwo)
            cardDiv.append(cardBody);
            $(".bod-con").append(rowDiv)
        }
    }

    cardGen();

});