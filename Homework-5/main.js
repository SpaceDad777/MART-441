var imageTags = ["image0", "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11"];
var blankImagePath = "Blank image.jpg";
var actualImages = [];
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
    var actualImagePath = ["images/bird.jpg", "images/cat.jpg", "images/dog.jpg", "images/orange.jpg"];
    var count = [0, 0];

    while (actualImages.length < 12) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        if (count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    var cardElement = document.getElementById(imageTags[number]);

    if (cardElement.getAttribute("data-hidden") === "true") {
        cardElement.src = actualImages[number];
        cardElement.setAttribute("data-hidden", "false");

        flippedCards.push(actualImages[number]);
        flippedIndexes.push(number);

        // Check for matching cards when two cards are flipped
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000); // Adjust the delay as needed
        }
    } else {
        cardElement.src = blankImagePath;
        cardElement.setAttribute("data-hidden", "true");

        // Remove the card from the flipped cards arrays
        var index = flippedIndexes.indexOf(number);
        if (index !== -1) {
            flippedCards.splice(index, 1);
            flippedIndexes.splice(index, 1);
        }
    }
}
function checkForMatch() {
    if (flippedCards[0] === flippedCards[1]) {
        // Match found, you can add additional logic here if needed

        // Clear the flipped cards arrays
        flippedCards = [];
        flippedIndexes = [];
    } else {
        // No match, flip the cards back
        for (var i = 0; i < flippedIndexes.length; i++) {
            var cardElement = document.getElementById(imageTags[flippedIndexes[i]]);
            cardElement.src = blankImagePath;
            cardElement.setAttribute("data-hidden", "true");
        }

        // Clear the flipped cards arrays
        flippedCards = [];
        flippedIndexes = [];
    }
}