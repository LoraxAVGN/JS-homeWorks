/*
1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
2. Проверить, содержит ли массив элементы, равные нулю. Если да - вернуть true.
3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
6. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
let products = [ {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18}, {title: 'prod3', price: 15}, {title: 'prod4', price: 25}, {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8}, {title: 'prod7', price: 19}, {title: 'prod8', price: 63} ]; filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/

// 1
// let arr=[1,2,3,5,8,9,10];
// let new_arr=arr.map(i=>({digit: i, odd: Boolean(i%2)}));
// console.log(new_arr);

// 2
// let arr1=[1,2,0,3];
// let arr2=[1,2,3,4];
// fun=arr=>arr.some(i=>i===0);
// console.log(fun(arr1));
// console.log(fun(arr2));

//3
// let arr1=['yes', 'hello', 'no', 'easycode', 'what'];
// let arr2=['hello', 'what', 'easycode'];
// fun=arr=>arr.every(i=>i.length>3);
// console.log(fun(arr1));
// console.log(fun(arr2));

// 4
// let obj=[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// obj.sort((a,b)=>a.index-b.index);
// let str='';
// obj.forEach(i=>str+=i.char);
// console.log(str);

// 5
// let arr=[[14,45],[1],['a','c','d']];
// arr.sort((a,b)=>a.length-b.length);
// console.log(arr);

// 6
// let products = [ {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18}, {title: 'prod3', price: 15}, {title: 'prod4', price: 25}, {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8}, {title: 'prod7', price: 19}, {title: 'prod8', price: 63} ];

// let filterCollection=(arr,left_price,right_price)=>{
//     arr=arr.filter(i=>(i.price>=left_price && i.price<=right_price));
//     arr.sort((a,b)=>a.price-b.price);
//     return arr
// }
// console.log(filterCollection(products,15,30));