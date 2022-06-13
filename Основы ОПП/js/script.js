"use strict";

//!ООП - Прототипно-ориентированное наследование

const soldier = {
        health: 400,
        armor: 100,
        sayHello: function () {
                console.log('hello');
        }
};

//todo Создает протатипную связь
const john = Object.create(soldier);


// const john = {
//         health: 100
// };

//todo Устанавливает прототип указанного объекта 
Object.setPrototypeOf(john, soldier);



john.sayHello();