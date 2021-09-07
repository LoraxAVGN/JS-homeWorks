//call(); apply();
//function call(context, arg1, arg2);

// const info = {price:10};
// function getPrice(){return this.price};
// console.log(getPrice.call(info)); //10
// function getPriceWithDiscount(discont){
//     return this.price*(100-discont)/100;
// }
// console.log(getPriceWithDiscount.call(info,10)); //9
// console.log(getPriceWithDiscount.apply(info,[10])); //9

// const obj={ test:111,
//             foo: function(){return this.test}
// }
// console.log(obj.foo());
// const boo=obj.foo;
// console.log(boo()); //undefined

// let user={firstName:'Коля'}
// function func(phrase){
//     console.log(phrase+', '+this.firstName)
// }
// let funcUser=func.bind(user);
// funcUser('Привет');

// let obj={   price:100, 
//             count:5,
//             func:function(){console.log(this.price*this.count)}            
// }
// let obj2={  price:200, 
//             count:5,
// }
// obj.func.call(obj2);

// let obj={height:10, width:20};
// let getSquare = function(){return this.width*this.height}
// console.log(getSquare.apply(obj));

// let element={   height:25,
//                 getHeight:function(){return this.height}
// }
// let getElement=element.getHeight.bind(element);
// console.log(getElement());

// СТРЕЛОЧНЫЕ ФУНКЦИИ
// особенности: более лаконичный синтексис, отсуствие псевдомассива, лексическое определение this, не могут использов в кач-ве конструктора и не могут использ в создании генераторов. Всегда созд с помощью функц выражений и не имеют имени.

// function test(){return 2+3}

// const test=(x,y)=>x+y;
// console.log(test(2,3));

// let moreAction=(a,b)=>{
//     a*=2;
//     b*=3;
//     return a+b;
// }
// console.log(moreAction(1,1)) // 5

// let moreAction=a=>{
//     a*=2;
//     return a;
// }
// console.log(moreAction(2)) // 4

// const getTextInfo=(text)=>{
//     return{ length:text.length,
//             isEven:!(text.length%2)};
// }
// const getTextInfo=(text)=>
//     ({  length:text.length,
//         isEven:!(text.length%2)}); //со скобками без return

// const printParams=(...props)=>console.log(props);
// printParams(1,"Kostya",3); // [1, "Kostya", 3]

// const user={
//     age:30,
//     firstName:'Петя',
//     getFirstName(){console.log(this)},
//     getAgeArrow:null,
//     getAge(){this.getAgeArrow=()=>console.log(this)}
// }
// user.getAge();
// user.getAgeArrow();

// function convertToObject(num){
//     const obj={
//         value:num,
//         isOdd:Boolean(num%2)
//     }
//     return obj;
// }
// console.log(convertToObject(3));

// let convertToObject=(num)=>({value:num, isOdd:Boolean(num%2)})
// console.log(convertToObject(3));

const users = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

// let sample=[1,2,3];
// sample.forEach(function(elem,index){
//     console.log(elem+' - '+index)
// })
// sample.forEach((elem,index)=>console.log(`${elem} - ${index}`))


// метод filter() - созд новый массиви в него будут положены эл-ты соответ фильтру

// const userLes30=users.filter(user=>user.age<30);
// const userLesActive=users.filter(user=>user.isActive);
// console.log(userLes30);
// console.log(userLesActive);


// метод map()

// const userName=users.map(user=>user.name);
// console.log(userName);


// метод reduce()

// const totalBalance=users.reduce((ace,user)=>(ace+=user.balance),1000);
// console.log(totalBalance);

// const userObj=users.reduce((ace,user)=>{ace[user._id]=user;return ace;},{});
// console.log(userObj);


// every(), some() - возвр true или false. every - все удовлетв условию, some - хотя бы один удовл условию

// const isMale=users.some(user=>user.gender==='male');
// console.log(isMale);

// const isAllIs=users.every(user=>user.age>18);
// console.log(isAllIs);


// find()

// const user=users.find(user=>user.name==='Valencia Carrillo');
// console.log(user);

// sort()

// console.log(['a','c','b','d'].sort()) // ["a", "b", "c", "d"]
// console.log([10,2,15].sort()) // [10, 15, 2] - сортирует как строку

// users.sort((prevUser,nextUser)=>prevUser.age-nextUser.age);
// console.log(users)

// ДЗ https://webmoment.by/js/z18.html