'use strict'

{
const nameGood = 'Куртка';

const quantityGood = 6;

const categoryGoods = 'Верхняя одежда';

const priceGood = 6000;

// console.log('наименование товара: ', nameGood);

// console.log('общая сумма товара: ', +quantityGood * +priceGood);

}

{
const nameGood = 'Mуртка';

const quantityGood = 16;

const categoryGoods = 'Космическая одежда';

const priceGood = 66000;

// console.log('наименование товара: ', nameGood);

// console.log('общая сумма товара: ', +quantityGood * +priceGood);

}

{
const nameGood = 'Гравицапа';

const quantityGood = 26;

const categoryGoods = 'Запчасти для звездолёта';

const priceGood = 2e6;

const getNameGood = prompt('введите наименование товара', 'Гравицапа');
const getQuantityGood = +prompt('введите количество товара', 26);
const getCategoryGoods = prompt('введите категорию товара', 'Запчасти для звездолёта');
const getPriceGood = +prompt('введите цену товара', 2e6);

console.log('наименование товара: ', getNameGood, '|| тип', typeof getNameGood);
console.log('количество товара: ', getQuantityGood, '|| тип', typeof getQuantityGood);
console.log('категория товара: ', getCategoryGoods, '|| тип', typeof getCategoryGoods);
console.log('цена товара: ', getPriceGood, '|| тип', typeof getPriceGood);

console.log(`На складе:  ${getQuantityGood} единиц товара "${getNameGood}" на общую сумму ${getQuantityGood * getPriceGood} КэЦэ`);

// console.log('наименование товара: ', nameGood);

// console.log('общая сумма товара: ', +quantityGood * +priceGood);

}
