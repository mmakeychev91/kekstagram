//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

function randomInteger(min, max) {
  // случайное число от (min+1) до (max+1)
  if (min < 0) {
    min = 0;
  }
  if (max <= min) {
    const diff = min - max;
    max = max + diff + 1;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomInteger();

//Функция для проверки максимальной длины строки.

function checkStringLength(checkedString, maxLength) {
  if (checkedString.length < maxLength) {
    return true;
  } else {
    return false;
  }

}

checkStringLength('hi',3);

const SIMILAR_PHOTO_DESCRIPTION = 25;
const description = [
  'Мы с Антохой',
  'С любимой',
  'Мы с Васей',
  'Мы с Пашей',
  'с Лизой',
  'Выпускной',
  'Моя днюха',
  'Чилим',
  'С коллегами',
  'В любимом городе',
  'Смотрите с кем я',
  'Моя рота',
  'В нашем Храме',
  'С Томми',
  'В Казани',
  'В Москве',
  'Тусовка',
  'Рассвет',
  'Закат',
  'На концерте',
  'С Лехой',
  'С Викой',
  'С пацанами',
  'Наш двор',
  'В кафе',

];

const createPhotoDescription = () => {
  return {
    //id - переделать. id не долждны повторяться
    id: randomInteger(1,25),
    url: 'photos/' + randomInteger(1,25),
    description: description[randomInteger(0,description.length -  1)],
    likes: randomInteger(15,200),

  };
};

const similarPhotoDescription = new Array(SIMILAR_PHOTO_DESCRIPTION).fill(null).map(() => createPhotoDescription());

console.log(similarPhotoDescription);

//random id https://gist.github.com/gordonbrander/2230317
