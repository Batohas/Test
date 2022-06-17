const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.Target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//! назначение для нескольких кнопок(через перебор) и отмена  через опцию addEventListener {once: true}

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

//! отменить события браузера

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});
