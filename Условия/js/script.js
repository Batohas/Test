"use strict";



if (4 == 4) {
        console.log('ok');
} else {
        console.log('Error');
}

// ЕСЛИ 4 равно 4, ТО выводиться ок, если НЕТ, ТО тогда Error

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num < 100) {
//     console.log('Too much');
// } else {
//     console.log('ok');
// }
// Если true, то тогда ..., если false, то тогда ...


// тернарный оператор
// (num === 50) ? console.log('ok'): console.log('Error');

// Конструкция свитч(всегда идет проверка на строгое сравнение)
const num = 50;

switch (num) {
    case 49:
    console.log('false');
    break;
    case 100:
    console.log('false');
    break;
    case 50:
    console.log('true');
    break;
    default:
    console.log('Da');
    break;
}
