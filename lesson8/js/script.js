// Замыкание - ф-ия, котор ссыл на независ переменные. 

// let outerVal='тест';
// function outerFunc(){
//     console.log(outerVal)
// }
// outerFunc();

// let outerVal='тест';
// let later;
// function outerFunc(){
//     let innerVal='текст';
//     function innerFunc(){
//         console.log(outerVal);
//         console.log(innerVal);
//     }
//     later=innerFunc;
// }
// outerFunc();
// later();

// function numberGenerator(){
//     let num=1;
//     function checkNumber(){
//         console.log(num)
//     }
//     num++;
//     return checkNumber;
// }
// let number=numberGenerator();
// number();

// function sayHello(){
//     let say=function(){console.log(hello)};
//     let hello='Привет';
//     return say
// }
// let sayHelloCloser=sayHello();
// sayHelloCloser();

// const getHello=function(text){
//     text=text || 'Привет! ';
//     return function(name){
//         var greeting=text+name;
//         return greeting;
//     }
// }
// const hello=getHello('Добрый день! ');
// console.log(hello('мир'));

// function checkCred(){
//     const login='test';
//     const password='123';
//     return{
//         checkLogin(value){
//             return login===value
//         },
//         checkPassword(value){
//             return password===value
//         }
//     }
// }
// const check=checkCred();
// console.log(check);
// console.log(check.checkLogin('test'))
// скрываем логин и пароль

// Контекст исполнения бывает либо глобальный или контекстом выполнения ф-ии (создается новый при ее вызове)

// function makeCounter(){
//     let counter=0;
//     return function(){
//         return ++counter
//     }
// }
// let count1=makeCounter(),
//     count2=makeCounter();
// console.log(count1());
// console.log(count1());
// console.log(count2());
// console.log(count2());
// console.log(count1());
//???

// Лексическое окружение - стр-ры данных, котор хранит сведения о соотв индефикаторов и переменных. Индефикатор - это имя перем или ф-ии. Переменная - ссылка на объект или значение примитивного типа.

// Объединенное множ-во индефикат, доступ к котор имеет текущее окруж, носит имя - область видимости (scope).

// let x=10;
// function foo(){
//     let y=20;
//     function bar(){
//         var z=15;
//         return x+y+z;
//     }
//     return bar;
// }
// let per=foo();
// console.log(per(), x);

// function f(){
//     const arrOfFunc=[];
//     let value='';
//     for(let i=0;i<10;i++){
//         value+=i;
//         arrOfFunc.push(function(){
//             console.log(value,i);
//         })
//     }
//     console.log(arrOfFunc);
//     return arrOfFunc;
// }
// let per=f();
// per[0]();

// const counter={
//     i:0,
//     inc:function(){return ++this.i;}
// }
// console.log(counter.i);
// console.log(counter.inc());

// const counter=(function(){
//     let i=0;
//     return function(){return ++i}
// })()
// console.log(counter);
// console.log(counter());

// const price=(function(){
//     let discount=0, price=0;
//     function setDiscount(value){
//         discount=parseInt(value)
//     }
//     function getPriceDiscount(){
//         const discountFromPrice=price*discount/100;
//         return price-discountFromPrice;
//     }
//     function setPrice(value){
//         price=parseInt(value);
//     }
//     function getPrice(){
//         return price;
//     }
//     return{
//         getPriceDiscount: getPriceDiscount,
//         setDiscount: setDiscount,
//         getPrice: getPrice,
//         setPrice: setPrice
//     }
// })();
// price.setPrice(100);
// price.setDiscount(10);
// console.log(price.getPrice());
// console.log(price.getPriceDiscount());