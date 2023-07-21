/* Scripty Script */
/* Hero Image Easter Egg Code */
let counter = 0;
const heroImage = document.getElementById('hero-image');
const heroImageContainer = document.getElementById('hero-image-box');

heroImage.onclick = function() {
    counter+= 1;
    if (counter % 2 != 0) {
        heroImageContainer.style.boxShadow = '0 0 15px olive';
    } else {
        heroImageContainer.style.boxShadow = '0 0 15px lightgray';
    }
};

/* Dark Mode */
const darkModeButton = document.getElementById('darkmode');

darkModeButton.onclick = function(event) {
    event.preventDefault(); // Prevent default function which causes issues
    
    counter+= 1;
    if (counter % 2 != 0) {
        darkModeButton.innerHTML = 'Light Mode';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        darkModeButton.innerHTML = 'Dark Mode';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}