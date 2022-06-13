"use strict";

//!  Передача по ссылке или по значению, Spread оператор (ES6-ES9). Создание копии

//? Поверхностная копия обьектов. Копируются свойста только на первом уровне.

//! 1 способ

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

//! 2 способ - Object.assign

const add = {
        d: 17,
        e: 20
};

const clone = (Object.assign({}, add));

clone.d = 20;

// console.log(add);
// console.log(clone);

//! 3 способ - для массивов. .slice()

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice();

newArray[1] = 'etw'
console.log(newArray);
console.log(oldArray);

//! 4 способ -  оператор разворода

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'lifejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);
      
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

// массивы
const array = ['a', 'b']; 

const newAray = [...array];

// объекты

const ret = {
  one: 1,
  two: 2
};

const newObj = { ...ret };