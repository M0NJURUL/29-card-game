const randomizeCards = (array) => {
  let curIndex = array.length,
    randIndex;
  while (curIndex > 0) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex--;
    [array[curIndex], array[randIndex]] = [array[randIndex], array[curIndex]];
  }
  return array;
};

const array = ['HK', 'HQ', 'HJ', 'HX', 'H9', 'H8', 'H7', 'HA'];
console.log(array);
console.log(randomizeCards(array));
console.log(randomizeCards(array));
console.log(randomizeCards(array));
console.log(randomizeCards(array));
console.log(randomizeCards(array));
