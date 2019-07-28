namespace Aufgabe4 {

    let getPlayerNumber: string;
    let getCardPair: string;
    let playerNumber: number;
    let cardPair: number;
    let numberCards: number;
    let createCards: string[];
    let removeCard: number;
    let cardNamevalue1: string;
    let cardNamevalue2: string;
    let cardNamevalue3: string;

    let player1Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Spieler1");
    let player2Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Spieler2");
    let player3Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Spieler3");
    let player4Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Spieler4");

    let player1input: HTMLInputElement = <HTMLInputElement>document.getElementById("spielerinput1");
    let player2input: HTMLInputElement = <HTMLInputElement>document.getElementById("spielerinput2");
    let player3input: HTMLInputElement = <HTMLInputElement>document.getElementById("spielerinput3");
    let player4input: HTMLInputElement = <HTMLInputElement>document.getElementById("spielerinput4");

    player1Button.addEventListener("click", player1Input);
    player2Button.addEventListener("click", player2Input);
    player3Button.addEventListener("click", player3Input);
    player4Button.addEventListener("click", player4Input);

    let specialButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("special");
    let abcButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ABC");
    let numberButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("123");

    let specialinput: HTMLInputElement = <HTMLInputElement>document.getElementById("specialinput");
    let abcinput: HTMLInputElement = <HTMLInputElement>document.getElementById("ABCinput");
    let numberinput: HTMLInputElement = <HTMLInputElement>document.getElementById("numberinput");

    specialButton.addEventListener("click", specialInput);
    abcButton.addEventListener("click", abcInput);
    numberButton.addEventListener("click", numberInput);

    function specialInput(): void {
        specialinput.setAttribute("class", "open2");
        abcinput.setAttribute("class", "hidden2");
        numberinput.setAttribute("class", "hidden2");
    }

    function abcInput(): void {
        abcinput.setAttribute("class", "open2");
        specialinput.setAttribute("class", "hidden2");
        numberinput.setAttribute("class", "hidden2");
    }

    function numberInput(): void {
        numberinput.setAttribute("class", "open2");
        abcinput.setAttribute("class", "hidden2");
        specialinput.setAttribute("class", "hidden2");
    }

    let startGame: HTMLButtonElement = <HTMLInputElement>document.getElementById("startgame");

    startGame.addEventListener("click", gameStart);

    function gameStart(): void {

        let inputvalue1: string = player1input.value;
        let inputvalue2: string = player2input.value;
        let inputvalue3: string = player3input.value;
        let inputvalue4: string = player4input.value;

        let player1: HTMLElement = document.getElementById("player1");
        let player2: HTMLElement = document.getElementById("player2");
        let player3: HTMLElement = document.getElementById("player3");
        let player4: HTMLElement = document.getElementById("player4");

        player1.innerText = inputvalue1;
        player2.innerText = inputvalue2;
        player3.innerText = inputvalue3;
        player4.innerText = inputvalue4;

        console.log(inputvalue3);
        
        cardNamevalue1 = specialinput.value;
        cardNamevalue2 = abcinput.value;
        cardNamevalue3 = numberinput.value;

        let specialCardPair: number = Number.parseInt(cardNamevalue1);
        let abcCardPair: number = Number.parseInt(cardNamevalue2);
        let numberCardPair: number = Number.parseInt(cardNamevalue3);

        if (abcCardPair == 0 && numberCardPair == 0) {
            cardPair = specialCardPair;
            createCards = arraySpecialcharacters.name;

        }
        else if (specialCardPair == 0 && numberCardPair == 0) {
            cardPair = abcCardPair;
            createCards = ABC.name;

        }
        else if (specialCardPair == 0 && abcCardPair == 0) {
            cardPair = numberCardPair;
            createCards = arrayNumbers.name;
        }
        
        
        
        numberCards = cardPair * 2;
        removeCard = createCards.length - cardPair;
        console.log(numberCards);

        createCards.splice(numberCards, removeCard);

        for (let i: number = 0; i < numberCards; i++) {
            createCard();
        }

        let hideFieldset1: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByTagName("fieldset")[0];
        let hideFieldset2: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByTagName("fieldset")[1];
        let showHeader: HTMLElement = <HTMLElement>document.getElementsByTagName("header")[0];
        
        showHeader.setAttribute("class", "open2");
        hideFieldset1.setAttribute("class", "hidden3");
        hideFieldset2.setAttribute("class", "hidden3");
        specialinput.setAttribute("class", "hidden2");
        abcinput.setAttribute("class", "hidden2");
        startGame.setAttribute("class", "hidden3");
        player1input.setAttribute("class", "hidden2");
        player2input.setAttribute("class", "hidden2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
        numberinput.setAttribute("class", "hidden2");

    }

    let counter: number = 0;

    function player1Input(): void {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "hidden2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
    }

    function player2Input(): void {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "hidden2");
        player4input.setAttribute("class", "hidden2");
    }

    function player3Input(): void {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "open2");
        player4input.setAttribute("class", "hidden2");
    }

    function player4Input(): void {
        player1input.setAttribute("class", "open2");
        player2input.setAttribute("class", "open2");
        player3input.setAttribute("class", "open2");
        player4input.setAttribute("class", "open2");

    }


    function createCard(): void {
        let random: string = createCards[Math.floor(Math.random() * createCards.length)];
        let position: number = createCards.indexOf(random);

        let div: HTMLDivElement = document.createElement("div");

        div.setAttribute("class", "hidden");
        div.innerText = random;
        div.addEventListener("click", cardClicked);
        document.getElementById("game").appendChild(div);
        createCards.splice(position, 1);
    }

    function cardClicked(event: Event): void {
        let clicked: HTMLElement = <HTMLElement>event.target;

        if (counter < 2) {
            counter++;
            if (counter == 1) {
                clicked.setAttribute("class", "open");

            }
            else {
                if (clicked.classList.contains("open") || clicked.classList.contains("taken")) {
                    counter = 1;
                }
                else {
                    clicked.setAttribute("class", "open");
                    setTimeout(compareCards, 2000);
                }
            }
        }
    }

    function compareCards(): void {
        let firstGuess: any = document.getElementsByClassName("open")[0];
        let secondGuess: any = document.getElementsByClassName("open")[1];

        console.log(firstGuess);
        console.log(secondGuess);

        if (firstGuess.innerHTML == secondGuess.innerHTML) {

            firstGuess.setAttribute("class", "taken");
            secondGuess.setAttribute("class", "taken");

            counter = 0;
        }

        else {
            firstGuess.setAttribute("class", "hidden");
            secondGuess.setAttribute("class", "hidden");
            counter = 0;
        }

        fin();
    }

    function fin(): void {
        let hiddencards: any = document.getElementsByClassName("hidden");
        if (hiddencards.length == 0) {
            alert("Gut gemacht! Du hast das Spiel beendet.");
        }
    }
}
















