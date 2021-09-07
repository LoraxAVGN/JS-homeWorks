// Функции высшего порядка - ф-ция, кот. принимает аргументом др. функцию.

// let fn = function(){};

// const square = function(x){
//     return x*x;
// }
// square(5);
// const foo = square;
// foo(6);

// let obj = {doSomething:function(){}};

// let arr = [];
// arr.push(function doSomething(){});

// function formatGreeting(){
//     console.log('Как дела?');
// };
// function casualGreeting(){
//     console.log('Что делаешь?');
// };
// function greet(str, namefunc1, namefunc2){
//     if(typeof str == 'string'){
//         if(str == "format") namefunc1(); 
//         if(str == "casual") namefunc2();
//     };
// };
// greet("format", formatGreeting, casualGreeting);
// greet("casual", formatGreeting, casualGreeting);

// function doWithLoading(fn){
//     console.log('Начало загрузки');
//     let returnValue = fn(); // 1-ое выводится;
//     console.log('Конец загрузки');
//     return returnValue; // после return не отображается;
// };

// function process(){
//     console.log('Загружаем файл');
// };
// doWithLoading(process);

// function getStr(str, func) {
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//         newStr += func(str[i]);
//     };
//     return newStr;
// };

// function func1(symb){
//     return symb.toUpperCase();
// };

// function func2(symb){
//     return symb + "_";
// };

// console.log(getStr("мама мыла раму", func1));
// console.log(getStr("мама мыла раму", func2));

// function greeting(firstName){
//     return function(lastName){
//         return `Привет, ${firstName} ${lastName}!`;
//     };
// };
// const test = greeting('Иван');
// console.log(test);
// const fullName = test('Петров');
// console.log(fullName);
// const fullName2 = greeting("Иван")("Петров");
// console.log(fullName2);

// function opros(prof){
//     const jobsDictionary = {
//         "программист" : "Какой язык?",
//         "учитель" : "Какой предмет?"
//     };
//     return function(name) {console.log(`${name},`+ " " + jobsDictionary[prof])};
// };
// opros('программист')('Павел');
// opros('учитель')('Павел');

// function every(arr, fn) {
//     if (!Array.isArray(arr)) return new Error('Не массив!');
//     if(!fn || typeof fn !== 'function') return new Error('Не функция!');
//     for(let i = 0; i < arr.length; i++){
//         if(!fn(arr[i], i, arr)) return false;
//     };
//     return true;
// };

// console.log(every([1, 2], function(el){
//     return typeof el === 'number';
// }));

// this - ключевое слово;

// console.log(this);
// function getThis(){console.log(this)};
// getThis();
// window.getThis();

// const user = {
//     age : 45,
//     getAge : function(){console.log(this.age)}
// };
// user.getAge();

// const product = {
//     name : "telephone",
//     price : 300,
//     info : {information : "Nokia", getInfo : function(){console.log(this.information)}},
//     getPrice,
//     getName
// };

// product.info.getInfo();
// console.log(product.getName());

// function getPrice(){
//     return parseFloat(this.price)
// };
// function getName(){
//     return this;
//     return this.name;
// };

// console.log(product.getName().getPrice());

// const product1 = {
//     name: "car",
//     price: 100,
//     getPrice
// };

// product1.getName = product.getName;
// product1.getName();


// let str = 'Мама мыла раму!';
// let newStr = str.
//                 split('')
//                 .reverse()
//                 .join("");
// console.log(newStr);

// ДЗ

// 4.5 из прошлого урока;
// 1. Создать объект, кот. опис. ширину и высоту прямоугольника и может посчитать площадь фигуры.
// 2. Создать объект с полями цена и скидка на товар и два метода вывод цены и расчет цены с учетом скидки.
// 3. есть объект, у кот. есть  свойство и значение-число и три метода, один метод удвоить, второй метод прибавть 1, третий метод отнять 1.


// Задание 1

// let obj = {
//     a : 2,
//     b : 3,
//     getS : function(){console.log("S = " + (this.a*this.b));}
// };
// obj.a = 3;
// obj.b = 5;
// obj.getS();

// Задание 2

// let product = {
//     price : 200,
//     discount : "50%",
//     viewPrice : function(){console.log("Цена = " + this.price);},
//     viewPriceDiscont : function(){
//         console.log("Цена со скидкой = " + (this.price - this.price*(parseInt(this.discount)/100)));
//     }
// };
// product.viewPrice();
// product.viewPriceDiscont();

// Задание 3

// let obj = {
//     n : 4,
//     doble(){this.n = this.n*2; return this;},
//     up(){this.n++; return this;},
//     down(){this.n--; return this;}
// };
// obj.up().up().up().doble().down().down().doble();
// console.log(obj.n);