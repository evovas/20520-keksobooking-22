const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomFloat = function (min, max, countDecimal) {
  min = Math.ceil(min) * 10 ** countDecimal;
  max = Math.floor(max)  * 10 ** countDecimal + 1;
  return (Math.floor(Math.random() * (max - min)) + min) / 10 ** countDecimal;
}

const getStringNumber = function (number, lengthOfNumber = 1) {
  const countNumber = number.toString().length;
  const differenceOfCount = lengthOfNumber - countNumber;
  let stringNumber = '';

  if (differenceOfCount > 0) {
    for (let i = 1; i <= differenceOfCount; i++) {
      stringNumber += '0';
    }
  }

  return stringNumber + number.toString();
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getRandomArrayElements = function (elements, countElements) {
  let copyOfElements = [...elements];
  let randomElements = [];

  for (let i = 1; i <= countElements; i++) {
    randomElements.push(copyOfElements.splice(getRandomInt(0, copyOfElements.length - 1), 1)[0]);
  }

  return randomElements;
}

const TYPES_OF_REALTY = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES_CHECK_IN_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_OF_REALTY = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_OF_REALTY = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createAdvertisement = function () {
  return  {
    author: {
      avatar: 'img/avatars/user' + getStringNumber(getRandomInt(1, 8), 2) + '.png',
    },
    offer: {
      title: 'Предложение об аренде жилья',
      address: null,
      price: getRandomInt(3000, 10000),
      type: getRandomArrayElement(TYPES_OF_REALTY),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(TIMES_CHECK_IN_OUT),
      checkout: getRandomArrayElement(TIMES_CHECK_IN_OUT),
      features: getRandomArrayElements(FEATURES_OF_REALTY, getRandomInt(0, FEATURES_OF_REALTY.length)),
      photos: getRandomArrayElements(PHOTOS_OF_REALTY, getRandomInt(0, PHOTOS_OF_REALTY.length)),
    },
    location: {
      x: null,
      y: null,
    },
    getRandomLocation: function () {
      const x = getRandomFloat(3565, 3570, 3) / 100;
      const y = getRandomFloat(13970, 13980, 3) / 100;
      this.offer.address = x + ', ' + y;
      this.location.x = x;
      this.location.y = y;
    },
  }
}

const SIMILAR_ADVERTISEMENT_COUNT = 10;

const similarAdvertisements = new Array(SIMILAR_ADVERTISEMENT_COUNT).fill(null).map(() => createAdvertisement());
similarAdvertisements.forEach((similarAdvertisement) => similarAdvertisement.getRandomLocation());
