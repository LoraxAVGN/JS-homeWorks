// let obj1={name:'Вася'};
// let newobj=obj1;
// console.log(newobj===obj1);  //true
// newobj.name='Петя';
// console.log(obj1); // Петя

// let obj1={name:'Вася'};
// let newObj=Object.assign({},obj1);
// console.log(newObj); // {name: "Вася"}
// console.log(newObj===obj1); // false
// let obj2 = {age:25};
// newObj=Object.assign({},obj1,obj2); 
// console.log(newObj); // {name: "Вася", age: 25}

// const person={
//     name:'Ivan',
//     age:24
// }
// const newPerson={
//     ...person,
//     age:25
// }
// console.log(person); // {name: "Ivan", age: 24}
// console.log(newPerson); // {name: "Ivan", age: 25}

// const person={
//     name:'Ivan',
//     age:30,
//     info:{skills:['html','css']}
// }
// newObj=Object.assign({},person);
// console.log(newObj.info===person.info); // true
// newObj = JSON.parse(JSON.stringify(person)); // - независ копия
// console.log(newObj.info===person.info); // false
// let keys=Object.keys(person)
// console.log(keys); // ["name", "age", "info"]
// let values=Object.values(person)
// console.log(values); // ["Ivan", 30, {…}]
// console.log(Object.entries(person)); // [Array(2), Array(2), Array(2)] ["name", "Ivan"] ["age", 30] ["info", {…}]
// console.log(Object.fromEntries(Object.entries(person)));// {name: "Ivan", age: 30, info: {…}}

// Деструктуризация

// let person={
//     name:'Ivan',
//     age:30,
//     info:{skills:['html','css']}
// }
// let {name,age,lastName='Petrov'}=person;
// console.log(name,age,lastName); // Ivan 30 Petrov
// console.log(person); // {name: "Ivan", age: 30, info: {…}}

// let person={
//     name:'Ivan',
//     age:30,
//     info:{skills:['html','css']}
// }
// const{name:firstName,age:years=30}=person;
// console.log(firstName,years) // Ivan 30
// const {info:{skills}}=person;
// console.log(skills); // ["html", "css"]

// const [name1,name2]=['Иван','Петя','Люся','Коля'];
// console.log(name1,name2) // Иван Петя

// const arr=['Привет', ['key', 'value']];
// const [,[key,value]]=arr;
// console.log(key,value); // key value

// const names=['Vanya', 'Petya', 'Kostya', 'Dima', 'Pasha'];
// const [name1, ...otherName]= names;
// console.log(name1) // Vanya
// console.log(otherName) // ["Petya", "Kostya", "Dima", "Pasha"]
// const newNames=[...names];
// console.log(newNames); // ["Vanya", "Petya", "Kostya", "Dima", "Pasha"]

// let person={
//     lastName:'Krot',
//     firstName:'Kostya',
//     info:{skills:['html','css']}
// }
// function myPerson({lastName='Kostya', firstName='Krot', info:{skills}={}}={}){
//     console.log(lastName,firstName,skills)
// }
// myPerson(person); // Krot Kostya (2) ["html", "css"]

// const number=[3,5];
// function foo(x,y,...other){
//     console.log(arguments); // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//     console.log([].slice.call(arguments)); // [1, 2, 3, 4]
//     console.log(Array.prototype.slice.call(arguments)); // [1, 2, 3, 4]
//     const [...args]=arguments;
//     console.log(args,other) // [1, 2, 3, 4] [3, 4]
// }
// foo(1,2,3,4);
// foo(...number);

// const car={
//     brand:'Audi',
//     year:2019
// }
// // Object.defineProperty(car,'year',{configurable:false}); // возможность удалять свойства
// // Object.defineProperty(car,'year',{enumerable:false}); // используется ли в перечислениях
// // Object.defineProperty(car,'year',{writable:false}); // возможность переназначивать значения свойств
// // Object.defineProperty(car,'age',{get:function(){
// //     return `машина выпущена в ${this.year}`
// // },});
// car.year=2021;
// console.log(car); // script.js:104 {brand: "Audi", year: 2021}
// // delete car.year;
// console.log(car); // script.js:104 {brand: "Audi", year: 2021}
// console.log(Object.keys(car));
// console.log(car.age);

// const car={
//     brand:'Audi',
//     year:2019,
//     get age(){
//         return `машина выпущена в ${this.year}`;
//     },
//     set age(value){
//         this.year=value;
//     }
// }
// car.age=2000;
// console.log(car.year);
// console.log(car.age);

// function foo(){
//     globalVar=10
// }
// Object.defineProperty(window,'globalVar',{
//     set:function(value){
//         console.log(value);
//         debugger;
//     }
// })
// foo();

// function foo(){
//     globalVar=10
// }
// const strObj=new String('Привет');
// console.dir(strObj); // возможные методы использования
// let str='Привет';
// console.dir(str) // Привет
// console.dir(String('Привет').slice(1,-1)) // риве
// console.dir(strObj.slice(1,-1)); // риве
// console.dir(Number);