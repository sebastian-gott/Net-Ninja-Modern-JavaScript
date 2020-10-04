/// STORE DATA IN LOCAL STORAGE

localStorage.setItem('name', 'Seb');
localStorage.setItem('age', '22');


// GET DATA FROM LOCAL STORAGE

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);


// UPDATING DATA

localStorage.setItem('name', 'Sindre');
localStorage.age= '25';

name = localStorage.getItem('name');
console.log(name, age);

// DELETING DATA FROM LOCAL STORAGE

//localStorage.removeItem('name');

localStorage.clear();

name = localStorage.getItem('name');
console.log(name);


const todos = [
    {text: 'play games', author: 'seb'},
    {text: 'play bread', author: 'sindre'},
    {text: 'play milk', author: 'adrian'},

];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));