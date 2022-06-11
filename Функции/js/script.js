"use strict";

// Однострочная стрелочная функция

const calc = (a, b) => a + b;

// Многострочная стрелочная функция

let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));