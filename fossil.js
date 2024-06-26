

window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click", openPack);
}

function randomNumber(min, max) { 
    return Math.ceil(Math.random() * (max - min) + min);
} 

function openPack() {
    // alert("open pack");
    let cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove()
    }

    for (let i = 0; i < 11; i++) {
        /* 
            <div class="pokemon-card"> 
                <img id="0">
            </div>
        */
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        if (i == 0) {
            num = randomNumber(3, 49); //rare card for the last card
        } else if (i == 10) {
            num = randomNumber(3,64); 
        } else {
            num = randomNumber(3, 49);
        }
        cardImg.src = "./fossil/Fossil (" + num.toString() + ").jpg";

        cardDiv.appendChild(cardImg);

        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}
