let obj = {name: 'IPhone', price: 1000};

let min_price = +prompt('Введите минимальную цену');
let max_price = +prompt('Введите максимальную цену');

if(isNaN(min_price) || isNaN(max_price))
    console.log('Неверный формат введенной цены!');
else if(min_price>max_price)
    console.log('Мин. цена не может быть больше максимальной!');
else if(obj.price>=min_price && obj.price<=max_price)
    console.log('Вы можете приобрести ' + obj.name);
else console.log('Цена товара не входит в диапазон!')