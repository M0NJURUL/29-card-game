const suits = ['C', 'D', 'H', 'S'];

const rank = {
  J: 8,
  9: 7,
  A: 6,
  X: 5,
  K: 4,
  Q: 3,
  8: 2,
  7: 1,
};

const values = {
  J: 3,
  9: 2,
  A: 1,
  X: 1,
  K: 0,
  Q: 0,
  8: 0,
  7: 0,
};

const evaluateRound = (
  cards = { a: 'D9', b: 'HJ', c: 'DJ', d: 'D8' },
  suit = 'D',
  trump = 'D'
) => {
  let winner = '';
  for (let id in cards) {
    if (
      // condition checks for all kinds of same suit
      !winner ||
      (cards[id][0] === cards[winner][0] &&
        rank[cards[id][1]] > rank[cards[winner][1]]) ||
      // condition checks for cards including trumps
      rank[cards[id][1]] > rank[cards[winner][1]] ||
      (cards[id][0] === trump && cards[id][0] !== cards[winner][0])
    ) {
      winner = id;
    }
    console.log(cards[id], cards[winner]);
  }
  return winner;
};

console.log(evaluateRound());
// export default evaluateRound;
