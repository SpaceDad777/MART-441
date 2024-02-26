var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "Blankimage.jpg";
var actualImage = ["images/bird.jpg", "images/cat.jpg", "images/dog.jpg", "images/orange.jpg", "images/fox.jpg", "images/owl.jpg"];

var flippedCards = [];
var flippedIndexes = [];

function printBlanks() {
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        var cardElement = document.getElementById(imageTags[i]);
        cardElement.src = blankImagePath;
        cardElement.setAttribute("data-hidden", "true");
    }
}

function createRandomImageArray() {
    var count = [0, 0, 0, 0, 0, 0];

    while (actualImage.length < 12) {
        var randomNumber = Math.floor(Math.random() * actualImage.length);

        if (count[randomNumber] < 2) {
            actualImage.push(actualImage[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    var cardElement = document.getElementById(imageTags[number]);

    if (cardElement.getAttribute("data-hidden") === "true") {
        cardElement.src = actualImage[number];
        cardElement.setAttribute("data-hidden", "false");

        flippedCards.push(actualImage[number]);
        flippedIndexes.push(number);

        // Check for matching cards when two cards are flipped
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 3000); 
        }
    } else {
        cardElement.src = blankImagePath;
        cardElement.setAttribute("data-hidden", "true");

        
        var index = flippedIndexes.indexOf(number);
        if (index !== -1) {
            flippedCards.splice(index, 1);
            flippedIndexes.splice(index, 1);
        }
    }
}

function checkForMatch() {
    if (flippedCards[0] === flippedCards[1]) {
    
        flippedCards = [];
        flippedIndexes = [];
    } else {
        // No match, flip the cards back
        for (var i = 0; i < flippedIndexes.length; i++) {
            var cardElement = document.getElementById(imageTags[flippedIndexes[i]]);
            cardElement.src = blankImagePath;
            cardElement.setAttribute("data-hidden", "true");
        }

        flippedCards = [];
        flippedIndexes = [];
    }
}
