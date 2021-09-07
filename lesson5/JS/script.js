//Урок 5//

//    Функции    // Функции 1 уровня

// sayHello();

// function sayHello() {
//     console.log('Hello!');
//   32  return 2;
// }

// let _result = sayHello();//с передачей значения return
// console.log(_result) // из-за return: 2

// let a, b;
// foo1();

// function foo1() {
//     a = 2; b =a+2;
//     console.log(b);
// }

//foo1(); - Не будет раюотать при задании через let (выражение)
// let foo1 = function(){
//     a = 3; b = a+3; console.log(b);
// }
// foo1();

// let a;
// function foo() {
//     let a = prompt('Введите число: ');// let переопределит и сделает локальной только для функции, если переопределим за функцией то будщем глобальна
//     return a*2;    
// }
// let _result = foo();
// console.log(_result,a)

// function greeting(name = 'Имя', lastName = 'Фамилия', year) { 
//     //if (!name){console.error('Error!')}
//     if (typeof year !== 'number' || isNaN(year)) return console.error('Год введён неверно!')//проверка на число и строку (важно)
//     return `Hello, ${name} ${lastName}! Дата регистрации: ${year}.
//     `; 
// }
// let str = '';
// for(let i = 0;i<1;i++){
//     let name1 = prompt('Введите Имя: ');
//     let name2 = prompt('Введите Фамилию: ');
//     str += greeting('Петя','Иванов',20321);
// }
// console.log(str);

// function foo() {
//     return arguments;
// }

// foo();
// foo(1,2,3);
// foo({car:'Lexus', price:'64000'});

// console.log(foo(1,2,3))//свойство аргумент содержит спаисок всех элементов которые были вписаны в него

// (function (msg) {
//     console.log(msg);
//     function foo() {
//         for(let i = 0;i < arguments.length; i++){
//             console.log(arguments[i]);
//         }
//     }
//     foo(1,2,3,4);
// }) ('Привет!'); // без вторых скобок не будет реализовываться!

//       Самовызывающаяся функция        // - нее имеет имени. Для закрытия доступа для глобальных перменных (function() {...}) (); 

// function multy() {
//     if (arguments.length == 0) return console.error('Нет аргументов!');
//     let P = 1;
//     for(let i = 0; i<arguments.length; i++){
//         if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) continue;
//         P = P*arguments[i];
//     }
//     return console.log(P);
// }

// multy(4,'cea',43);

// let a = parseInt(Math.random()*10+1);
// let i = 0;
// function multy(int) {
//     if (a == int){
//         console.log('Вы угадали! Число '+a);return 1
//     }
//     else {
//         if (i<2){
//             alert('Не угадали!'); i++
//         }else{console.log('Не угадали! Число '+a)}}
// }

// for (let i = 0; i<3; i++){
//     let int = prompt();
//     let a = multy(int);
//     if (a == 1){break}
// } 

//         Работа с массивами       //

// let numArr = [1,32,164,5];
// let value = numArr.length;
// //numArr.length = 100;
// value = Array.isArray(numArr);//проверка на массив
// value = numArr.indexOf(32);
// numArr.push(100);// добавление в конец
// numArr.unshift(99);// добавление в начало
// value = numArr.pop();// удаление конца
// value = numArr.shift();// удаление начала
// //delete numArr[1]; = -не работает удаление( нужные меьоды ниже)
// //        slice();    splice();    split();       //
// let newArr1 = numArr.slice(0,-1);//-1 с конца, копирование;
// numArr.splice(2,0,-100,'dweq');// удаление с копированием;добавление с установленной позицией
// let stroka = '1,2,3 ,4,54353,2edcdf,scsm,fdsv,cdfsc,dsf,vsv';
// let strokaMas = stroka.split('');//получаем массив из символов если выстовим пустую строку '';
// //console.log(strokaMas);
// console.log(numArr)

// numArr.reverse();//реверс массива
// let mas =  numArr.concat(9,-90);
// value = numArr.join();// делает из массива строку

// console.log(numArr,mas,value);

/**   ДЗ
 *  1. Создать функцию принимающую число N и возвращает массив заполненную числами от 1 до N (не рандом с 1 до N);
 *  2. Функция которая принимет массив обозначает массив с дублированными данными от [1,2,3] до [1,2,3,1,2,3]
 *  3. В функцию передаётся произвольное колличество массивов(arguments), на выходе теже значения но без первого элемента;
 *  4. В функцию передаётся массив пользователей:
 * let users = [{'id': '...', 'balance': '3232342,32', 'picture':'http://test.com/32x32', 'name':'Иван', 'gender':'male'},{-/-},{-/-},{-/-}}; составить функццию принимающую этот массив, принимающий массив, ключ и значение, выводиться новый массив с этим показателем; если что-то не передаётся, то возвращает ОШИБКУ; поверка на пустоту массива, ключа, и значения в нём;
 *  
 *  ОШИБКА: return new Error('текст ошибки');
 *  
 *  
*/