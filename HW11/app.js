// Массив объектов начальных заметок
const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit.',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

// Присваивание тэгов константам
const addButton = document.querySelector("#addBtn");
const textTitle = document.querySelector("#title");
const mainText = document.querySelector("#body");
const notesContainer = document.querySelector("#notesContainer");
let idList = [];

// Добавление слушателя на кнопку 'добавить'
addButton.addEventListener('click', (e) => addFun(e, textTitle.value, mainText.value));

// Ф-ия добавления заметки / заметок
function addNotes() {
  tasks.forEach(item => {
    // Проверка на совпадение по id
    if(!idList.includes(item._id)){                 

      // Формирование блока 
      let liBlock = document.createElement('li');
      liBlock.classList.add('list-group-item','d-flex', 'align-items-center','flex-wrap','mt-2');
      liBlock.id = item._id;
    
      notesContainer.append(liBlock);
    
      let spanElem = document.createElement('span');
      spanElem.innerHTML = item.title;
    
      let buttonElem = document.createElement('button');
      buttonElem.innerHTML = 'Удалить';
      buttonElem.classList.add('btn','btn-danger','ml-auto','delete-btn', 'delBtn');
      let delBtnId = item._id + '1';  // + '1' для различия id с блоком li
      buttonElem.id = delBtnId;
    
      let pElem = document.createElement('p');
      pElem.classList.add('mt-2', 'w-100');
      pElem.innerHTML = item.body;
    
      liBlock.append(spanElem, buttonElem, pElem);
      idList.push(item._id);

      // Добавление слушателя на кнопку 'удалить'
      const delButton = document.getElementById(delBtnId);
      console.log(delButton);
      delButton.addEventListener('click', (e) => delFun(e, liBlock));
    }
  });
}

// Функция кнопки 'добавить'
function addFun(e, textTitleValue, mainTextValue){
  e.preventDefault();                 // убирает перезагрузку страницы при выполнении ф-ии
  let itemTask = {
    _id: Math.random().toString(),    // создает объект новой заметки
    completed: true,
    body: mainTextValue,
    title: textTitleValue,
  };
  tasks.push(itemTask);
  textTitle.value = '';               // обнуление полей ввода
  mainText.value = '';
  addNotes();                         // вызов ф-ии добавления заметки
}

// Функция кнопки 'удалить'
function delFun(e, liBlock){
  e.preventDefault();                  // убирает перезагрузку страницы при выполнении ф-ии
  liBlock.remove();
  console.log(e);
}

addNotes();                           // первый вызов ф-ии добавления заметок