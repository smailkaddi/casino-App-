const {freeze,drop,take,shuffle} = require('ez-read');
const initializeDeck = require ('./deck-init');
class Deck
{
   suits = freeze(require('./suits-init'));
   ranks = freeze(['2','3','4','5','6','7','8','9','10','J','Q','K','A']);
   deck = shuffle(initializeDeck(this.suits, this.ranks));
   show()
   {
       console.log(this.deck);
   }
    shuffleDeck()
    {
        this.Deck = shiffle(this.deck);
    }

    discard(num)
    {
        this.deck = drop(num, this.deck);
    }
    deal (num)
    {
        const hand = take(num, this.deck);
        this.deck = drop(num, this.deck);
        return hand;
    }
}
const deck = new Deck();
deck.show()

// deck.discard(47)

const myHand=  deck.deal(5);
console.log(myHand)
deck.show()