// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) =>{
//     return score > 20;
// });

// console.log(filteredScores);

// const users = [
//     {name: 'Seb', premium: true},
//     {name: 'Adrian', premium: true},
//     {name: 'Sindre', premium: false},
//     {name: 'Anders', premium: false}
// ];

// const filteredUsers = users.filter((user) =>{
//     return user.premium;
// });

// console.log(filteredUsers);

const prices = [10, 30, 15, 25, 50, 40, 5, 34, 23, 76];

const salePrices = prices.map((price) =>{
    return price / 2;
});

console.log(salePrices);

// const products = [
//     {name: 'Red Bull', price: 23},
//     {name: 'Burn', price: 26},
//     {name: 'Battery', price: 22},
//     {name: 'Monster', price: 18},
// ];

// const productSale = products.map((product) =>{
//     if(product.price > 22){
//         return { name: product.name, price: product.price / 2 };
//     } else {
//         return product;
//     }
// });

// console.log(productSale);

// const scores = [10, 30, 15, 25, 50, 40, 5, 34, 23, 76];

// const result = scores.reduce((acc, curr) =>{
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

const products = [
    {name: 'Red Bull', price: 23},
    {name: 'Burn', price: 26},
    {name: 'Battery', price: 22},
    {name: 'Monster', price: 18},
    {name: 'Red Bull', price: 23}
];

const addedPrice = products.reduce((acc, curr) =>{
    if(curr.name === 'Red Bull'){
        acc += curr.price;
    }
    return acc;
}, 0)

console.log(addedPrice);


const scores = [10, 30, 15, 25, 50, 40, 5, 34, 23, 76];

const found = scores.find((score) =>{
    return score > 50;
});

console.log(found);

//SORTING NUMBERS

const scores1 = [10, 30, 15, 25, 50, 40, 5, 34, 23, 76];

scores1.sort((a, b) => b - a);
console.log(scores1);

//SORTING STRINGS

const names1 = ['seb', 'adrian', 'sindre', 'anders'];

names1.sort();
names1.reverse();
console.log(names1);

//SORTING OBJECTS

const groups = [
    {name: 'seb', group: 1},
    {name: 'adrian', group: 2},
    {name: 'sindre', group: 1},
    {name: 'anders', group: 2}
];

// groups.sort((a, b) =>{
//     if(a.group > b.group){
//         return -1;
//     } else if(b.group > a.group) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

groups.sort((a, b) =>{
    return b.group - a.group;
});

console.log(groups);

const products1 = [
    {name: 'Red Bull', price: 23},
    {name: 'Burn', price: 26},
    {name: 'Battery', price: 22},
    {name: 'Monster', price: 18},
    {name: 'Red Bull', price: 23}
];

// const filteredPrice = products1.filter((product1) =>{
//     return product1.price > 21;
// });

// const promo = filteredPrice.map((product1) =>{
//     return `The ${product1.name} is ${product1.price / 2} NOK`
// })

const promos = products1
    .filter(product1 => product1.price > 21)
        .map((product1) =>{
            return `${product1.name} is ${product1.price / 2}`;
});

console.log(promos);