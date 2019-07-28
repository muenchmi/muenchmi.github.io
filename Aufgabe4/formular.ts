namespace Aufgabe4 {

    export interface Deck {
        name: string[];
        font: string;
        color: string;
    }

    export let ABC: Deck;
    ABC = {
        name: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"],
        font: "",
        color: ""
    };

    export let arrayNumbers: Deck;
    arrayNumbers = {
        name: ["1", "1", " 2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
        font: "",
        color: ""
    };

    export let arraySpecialcharacters: Deck;
    arraySpecialcharacters = {
        name: [".", ".", ",", ",", ";", ";", ":", ":", "-", "-", "?", "?", "!", "!", "*", "*", "+", "+"],
        font: "",
        color: ""
    };





}
