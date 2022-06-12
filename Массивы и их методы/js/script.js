'use strict';



const arr = [2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//? forEach - перебор элементов,имеет колбэки

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//? for.. of.. - перебрать элементы, только для массивов. Можно использовать break and continue

for (let value of arr) {
    console.log(value);
}

//! Разновидность объектов с элементами по порядку

// Let arr=['1',{},[],25]
// arr[0]=='1'
// arr[2]==[]

//! Методы массивов:

// arr.push('a')-добавляет элемент в конец массива
// arr.pop()-удаляет последний элемент из массива
// и возвращает его
// arr.shift()-удаляет из массива первый элемент
// и возвращает его
// arr.unshift('a')-добавляет элемент в начало массива
// arr.split(s)-превращает строку в массив,s-разделитель
// arr.join(s)-превращает массив в строку,s-разделитель
// delete arr[1]-удаляет второй элемент
// arr.splice(index,count,elem1 ...)-удалить count элементов,
// начиная с index и заменить на элементы elem1 ...
// arr.slice(begin,end)-копирует часть массив с begin
// до еnd не включая
// arr.sort(fn)-сортировка массива.Если не передать
// функцию сравнения-сортирует элементы как строки.
// arr.reverse()-меняет порядок элементов на обратный.
// arr.concat(item1 ...)-создаёт новый массив,вкоторый
// копируются элементы из агr,атакже itеm1 ...


//! Методы перебора и трансформации

// arr.forEach - только перебор

// arr.map
// arr.every/some
// arr.filter
// arr.reduce