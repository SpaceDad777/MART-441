
// Define the class
class SocialJusticeImage {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

// Create objects
const image1 = new SocialJusticeImage("¡Cesen Deportación!", "Images/RupertGarcia.jpg", "Description 1", "Rupert Garcia", "1973");

const image2 = new SocialJusticeImage("Prayer discrimination at a segregated swimming pool", "Images/DannyLyon.jpg", "Description 2", "Danny Lyon", "1962");

const image3 = new SocialJusticeImage("Eddie M. 'Fat' Coco Jr., Transylvania, Louisiana", "Images/DeborahLuster.jpg", "Description 3", "Deborah Luster", "2002");

const image4 = new SocialJusticeImage("Children of the Weill public school", "Images/DorotheaLange.jpg", "Description 4", "Dorothea Lange", "2023");

const image5 = new SocialJusticeImage("Magnolia", "Images/GracielaIturbide.jpg", "Description 5", "Graciela Iturbide", "1986");


// Store objects in an array
const imagesArray = [image1, image2, image3, image4, image5];

// Function to display a random image
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    const randomImage = imagesArray[randomIndex];

    // Display the properties of the random image
    document.getElementById('display-image').src = randomImage.image;
    document.getElementById('title').innerText = randomImage.title;
    document.getElementById('description').innerText = randomImage.description;
    document.getElementById('author-year').innerText = `Author: ${randomImage.author}, Year: ${randomImage.year}`;
}
