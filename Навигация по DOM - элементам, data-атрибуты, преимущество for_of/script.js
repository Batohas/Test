// console.log(document.head);

// корень узла
// console.log(document.documentElement);
// дети узла
// console.log(document.body.childNodes);

// определить родителей элементов
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// определить соседей элементов
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { 
    continue;
}
    console.log(node);
}