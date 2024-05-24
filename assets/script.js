//script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentIndex = 0;

const dotsconteneur = document.querySelector('.dots')

// html dynamique
let node = ''
const nbDots = slides.length; //4

for (element of slides) {
    node = node + '<div class="dot" ></div >'
}




dotsconteneur.innerHTML = node;

const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.classList.add('dot_selected')
    console.log(dot);
})


const bi = document.querySelector('.banner-img');

arrowRight.addEventListener('click', function() {
    bi.src = "./assets/images/slideshow/" + slides[2].image
})

// mettre à jour les dot

function updateDots(index) {

    dots.forEach((dot, i) => {
        // console.log('indice', i, 'index', index, 'dot', dot)
        dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        dot.classList.add('test')
        if (i == index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
    //correction du bug pour la première et la dernière image
    if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    // console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function() {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1);
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les points indicateurs pour la première diapositive
