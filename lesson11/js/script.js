// let p1 = document.querySelector('p');
// console.log(p1.nodeType); // если 1 - эл-т, если 3 - текст, усли 8 - комментарий
// console.log(p1.tagName); // readonly
// console.log(p1.nodeName); // readonly

// console.log(p1.firstChild.tagName);
// console.log(p1.firstChild.nodeName);


// p1.innerHTML = 'новый текст'; //вставляет новое содержимое
// console.log(p1.innerHTML);

// let title = document.querySelector('h1');
// console.log(title.innerHTML);

// title.textContent = '<span>Новый текст</span>';
// console.log(title);
// title.innerHTML = '<span>Новый текст</span>';
// console.log(title.querySelector('span'))

// title.innerHTML = '<span>Новый текст2</span>';
// let span = title.querySelector('span');
// span.innerHTML = '12345';
// console.log(span)

// let title = document.querySelector('h1');
// console.log(title);
// title.outerHTML='<h3>Заголовок 3</h3>'; // заменяет тег на текст
// console.log(title.outerHTML) // <h1 id="h1">Заголовок 1</h1>

// let div = document.createElement('div'); // создаем эл-т
// let text = document.createTextNode('text'); // создаем текст
// div.className = 'new-block';
// div.innerHTML='новый текст';
// document.body.appendChild(div);

let div = document.getElementById('idParent');
// let par = document.createElement('p');
// par.innerHTML = '!';
// div.appendChild(par); // добавляет эл-т в родителя

let par1 = document.createElement('p');
let par2 = document.createElement('p');
let par3 = document.createElement('p');
par1.innerHTML = 'a';
par2.innerHTML = 'b';
par3.innerHTML = 'c';
div.append(par1, par2, par3); // добавляет в конец
// div.prepend(par1, par2, par3); // добавляет в начало

// задание
// let table = document.createElement('table');
// let body = document.body;
// body.append(table);
// let num=0;
// for(let i=1;i<=3;i++){
//     let tr = document.createElement('tr');
//     table.append(tr);
//     for(let j=1;j<=3;j++)
//     {
//         let td = document.createElement('td');
//         td.innerHTML = ++num;
//         tr.append(td)
//     }
// }

// insertBefore - добавляет в начало
// let divNew = document.createElement('div');
// document.body.insertBefore(divNew, document.body.firstChild); // вставляем новый эл-т перед каким-то эл-ом

// let elem = document.querySelector('.elem');
// console.log(elem) 
// let clone = elem.cloneNode(true); // копия эл-та
// console.log(clone);
// // elem.remove(); // удаляет эл-т
// // elem.parentElement.removeChild(elem); // также удаляет эл-т
// let newChild = document.querySelector('p');
// elem.parentElement.replaceChild(newChild, elem);

// element.insertAdjacentHTML(pos, htmlEl);

    //            <-- element.insertAdjacentHTML('beforebegin', htmlEl);
    // <p>
    //            <-- element.insertAdjacentHTML('afterbegin', htmlEl);
    //     текст
    //            <-- element.insertAdjacentHTML('beforeend', htmlEl);
    // </p>
    //            <-- element.insertAdjacentHTML('afterend', htmlEl);

// let firstEl = document.querySelector('.elem');
// firstEl.insertAdjacentHTML('afterbegin', '<span>afterbegin</span>');
// firstEl.insertAdjacentText('beforeend', 'beforeend');

// let fragment = document.createDocumentFragment();
// let div = document.createElement('div');
// fragment.appendChild(div); // добавляет все в фрагмент
// document.body.appendChild(fragment);

// События
// <element onclick='yourFunc()'>...</element>
// btn.onclick = function(){...};
// btn.addEventListener('click', function(e){console.log(e)});
// <a href='#'>...</a>

// let link = document.querySelector('a');
// console.log(link);
// link.addEventListener('click', function(e){console.log(e.preventDefault())})
// e.preventDefault() - отменяет переход по ссылке
// link.addEventListener('click', clickHendler);
// function clickHendler(e){console.log(Date())};

// let parent = document.querySelector('#idParent');
// let btn = document.querySelector('button');
// btn.addEventListener('click', e => {
//     let div=document.createElement('div');
//     div.textContent = Math.random();
//     let newBtn = document.createElement('button');
//     newBtn.textContent = 'button';
//     div.appendChild(newBtn);
//     parent.append(div);
// });

// parent.addEventListener('click', e => {
//     console.log(e.target);  // выводит тег по которому мы кликнули
// })

// parent.addEventListener('click', e => {
//     console.log(e.target);
//     if(e.target.tagName==='BUTTON'){
//         console.log('click')
//     }
// })

// e.stopPropagation() - запрещает какое-либо событие