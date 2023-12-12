//Creating the class for the card object that will populate the Deck object.
class Card {

    constructor(value,name){
        this.value = value;
        this.name = name;
    }

    describe(){
      console.log(this.name);
    }

    getValue() {
        return this.value
    }

    getName () {
        return this.name
    }

    setValue(value) {
        this.value = value;
    }

    setName(name) {
        this.name = name;
    }
}

//Creating the class for the Deck object to be instantiated later.
class Deck {

    constructor() {
        this.cards = [];
        this.generateDeck();
    
    }

    generateDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        for (const suit of suits) {
            for (let i = 2; i <= 14; i++) {
                const name = this.getCardName(i, suit);
                const card = new Card(i, name);
                this.cards.push(card);
            }
        }
    }

    //Since there is not a built in shuffle method in JavaScript like there would be in Java, I had to use an algorithm in order to shuffle the deck in an effective way.
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const shf = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[shf]] = [this.cards[shf], this.cards[i]];
        }
    }

    draw() {
        return this.cards.length > 0 ? this.cards.shift() : null;
    }

    getCardName(x, y) {
        const faceCards = ["Jack", "Queen", "King", "Ace"];
        if (x >= 11 && x <= 14) {
            return `${faceCards[x - 11]} of ${y}`;
        } else return `${x} of ${y}`;
    }
}

//Creating the class for the player objects that will be instatiated later.
class Player {

    constructor(name) {
        this.hand = [];
        this.score = 0;
        this.name = name;
    }

    describe() {
        console.log(`${this.name}'s hand: `);
        for (const card of this.hand) {
            card.describe();
        }
    }

    flip() {
        if (this.hand.length > 0) {
            return this.hand.shift();
        } else return null;
    }

    draw(deck) {
        const card = deck.draw();
        if (card !== null) {
            this.hand.push(card);
        }
    }

    incrementScore() {
        this.score++;
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name;
    }
}

//The main driver of the program, the class where classes will be istantiated into objects and methods will be utlized
class App {
    static main() {
        const deck = new Deck();
        const p1 = new Player("Goku");
        const p2 = new Player("Vegeta");

        deck.shuffle();

        for (let i = 0; i < 52; i++) {
            p1.draw(deck);
            p2.draw(deck);
        }

        for (let i = 0; i < 26; i++) {
            const card1 = p1.flip();
            const card2 = p2.flip();

        console.log(`\n${p1.getName()} flipped ${card1.getName()}`);
        console.log(`${p2.getName()} flipped ${card2.getName()}`);

        if (card1.getValue() > card2.getValue()) {
            p1.incrementScore();
            console.log(`\nPoint goes to ${p1.getName()}!`);
        } else if (card1.getValue() < card2.getValue()) {
            p2.incrementScore();
            console.log(`\nPoint goes to ${p2.getName()}!`)
        } else {
            console.log("\nDraw! No Point!");
        }

        }

        console.log("\nScores");
        console.log(`${p1.getName()} Score: ${p1.getScore()}`)
        console.log(`${p2.getName()} Score: ${p2.getScore()}`)

        if (p1.getScore() > p2.getScore()) {
            console.log(`\n${p1.getName()} wins!`);
        } else if (p1.getScore() < p2.getScore()) {
            console.log(`\n${p2.getName()} wins!`)
        } else {
            console.log(`\nTie Game! Neither ${p1.getName()} or ${p2.getName()} win!`)
        }
    }

}

//Istantiating the App class to run the program.
App.main();