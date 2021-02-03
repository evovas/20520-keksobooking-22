function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFloat(min, max, countDecimal) {
  min = Math.ceil(min) * 10 ** countDecimal;
  max = Math.floor(max)  * 10 ** countDecimal + 1;
  return (Math.floor(Math.random() * (max - min)) + min) / 10 ** countDecimal;
}

getRandomInt(1, 3);
getRandomFloat(1,3,4);
