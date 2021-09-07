// function sayHello(){
//     console.log('Hello!');
// }
// sayHello();

// foo();
// function foo(){
//     console.log('foo');
// }

// foo();//mistake!
// let foo = function(){
//     console.log('Oooh eeee!');
// }

// function sayHello(){
//     console.log('Hello!');
//     return 2;
// }
// let result = sayHello();
// console.log(result);

// function foo(){
//     let a=prompt('Введите число');
//     return a*2;
// }
// let result = foo();
// console.log(result);

// function greeting(name){
//     console.log(`Привет, ${name}`);
// }
// greeting('Kostya');

// function greeting(name, lastName){
//     console.log(`Привет, ${name} ${lastName}`);
// }
// greeting('Kostya', 'Krot');

// function greeting(name, lastName){
//     console.log(`Привет, ${name} ${lastName}`);
// }
// greeting();//Привет, undefined undefined

// function greeting(name){
//         if (!name)return console.error('Error');
//         console.log(`Привет, ${name}`);
// }
// greeting();//убираем undefined, выводим ошибку

// function greeting(name='Имя', lastName='Фамилия'){
//     console.log(`Привет, ${name} ${lastName}`);
// }
// greeting();

// function greeting(name='Имя', lastName='Фамилия', year=2021){
//     if(typeof(year) != 'number' || isNaN(year))return console.error('Год введен неверно!')
//     console.log(`Привет, ${name} ${lastName}! Дата регистрации: ${year}`);
// }
// greeting('Kostya', 'Krot', );

// function foo(){
//     return arguments;
// }
// console.log(foo(1,2,3));
// св-во argument содержит все значения аргументов вызванной ф-ии

// function foo(){
//     for (let i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
// foo(1,2,3);

// (function(/*argument*/){ //...
// })(/*argument*/); //самовыз ф-ия, не имеет имени

// function multiply(){
//     if(!arguments.length) return console.error('Error');
//     let mul=1;
//     for(let i=0;i<arguments.length;i++){
//         if(typeof(arguments[i])!='number'||isNaN(arguments[i])) return console.error('Error2');
//         mul*=arguments[i];
//     }
//     console.log(mul);
// }
// multiply(1,2,3);

/*
function game(num1, num2){
    if(num1<0 || num1>10) return console.log('Неправильно введеное число!');
    if(num1==num2)return console.log('Вы угадали число!');
    else return console.log('Попробуйте ещё!');
}

let rand = Math.round(Math.random()*10);
for(let i=0;i<3;i++){
let num1 = prompt('введите число')
let num2 = rand;
game(num1, num2);
if(i==2)console.log(`Правильноен число: ${num2}`);
}
*/

// let myArr = [2,32,541,2333];
// let value = myArr.length;
// //myArr.length=0; // быстрое обнуление массива
// value=Array.isArray(myArr);
// value=myArr.indexOf() // вывод позицию эл-та в массиве
// myArr.push(99); // добавляет вконец
// myArr.unshift(100); // добавляет вначало
// value = myArr.pop();// удаляем последний элемент и записывает его в переменную
// value = myArr.shift();// удаляем нулевой элемент и записывает его в переменную
// // delete myArr[1]; // плохое удаление эл-та

// // slice(), splice(), split()
// // let newArr=myArr.slice(0,2); // создается массив как часть предыдущего [num1,num2), служит для создания копий
// // let newArr=myArr.splice(1,2); // создается массив как часть предыдущего c числа num1 и сколько num2, а также удаляет эти эл-ты с пред массива. Сложная ф-ия, ну её нафиг!
// let myString = '1,2,3,Hello,4,12,true';
// let newArr=myString.split(',');//преобразует строку в массив строк
// myArr.reverse();
// myArr = myArr.concat(9,-99);
// value=myArr.join(' '); // преобраз массив в строку
// console.log(value);
// console.log(myArr) 
// console.log(newArr);

/*
ДЗ
1. созд ф-ию котор приним число n и возвр МАССИВ заполн числами от 1 до n

2. ф-ия котор прин массив, а возвр массив с дублированными данными [1,2,3]=>[1,2,3,1,2,3]

3. в ф-ию перед произв кол-во массивов, а на выходе образуются те же массивы только без нулевого эл-та

4.в ф-ию перед массив пользователей поле которых нужно проверить и значения полей func(users,'age',33).
users=[{'_id': '...', 'balance':51515, 'picture':'http//...', 'age':33, 'name':'kostya krot', 'gender':'male'},{...},...],
выводятся массив пользователеё у которых в какомто св-ве есть правильное значение. Если нету такого пользователя то выводится ошибка Error. Также стоит проверить, что вводится массив.
*/