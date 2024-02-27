var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "Blankimage.jpg";
var actualImage = ["images/bird.jpg", "images/cat.jpg", "images/dog.jpg", "images/orange.jpg", "images/fox.jpg", "images/owl.jpg"];

var flippedCards = [];
var flippedIndexes = [];
var attempts = 0; // Counter for attempts

function startGame() {
    // Game initialization logic
    // ...
}

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
            count[randomNumber] = count[randomNumber] + 3;
        }
    }
}

function flipImage(number) {
    attempts++; // Increment attempts on each flip
    var cardElement = document.getElementById(imageTags[number]);

    if (cardElement.getAttribute("data-hidden") === "true") {
        cardElement.src = actualImage[number];
        cardElement.setAttribute("data-hidden", "false");

        flippedCards.push(actualImage[number]);
        flippedIndexes.push(number);

        // Check for matching cards when two cards are flipped
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
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
        // Check if the game is complete and redirect to the final page
        if (isGameComplete()) {
            redirectToFinalPage();
        }
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

function isGameComplete() {
    // Check if all cards are flipped
    for (var i = 0; i < imageTags.length; i++) {
        var cardElement = document.getElementById(imageTags[i]);
        if (cardElement.getAttribute("data-hidden") === "true") {
            return false; // If any card is still hidden, the game is not complete
        }
    }
    return true; // All cards are flipped, game is complete
}

function redirectToFinalPage() {
    // Save attempts to localStorage
    localStorage.setItem("attempts", attempts);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("age", age);

    // Redirect to the final results page
    window.location = "final.html";
}

function loadPlayerInfo() {
    // Retrieve player information from localStorage
    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");
    var age = localStorage.getItem("age");
    attempts = parseInt(localStorage.getItem("attempts")) || 0; // Retrieve attempts

    // Display player information on the final page
    document.getElementById('playerName').innerText = firstName + ' ' + lastName;
    document.getElementById('playerAge').innerText = age;
    document.getElementById('playerAttempts').innerText = attempts;
    // Redirect to the final results page
    window.location = "final.html";
}
