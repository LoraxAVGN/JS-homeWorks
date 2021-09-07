/*
ДЗ
1. созд ф-ию котор приним число n и возвр МАССИВ заполн числами от 1 до n

2. ф-ия котор прин массив, а возвр массив с дублированными данными [1,2,3]=>[1,2,3,1,2,3]

3. в ф-ию перед произв кол-во массивов, а на выходе образуются те же массивы только без нулевого эл-та

4.в ф-ию перед массив пользователей поле которых нужно проверить и значения полей func(users,'age',33).
users=[{'_id': '...', 'balance':51515, 'picture':'http//...', 'age':33, 'name':'kostya krot', 'gender':'male'},{...},...],
выводятся массив пользователеё у которых в какомто св-ве есть правильное значение. Если нету такого пользователя то выводится ошибка Error. Также стоит проверить, что вводится массив.
*/

// 1
// function fun1(n){
//     let arr = [];
//     for(let i=1;i<=n;i++){
//         arr.push(i);
//     }
//     return arr;
// }
// let num = +prompt('Введите число');
// if(isNaN(num) || typeof(num)!='number' || num<=0)
//     console.error('Input error!');
// else{
//     let check = fun1(num);
//     console.log(check);
// }

// 2
// function fun2(arr){
//     let num=arr.length;
//     for(let i=0;i<num;i++)
//         arr.push(arr[i]);
//     return(arr);
// }
// check = [1,2,3,4];
// console.log(fun2(check));

// 3
// function fun3(){
//     let arr_arr=[]
//     for(let i=0;i<arguments.length;i++){
//         arr_arr.push(arguments[i].slice(1));
//     }
//     return arr_arr;
// }
// let arr1=[1,2,3,4], arr2=[1,2,3];
// console.log(fun3(arr1,arr2));

// 4
function fun2(users, my_sv, my_zn){
    new_arr=[];
    for(let user of users){
        for(let sv in user){
            if(sv==my_sv && user[sv]==my_zn){
                new_arr.push(user);
                break;
            }
        }
    }
    return new_arr;
}

let user1 = {   'id': '1234',
                'balance':1000, 
                'picture':'http//134',
                'age':33,
                'name':'Kostya Krot',
                'gender':'male'}

let user2 = {   'id': '5678',
                'balance':2000, 
                'picture':'http//587',
                'age':21,
                'name':'Masha Akulenko',
                'gender':'female'}

let arr_users=[];
arr_users.push(user1);
arr_users.push(user2);

console.log(fun2(arr_users,'balance',1000));