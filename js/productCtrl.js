const products = [
    {
        "productId": 1,
        "title": "Space War",
        "price": 495,
        "description": "Space World is a multiplayer online shooter game," +
                        "it is loved by people all over the world.<br> It also " +
                        "has a story mode where you can follow a young jedai " +
                        "thru various space wars.",
        "imgUrl": "/resources/images/GameHub_covers6.jpeg"
    },
    {
        "productId": 2,
        "title": "Forge Legend",
        "price": 555,
        "description": "Forge Legend is a multiplayer online fantasy game, " +
                        "it’s loved by people all over the world. </br>Here you " +
                        "can build your own character and team up to fight against " +
                        "the dark forces with your friends",
        "imgUrl": "/resources/images/GameHub_covers10.jpeg"
    },
    {
        "productId": 3,
        "title": "Super Duper",
        "price": 405,
        "description": "Super duper is a multiplayer online dancing game, " +
                        "it is loved by people all over the world. </br>It also " +
                        "has a competition mode where you can compete against people " +
                        "from around the world. ",
        "imgUrl": "/resources/images/GameHub_covers2.jpeg"
    },
    {
        "productId": 4,
        "title": "Black",
        "price": 655,
        "description": "Black is a single player horror game, " +
                        "it’s loved by people all over the world. </br>Here you " +
                        "got a game that is gonna give you chills down your spine. " +
                        "Are you tough enough?",
        "imgUrl": "/resources/images/GameHub_covers3.jpeg"
    },
    {
        "productId": 5,
        "title": "Cyberpunk",
        "price": 395,
        "description": "Cyberpunk is a multiplayer online open world game, " + 
                        "it’s loved by people all over the world. </br>Here you " +
                        "are presented with a lot of challenges and thugs, that wants " +
                        "to take over the city. can you stop them? Are you " +
                        "up for the challenge?.",
        "imgUrl": "/resources/images/GameHub_covers9.jpeg"
    },
    {
        "productId": 6,
        "title": "Assassin",
        "price": 200,
        "description": "Assassin is a multiplayer online game, " +
                        "it’s loved by people all over the world. </br>Here you " +
                        "are presented with a lot of challenges and fights. " +
                        "Can you handle it?. ",
        "imgUrl": "/resources/images/GameHub_covers5.jpeg"
    },
    {
        "productId": 7,
        "title": "Ping Pong",
        "price": 100,
        "description": "Ping pong is a multiplayer online game, " +
                        "it’s loved by people all over the world. </br>here you can " +
                        "join tournaments and championships in ping pong and compete to " +
                        "be the best player in the world.",
        "imgUrl": "/resources/images/GameHub_covers.jpeg"
    },
    {
        "productId": 8,
        "title": "Boxer",
        "price": 150,
        "description": "Boxer is a multiplayer online game, " +
                        "it’s loved by people all over the world. </br>here you can " +
                        "build your own boxing career and fight against the top " +
                        "boxers in the world. Good luck on your journey. ",
        "imgUrl": "/resources/images/GameHub_covers8.jpeg"
    },
    {
        "productId": 9,
        "title": "Racing",
        "price": 105,
        "description": "Racing is a multiplayer online game, " +
                        "it’s loved by people all over the world. <br>here you can " +
                        "build you own car and test its limits in some of the fastest " +
                        "racing tracks in the world.",
        "imgUrl": "/resources/images/GameHub_covers7.jpeg"
        
    }
];





window.addEventListener("load", function(){
    const urlQuery = window.location.search;
    const urlParams = new URLSearchParams(urlQuery);
    const productId = urlParams.get("productId");
    
    const product = products.find(p => p.productId == productId);
    document.getElementById("prodImg").style.backgroundImage = "url(" + product.imgUrl + ")";
    document.getElementById("prodPrice").innerHTML = "NOK " + product.price + ",-"
    document.getElementById("prodTitle").innerHTML = product.title;
    document.getElementById("gameDescription").innerHTML = product.description;
    document.getElementById("smalImg").src = product.imgUrl = product.imgUrl
    document.getElementById("smalImg").alt = product.imgUrl = product.title
});