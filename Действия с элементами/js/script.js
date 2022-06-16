"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

//? работа со всеми элементами
// for (let i = 0; i < hearts.length; i++ ) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

//? Создание новых элементов

const div = document.createElement("div");

div.classList.add("black");

wrapper.append(div);
// wrapper.prepend(div);

//! старый метод
// wrapper.appendChild(div);

// hearts[0].after(div);
// hearts[0].before(div);

//! старый метод
// wrapper.insertBefore(div, hearts[1]);
//? Удаление
// circles[0].remove();

//! старый метод
// wrapper.removeChild(hearts[0]);

//? Замена элемента

// hearts[0].replaceWith(circles[0]);

//! старый метод
// wrapper.replaceChild(circles[0], hearts[0]);


//? Добавление текста или хтмл кода

div.innerHTML = "<h1>Hello</h1>";

div.insertAdjacentHTML('beforeend', '<h1>privet</h1>');

// div.textContent = 'hello';