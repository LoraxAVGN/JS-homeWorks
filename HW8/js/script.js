/*
1.Создайте функцию которая бы умела делать: minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.2.  

2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами: function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5

4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2 модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
*/

// 1
// minus=(n1=0)=>(n2=0)=>n1-n2;
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

//2
// function multiplyMaker(n1){
//     let mulNum=n1;
//     return function(n2){
//         mulNum*=n2;
//         return mulNum;
//     }
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

// 3
// let modul={
//     str:'',
//     setStr:(s='')=>str=s.toString(),
//     lengthStr:()=>str.length,
//     getStr:()=>str,
//     revStr:()=>str=str.split('').reverse().join('')
// }

// modul.setStr('abcd');
// console.log(modul.lengthStr());
// console.log(modul.getStr());
// modul.revStr();
// console.log(modul.getStr());

// 4
// let modul={
//     num:0,
//     setNum(n=0){this.num=isNaN(n)?0:+n.toFixed(2);return this},
//     plus(n=0){this.num+=isNaN(n)?0:+n.toFixed(2);return this},
//     minus(n=0){this.num-=isNaN(n)?0:+n.toFixed(2);return this},
//     mul(n=1){this.num=+(this.num*(isNaN(n)?1:n)).toFixed(2);return this},
//     dev(n=1){this.num=+(this.num/(isNaN(n)?1:n)).toFixed(2);return this},
//     pow(n=1){this.num=+Math.pow(this.num,+(isNaN(n)?1:n)).toFixed(2);return this},
//     getVal(){return this.num}
// }
// console.log(modul.setNum(10).getVal()); //10
// console.log(modul.plus(5).getVal()); //15
// console.log(modul.mul(2).getVal()); //30
// console.log(modul.dev(3).getVal()); //10
// console.log(modul.pow(2).getVal()); //100

// console.log(modul.setNum(10).pow(2).minus(5).getVal()); //95