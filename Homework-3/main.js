function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var answer3 = document.getElementById("choice3").innerHTML;

    if (choice == 1 && answer1 == "Follow the shimmering lights deeper into the forest") {
        document.getElementById("story-text").innerHTML = "You follow the shimmering lights and discover a hidden fairy glade. They offer to guide you through the forest.";
        document.getElementById("choice1").innerHTML = "Accept the fairy's guidance";
        document.getElementById("choice2").innerHTML = "Politely decline and explore on your own";
        document.getElementById("choice3").innerHTML = "Ask the elves about the secrets of the forest";

    } else if (choice == 2 && answer2 == "Take the narrow path on the right") {
        document.getElementById("story-text").innerHTML = "You take the narrow path and encounter a mischievous imp. It challenges you to a riddle. Solve it, and it may help you.";
        document.getElementById("choice1").innerHTML = "Accept the imp's challenge";
        document.getElementById("choice2").innerHTML = "Politely decline and continue on the path";
        document.getElementById("choice3").innerHTML = "Try to negotiate with the imp";

    } else if (choice == 3 && answer3 == "Ask the elves about the secrets of the forest") {
        document.getElementById("story-text").innerHTML = "The elves share ancient secrets of the forest. Armed with this knowledge, you make informed decisions throughout your journey.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";
        

    } else if (choice == 1 && answer1 == "Accept the fairy's guidance") {
        document.getElementById("story-text").innerHTML = "The fairies lead you through the enchanted forest, revealing its secrets. You emerge safely on the other side, grateful for their guidance.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 2 && answer2 == "Politely decline and explore on your own") {
        document.getElementById("story-text").innerHTML = "You explore the forest on your own, encountering magical creatures and hidden treasures. Your journey is filled with both challenges and wonders.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 3 && answer2 == "Try to negotiate with the imp") {
        document.getElementById("story-text").innerHTML = "You try to negotiate with the imp, offering it something valuable. The imp agrees and provides you with a mysterious map.";
        document.getElementById("choice1").innerHTML = "Follow the map";
        document.getElementById("choice2").innerHTML = "Politely decline and continue on your path";
        document.getElementById("choice3").innerHTML = "Ask the imp for more guidance";

    } else if (choice == 1 && answer1 == "Accept the imp's challenge") {
        document.getElementById("story-text").innerHTML = "You accept the imp's challenge and successfully solve the riddle. The imp rewards you with a magical amulet.";
        document.getElementById("choice1").innerHTML = "Wear the amulet";
        document.getElementById("choice2").innerHTML = "Thank the imp and continue your journey";
        document.getElementById("choice3").innerHTML = "Ask the imp for advice on your next steps";

    } else if (choice == 2 && answer2 == "Politely decline and continue on the path") {
        document.getElementById("story-text").innerHTML = "You politely decline the imp's challenge and continue on the path. The forest becomes denser, and you hear mysterious whispers in the wind.";
        document.getElementById("choice1").innerHTML = "Investigate the whispers";
        document.getElementById("choice2").innerHTML = "Ignore the whispers and hurry forward";
        document.getElementById("choice3").innerHTML = "Converse with the forest creatures about the whispers";

    } else if (choice == 1 && answer1 == "Wear the amulet") {
        document.getElementById("story-text").innerHTML = "You wear the magical amulet, and suddenly, you can understand the language of the creatures in the forest. They share ancient wisdom and guide you to a hidden realm.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 2 && answer2 == "Thank the imp and continue your journey") {
        document.getElementById("story-text").innerHTML = "You thank the imp for the challenge, and it bows in respect. As you continue, you encounter a mystical gate leading to another realm.";
        document.getElementById("choice1").innerHTML = "Enter the mystical gate";
        document.getElementById("choice2").innerHTML = "Continue exploring the forest";
        document.getElementById("choice3").innerHTML = "Consult with the imp on whether to enter the gate";

    } else if (choice == 3 && answer1 == "Consult with the imp on whether to enter the gate") {
        document.getElementById("story-text").innerHTML = "The imp provides cryptic advice about the mystical gate. It hints at hidden dangers but also promises great rewards. The decision is yours.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 1 && answer1 == "Enter the mystical gate") {
        document.getElementById("story-text").innerHTML = "You enter the mystical gate and find yourself in a magical realm beyond imagination. The gate closes behind you, and you embark on a new adventure.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 2 && answer2 == "Continue exploring the forest") {
        document.getElementById("story-text").innerHTML = "You decide to explore more of the enchanted forest. As you journey deeper, you encounter ancient spirits who bestow you with magical abilities.";
        document.getElementById("choices-container").innerHTML = "<p>The end</p>";

    } else if (choice == 1 && answer1 == "Investigate the whispers") {
        document.getElementById("story-text").innerHTML = "You investigate the whispers and discover a hidden portal to a realm of forgotten dreams. Do you dare to step through?";
        document.getElementById("choice1").innerHTML = "Step through the portal";
        document.getElementById("choice2").innerHTML = "Ignore the portal and continue exploring";
        document.getElementById("choice3").innerHTML = "Ask the creatures in the forest about the portal";

    } else if (choice == 2 && answer2 == "Ignore the whispers and hurry forward") {
        document.getElementById("story-text").innerHTML = "You ignore the whispers and hurry forward, but the path becomes treacherous. Suddenly, a mystical creature challenges you to a race. Do you accept?";
        document.getElementById("choice1").innerHTML = "Accept the race";
        document.getElementById("choice2").innerHTML = "Decline and take a different route";
        document.getElementById("choice3").innerHTML = "Seek the assistance of the creatures in the forest for the race";

    } else if (choice == 3 && answer1 == "Ask the creatures in the forest about the portal") {
        document.getElementById("story-text").innerHTML = "The creatures share conflicting opinions about the portal. Some speak of danger, while others mention incredible rewards. The choice is yours.";
        document.getElementById("choice1").innerHTML = "Brave the dangers and step through the portal";
        document.getElementById("choice2").innerHTML = "Avoid the portal and search for another path";
        document.getElementById("choice3").innerHTML = "Seek more information from specific creatures before deciding";
     }
  }
  