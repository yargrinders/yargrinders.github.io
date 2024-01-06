// cards.js
var cardData = [
    {
        imageSrc: "img/cards_img/oA73KOL.png",
        link: "#",
        technologies: "HTML CSS JS"
    },
    {
        imageSrc: "img/cards_img/Novaboard.png",
        link: "https://yargrinders.github.io/Final-work-wezom/",
        technologies: "HTML CSS JS"
    },
    {
        imageSrc: "img/cards_img/OKS.png",
        link: "https://yargrinders.github.io/kiosk/",
        technologies: "HTML CSS VueJS jQuery"
    },
    {
        imageSrc: "img/cards_img/Ch.png",
        link: "https://yargrinders.github.io/cheatsheet/git.html",
        technologies: "HTML SaSS Gulp Js"
    },
    {
        imageSrc: "img/cards_img/oA73KOL.png",
        link: "#",
        technologies: "HTML CSS JS"
    },
    {
        imageSrc: "img/cards_img/Novaboard.png",
        link: "https://yargrinders.github.io/Final-work-wezom/",
        technologies: "HTML CSS JS"
    },
    {
        imageSrc: "img/cards_img/OKS.png",
        link: "https://yargrinders.github.io/kiosk/",
        technologies: "HTML CSS VueJS jQuery"
    },
    {
        imageSrc: "img/cards_img/Ch.png",
        link: "https://yargrinders.github.io/cheatsheet/git.html",
        technologies: "HTML SaSS Gulp Js"
    },
    // Add more cards here.
];

var portfolio = document.querySelector('.portfolio');
var openMoreButton = document.getElementById('openMoreButton');
var closeCardsButton = document.getElementById('closeCards');
var cardsToShow = 4;
var currentCardIndex = 0;
var buttonClicked = false;

function addCardToDOM(card) {
    var cardHTML = `
        <div class="portfolio__card">
            <div class="portfolio__card-image">
                <div class="card_image-top">   
                    <img src="${card.imageSrc}" alt="Card Image">
                    <p><a href="${card.link}" target="_blank"></a></p>
                </div>
                <div class="card_image-bottom">
                    <p>${card.technologies}</p>
                </div>                        
            </div>
        </div>
    `;
    portfolio.insertAdjacentHTML('beforeend', cardHTML);
}

function addCardsToDOM(start, end) {
    for (var i = start; i < end && i < cardData.length; i++) {
        addCardToDOM(cardData[i]);
    }

    setTimeout(function () {
        var addedCards = portfolio.querySelectorAll('.portfolio__card');
        addedCards.forEach(function (card, index) {
            setTimeout(function () {
                card.classList.add('show');
            }, index * 100);
        });

        if (buttonClicked) {
            addedCards[addedCards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            window.scrollBy(0, 400);
        }
    }, 10);
}

addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
currentCardIndex += cardsToShow;

openMoreButton.addEventListener('click', function () {
    addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
    currentCardIndex += cardsToShow;

    buttonClicked = true;

    if (currentCardIndex >= cardData.length) {
        openMoreButton.style.display = 'none';
        closeCardsButton.style.display = 'block';
    }
});

closeCardsButton.addEventListener('click', function () {
    closeCardsButton.style.display = 'none';
    openMoreButton.style.display = 'block';

    portfolio.innerHTML = '';
    currentCardIndex = 0;
    buttonClicked = false;

    addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
    currentCardIndex += cardsToShow;

    var portfolioHeader = document.getElementById('p');
    portfolioHeader.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});