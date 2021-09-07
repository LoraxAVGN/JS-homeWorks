/*
1. вводится стр из неск слов, нужно сдел новую стр, где каждое слово начин с больш буквы (for или while)
2. сделать строку перевертыш
3. вывести строку с удаленными пробелами (можно из 1.)
4. создать массив из 15 случ чисел от 15 до 100 и выводим его, а потом выводим только его нечетные числа
5. (Используя for in) задаем перем типа массив  объектов с полями название, год, хар-ка, цвет и цена. Перебр свойства объекта, если значение свойства строка, то переписать ее большими буквами
*/

// 1
// let str = prompt('Введите строку');
// while(!str){
//     str = prompt('Вы не ввели строку. Введите её снова!');
// }
// if(str.length==1)console.log(str.toUpperCase());
// else{
//     new_str=str[0].toUpperCase();
//     for(let i=1;i<str.length;i++){
//         if(str[i-1]==' ')new_str+=str[i].toUpperCase();
//         else new_str+=str[i]
//     }   
//     console.log(new_str);
// }

//2
// let str = prompt('Введите строку');
// new_str='';
// for(let i=str.length-1;i>=0;i--){
//     new_str+=str[i];
// }
// console.log(new_str);

//3
// let str = prompt('Введите строку');
// while(!str){
//     str = prompt('Вы не ввели строку. Введите её снова!');
// }
// let new_str='';
// for(let i=0;i<str.length;i++){
//     if(str[i]!=' ')new_str+=str[i];
// }
// console.log(new_str);

//4
// let arr=[], arr2=[], num=15;
// for(let i=0;i<num;i++){
//     arr.push(Math.ceil(Math.random()*85+15));
// }
// for(let i=0;i<num;i++){
//     if(arr[i]%2)arr2.push(arr[i]);
// }
// console.log(arr);
// console.log(arr2);

//5
// let arr_obj = [{madel:'r1',year:2000,color:'black',price:5000}, 
//                 {madel:'r2',year:2010,color:'white',price:15000}];
// for(let obj of arr_obj){
//     for(let sv in obj){
//         if(typeof(obj[sv])=='string')obj[sv]=obj[sv].toUpperCase();
//     }
// }
// console.log(arr_obj);