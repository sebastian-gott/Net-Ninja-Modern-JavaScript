// for loops

/*for( let i = 0; i < 5; i++ ) {
    console.log('in loop:', i);
}

console.log('Loop finished'); */


/* const names = [ 'Seb', 'Adrian', 'Sindre' ]; //Iteration= each cycle through

for( let i = 0; i < names.length; i++ ){
    //console.log(names[i]);
    let html = `<div> ${names[i]} </div>`
    console.log(html);
} */

// while loops

//const names = [ 'Seb', 'Adrian', 'Sindre' ];
/* let i = 0;

while( i < 5 ){
    console.log(' in loop: ', i);
    i++;
}*/

/*let i= 0;
while( i < names.length ){
    console.log( names[i] );
    i++;
}*/

// do while loops

// let i= 3;

// do{
//     console.log( 'val of i is:', i );
//     i++;
// }while( i < 5);

// if statements and else if  //Logical operators - OR || and AND &&

// const age = 25;

// if( age > 20 ){
//     console.log( 'You are over 20 years old' );
// }

// const people = [ 'Seb', 'Anders', 'Harald', 'Simen' ];

// if( people.length > 3 ){
//     console.log( "That's some people" );
// }

// const password = 'p@ss';

// if(password.length >=12 && password.includes('@') ){
//     console.log('Strong password');
// }else if(password.length >= 8 || password.includes('@') ){
//     console.log('Good password');
// }else{
//     console.log('Password not long enough');
// }

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log('You must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// Break and continue

// const scores = [ 50, 25, 0, 30, 100, 20, 10 ];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0 ){
//         continue;
//     }

//     console.log('Your score: ', scores[i]);

//     if(scores[i] === 100 ){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// Switch statements

// const grade= 'A';

// switch(grade){
//     case 'A':
//         console.log('You got an A');
//         break;
//     case 'B':
//         console.log('You got a B');
//         break;
//     case 'C':
//         console.log('You got a C');
//         break;
//     case 'D':
//         console.log('You got a D');
//         break;
//     case 'E':
//         console.log('You got an E');
//         break;
//     default:
//         console.log('Not a valid grade');
// }

// variables & block scope

let age = 30;

if(true){
    let age = 40;
    let name = 'Seb';
    console.log( 'Inside first code block: ', age, name );

    if(true){
        console.log( 'Inside second code block: ', age, name );
    }
}

console.log( 'outside code block: ', age );
