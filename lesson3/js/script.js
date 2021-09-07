// let value = 2;
// switch (value){
//     case 1: console.log(1); break;
//     case 2: console.log(2); break;
//     default: console.log('произв знач');
// }

// let str = prompt('Введите вашу должность');

// switch (str){
//     case 'admin': console.log('Hi, ' + str); break;
//     case 'user':
//     case 'guess': console.log('Добро пожаловать, ' + str); break;
//     default: console.log('Вход запрещен!');
// }

// let i = 10;
// while(i){
//     console.log(i);
// }

// let i = 0;
// do{
//     console.log(i);
// }while(++i<10);

// let i = 0;
// for (;i<10;i){
//     console.log(i++);
// }
// console.log('цикл завершен');

// let n=100, s=0, k=1;
// for(; k<=n; s+=k*k, k++);
//     console.log(s,k);

// let colors = ['blue', 'green', 'white', 'pink'];
// for(let i=0;i<colors.length;i++){
//     colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

// let list = [{name:'Kostya', age:21},
//         {name:'Pasha', age:28},
//         {name:'Lesha', age:27},
//         {name:'Igar', age:18},
// ];
// let user_obj = {};

// for(let i=0;i<users.length;i++){
//     user_obj[users[i].name]=users[i];
// }
// console.log(user_obj);

// let sum=0;
// while(true){
//     let value=+prompt('Введите число');
//     if(!value)break;
//     sum+=value;
// }
// console.log(`Сумма ${sum}`);

// let sum=0;
// for(let i=0;i<10;i++){
//     if(i===6)continue;
//     sum+=i;
//     console.log(i,sum);
// }

// outer: // указывает на цикл из которого мы хотим выйти
// for(let i=0; i<3; i++){
//     for(let j=0; j<3;j++){
//         let input=prompt(`Значение(${i}, ${j})`);
//         if(!input)break outer;
//         console.log(input);
//     }
// }

// let myArray = [1,1,2,3,5,8,13];
// myArray.forEach(function(value){
//     console.log(value)
// });

// let list = {one:'text', two:'text2'};
// for(let item in list){
//     console.log(item);
//     console.log(list[item]);
// }

// for(let value of myArray){
//     console.log(value);
// }

//ДЗ

/*

1. вводится стр из неск слов, нужно сдел новую стр, где каждое слово начин с больш буквы (for или while)
2. сделать строку перевертыш
3. вывести строку с удаленными пробелами (можно из 1.)
4. создать массив из 15 случ чисел от 15 до 100 и выводим его, а потом выводим только его нечетные числа
5. (Используя for in) задаем перем типа массив  объектов с полями название, год, хар-ка, цвет и цена. Перебр свойства объекта, если значение свойства строка, то переписать ее большими буквами

*/