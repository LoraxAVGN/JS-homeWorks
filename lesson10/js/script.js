// работа с DOM

// window: DOM, BOM, JS

// BOM (brouser): navigator, location (адресная строка), screen (информация о размере экрана и разрешение), history (сохранение состояний), frames (коллекция со всеми окнами на текущей странице)

// DOM (document)
// document.body - ссылаемся на тело
// document.head ...

//console.log(document.body);

// const div = document.querySelector('div'); // обращение по селектору и выводит только самый первый элемент
// console.log(div);
// console.dir(div);

// const h1=document.querySelectorAll('h1'); // обращение по селектору ко всем (получается не массив)
// console.log(h1); // список
// console.log(Array.from(h1)); // преобразуем список h1 в массив
// console.log([...h1]) // ещё один способ преобразования в массив

// const h1 = document.getElementsByTagName('h1'); // HTMLCollection
// console.log(h1);
// console.dir(h1);

// const div = document.querySelector('div');
// console.log(div.nextSibling) // выводит элемент после div - бесполезно
// console.log(div.nextElementSibling) // выводит тег за данным тегом
// console.log(div.previousSibling) // аналогично предыдущий
// console.log(div.previousElementSibling) // аналогично предыдущий
// console.log(div.parentElement) // выводит родительский тег
// console.log(div.parentNode) // также выводит родителя
// console.log(div.children) // выводит дочерние теги
// console.log(div.childNodes) // выводит дочерние теги и текст
// console.log(div.firstChild) // выводит первого ребенка ("Нажмите сюда ")
// console.log(div.lastChild) // выводит последнего ребенка <a..>..</a>
// console.log(div.firstElementChild) // аналогично с тегами
// console.log(div.lastElementChild) // аналогично с тегами

// const tagDiv = document.getElementsByTagName('*');
// console.log(tagDiv);

// let firstElement = document.body.firstElementChild;
// console.log(firstElement);
// let paragraphs = firstElement.getElementsByTagName('p');
// console.log(paragraphs);

// console.log(document.getElementsByClassName('test'));
// console.log(document.querySelectorAll('a.link'));
// console.log(document.links); // все ссылки
// console.log(document.forms); // все формы

// console.log(document.getElementById('h1'));

// const tagDiv = document.getElementsByTagName('div');
// console.log(tagDiv);
// for(let i=0,max=tagDiv.length;i<max;i++){
//     if(tagDiv[i].matches('.test')){ // проверка на соответствие селектора
//         console.log(tagDiv[i]);
//     }
// }

// console.log(document.querySelector('.mark'));
// console.log(document.querySelector('.mark').closest('div.test'));

// let div = document.body.firstElementChild;
// let div2=Array.from(div.children);
// for(let i=1;i<div2.length-1;i++){
//     console.log(div2[i]);
// }

// let div = document.body.firstElementChild;
// const filteredArticle=[...div.children].filter(p=>p!==div.firstElementChild && p!==div.lastElementChild);
// console.log(filteredArticle);
// div.classList.add('custom','article'); // добавляем классы в элемент
// console.log(div.classList);
// div.classList.remove('article'); // удаление класса
// console.log(div.classList);
// console.log(div.classList.contains('custom')); // проверка класса
// // ...
// div.classList.toggle('toggle');
// console.log(div.classList.contains('toggle')); // убирает если класс есть или добавляет если класса нет
// div.classList.toggle('toggle');
// console.log(div.classList.contains('toggle'));
// // ...
// console.log(div.className);
// // div.setAttribute('id','myId') // добавление атрибута
// div.id='myld1'; // добавление id
// console.log(div.getAttribute('id')); // возврат значения атрибута
// console.log(div.hasAttribute('id')); // проверка наличия атрибута
// div.removeAttribute('id'); // удаление атрибута
// //...
// div.dataset.myattr; // добавление data-атрибута
// div.dataset.myattr='test'; // добавление значения data-атрибута

// console.log(link.href) // получение ссылки