namespace Aufgabe3 {

    window.addEventListener("load", init);

    function init(_event: Event): void {


        let getPlayerNumber: string;
        let getCardPair: string;
        let playerNumber: number;
        let cardPair: number;
        let numberCards: number;
        let createCards: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"];
        let removeCard: number; // bestimme die Zahl die beim splice entfernt werden soll

        let counter: number = 0;

        do { 
            getPlayerNumber = prompt("Bitte geben Sie hier die Spieleranzahl an (1-4 Spieler)", "");
            playerNumber = Number.parseInt(getPlayerNumber);
        }
        while (playerNumber < 1 || playerNumber > 4 || isNaN(playerNumber));

        do {
            getCardPair = prompt("Bitte geben Sie hier die Kartenpaare an (5-10 Paare)", "");
            cardPair = Number.parseInt(getCardPair);
        }
        
        while (cardPair < 5 || cardPair > 10 || isNaN(cardPair));

        numberCards = cardPair * 2;
        removeCard = createCards.length - cardPair;
        console.log(numberCards);
        createCards.splice(numberCards, removeCard); //nimm die unnötigen Buchstaben aus dem array

        //Anzahl der Karten im Game Div

        for (let i: number = 0; i < numberCards; i++) {
            createCard();
        }

        //Anzahl der Spieler im Players  

        for (let i: number = 0; i < playerNumber; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            let n: number = i + 1;
            let text: string = "Spieler" + " " + n + ":";
            p.innerText = text;
            document.getElementById("players").appendChild(p);
        }
        function createCard(): void {
            let random: string = createCards[Math.floor(Math.random() * createCards.length)]; //greife eine random Buchstabe aus dem array
            let position: number = createCards.indexOf(random); //finde die Position des Buchstabens herraus

            //            let randomNumber: number = Math.random();
            let div: HTMLDivElement = document.createElement("div");

            //            if (randomNumber < 0.6) { //hidden
            div.setAttribute("class", "hidden");
            //            }
            //            else if (randomNumber < 0.8) { //open
            //                div.setAttribute("class", "open");
            //                div.innerText = random;
            //            }
            //            else { //taken
            //                div.setAttribute("class", "taken");
            //            }
            div.addEventListener("click", cardClicked);



            document.getElementById("game").appendChild(div);
            createCards.splice(position, 1);
            //
            //            function reset() {
            //                div.classList.remove("selected");
            //                div.innerText = "";
            //                div.classList.remove("open")
            //
            //            }
            //            function match() {
            //                div.classList.remove("selected");
            //                div.innerText = "";
            //                div.classList.add("taken");
            //            }
            function cardClicked(event: Event) {
                let clicked: HTMLElement = <HTMLElement>event.target;

                //                ein anderer Versuch (muss man nicht beachten) 
                //                if (div.classList.contains("selected") || div.classList.contains("match")) {
                //                  return;
                //                }

                if (counter < 2) {
                    counter++;
                    if (counter == 1) {
                        div.setAttribute("class", "open");
                        div.innerText = random;

                    }
                    else {
                        div.setAttribute("class", "open");
                        div.innerText = random;


                        setTimeout(compareCards, 2000);

                        function compareCards() {
                            let firstGuess = document.getElementsByClassName("open")[0];
                            let secondGuess = document.getElementsByClassName("open")[1];

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
                    }
                }
                //       Wieder ein Versuch den man nicht beachten muss
                //
                //                        if (firstGuess && secondGuess) {
                //
                //                        if (compareCards) {
                //                            window.setTimeout(match, 3000);
                //                        }
                //
                //                        else {
                //                            window.setTimeout(reset, 3000);
                //                        }
                //}

                function fin() {
                    let hiddencards = document.getElementsByClassName("hidden");
                    if (hiddencards.length == 0) {
                        alert("Gut gemacht! Du hast das Spiel beendet");
                    }
                }


            }

        }


    }


}

















