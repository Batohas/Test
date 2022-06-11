"use strict";


// length - метод для получения длины строки и др данных
const str = "test";
console.log(str.length);

// методы для верхнего и нижнего регистра
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// метод для поиска нужного значения (поиск под строки)
const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

// slice метод возврата нужного значения из строки (от, до)
console.log(logg.slice(6, 11));

// substring то же самое, только не поддерживает отрицательное значение
console.log(logg.substring(6, 11));

// slice метод указывает сколько символов надо вырезать (от, кол-во символов вырезать)
console.log(logg.substr(6, 5));


// Методы чисел  Math.

// round - округление числа к ближайшему целому
const num = 12.2;
console.log(Math.round(num));

// parseInt - превращает строку в число и округляет к целому числу
const test = "12.2px";
console.log(parseInt(test));
// parseFloat - превращает строку в число и не округляет, возвращая исходное число
console.log(parseFloat(test));