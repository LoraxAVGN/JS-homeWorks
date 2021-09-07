// 1. Создать объект, кот. опис. ширину и высоту прямоугольника и может посчитать площадь фигуры.
// 2. Создать объект с полями цена и скидка на товар и два метода вывод цены и расчет цены с учетом скидки.
// 3. есть объект, у кот. есть  свойство и значение-число и три метода, один метод удвоить, второй метод прибавть 1, третий

// 1
// let rec={
//     w:10,
//     h:20,
//     s:function(){return this.h*this.w}
// }
// console.log(rec.s());
// rec.w=5; rec.h=10;
// console.log(rec.s());

// 2
// let obj={
//     price:100,
//     skidka:10,
//     inp_pr(){console.log(`Цена товара: ${this.price}р`)},
//     sk_pr(){console.log(`Цена с учетом скидки ${this.price*(1-this.skidka/100)}р`)}
// }
// obj.inp_pr();
// obj.sk_pr();

// 3
// let obj={
//     n:0,
//     double(){this.n*=2; return this},
//     dec(){this.n--; return this},
//     inc(){this.n++; return this}
// }
// obj.inc().inc().double().dec();
// console.log(obj.n);