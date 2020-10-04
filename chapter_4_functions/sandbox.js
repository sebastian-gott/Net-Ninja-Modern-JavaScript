// function declaration

// function greet(){
//     console.log('Hello');
// }

// greet();

// // function expression

// const speak = function(){
//     console.log('Good day');
// };


// speak();

// arguments and parameters

const speak = function(name, time){
    console.log(`good ${time} ${name}`);
 };

 speak('Seb', 'morning');

 // returning values

//  const calcArea = function(radius){
//      return 3.14 * radius**2;
     
//  };

//  const a = calcArea(5);
//  console.log(a);

//  const calcVol = function(area){

//  };

//  calcVol(area);

 // Arrow functions shorter way to write functions

//  const kalkArea = (radius) =>  3.14 * radius**2;

//  const area = kalkArea(7);
//  console.log('area is:', area);

//  const greet = () => 'hello world';

//  const test = greet();
//  console.log('Hello', test);
// ///////////////////////////////////
//  const bill = (products, tax) =>{
//      let total = 0;
//      for( let i=0; i < products.length; i++ ){
//          total += products[i] + products[i] * tax;
//      }
//      return total;
//  }

//  console.log(bill([10,15,30], 0.2));

//  const math = (number) => 45 * number;
 

//  const result = math(2);
//  console.log( 'The answer is:', result );



//  const name = 'Seb';
//  // functions

//  const teeth = () => 'hello';

//  let resultOne = teeth();
//  console.log(resultOne);


//  // methods

//  let resultTwo = name.toUpperCase();
//  console.log(resultTwo);


//  // callbacks and foreach



// const logPerson = (person, index) => {
//     console.log(` ${index} - heelo ${person} `)
// }

// people.forEach(logPerson);

// get a reference for the ul

const ul = document.querySelector('.people');

const people = [ 'Seb', 'Anders', 'Sindre', 'Anders' ];

let html = ``;

people.forEach(person =>{
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;