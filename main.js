let flippedCards = 0;
let card1;
let card2;
let images = [];
let totalImages = 1;
let revealedCards = 0;
let allCards = $('.card');

// Populate images array
for (let index = 1; index <= totalImages; index++) {
    images.push(`img/${index}.jpeg`);
}

// Shuffle images
let shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);

function flipCard(card) {
    if (!card.classList.contains('known') || !card.classList.contains('flipped')) {
        if (flippedCards < 2) {
            if (flippedCards === 0) {
                card1 = card;
            } else {
                card2 = card;
            }
            flippedCards++;

            let index = card.textContent;
            card.style.backgroundImage = `url(${shuffledImages[index - 1]})`;
            card.classList.toggle('flipped');

            if (flippedCards === 2) {
                checkCardsMatch();
            }
        }
    }
}

function checkCardsMatch() {
    if (card1.style.backgroundImage === card2.style.backgroundImage) {
        flippedCards = 0;
        card1.classList.toggle('flipped');
        card2.classList.toggle('flipped');
        card2.classList.toggle('known');
        card2.classList.toggle('known');
        revealedCards++;
        if (revealedCards === totalImages) {
            alert("GANASTE!");
            location.reload();
        }
    } else {
        setTimeout(flipBack, 500);
    }
}

function flipBack() {
    flippedCards = 0;
    card1.style.backgroundImage = "url(img/back.png)";
    card2.style.backgroundImage = "url(img/back.png)";
    card1.classList.toggle('flipped');
    card2.classList.toggle('flipped');
}
