// ASYNC EXPLANATION
// console.log(1);
// console.log(2);

// setTimeout(() =>{
//     console.log('Callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

// HTTPS REQUESTS

// const getTodos = (resource) =>{

//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () =>{
//         //console.log(request, request.readyState);
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//         } else if (request.readyState === 4){
//             reject('Error getting resource')
//         }
//     });
    
//     request.open('GET', resource );
//     request.send();
//     });     
// };

// getTodos('todos/Adrian.json').then(data =>{
//     console.log('Promise 1 resolved', data);
//     return getTodos('todos/Seb.json');
// }).then(data =>{
//     console.log('Promise 2 resolved:', data);
//     return getTodos('todos/Sindre.json');
// }).then(data =>{
//     console.log('Promise 3 resolved:', data);
// }).catch(err =>{
//     console.log('Promise rejected:', err);
// });

// PROMISES

// const getSomething = () => {

//     return new Promise((resolve, reject) =>{
//         // FETCH SOMETHING
//         resolve('Some data');
//         //reject('some error');
//     });
// };

// getSomething().then((data) =>{
//     console.log(data);
// }, (err) =>{
//     console.log(err);
// });

// getSomething().then((data) =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });

// console.log(1);
// console.log(2);

// CALLBACK HELL

// getTodos('todos/Adrian.json', (err, data) =>{
//     console.log(data);
//     getTodos('todos/Seb.json', (err, data)=>{
//         console.log(data);  
//         getTodos('todos/Sindre.json', (err, data)=>{
//             console.log(data);    
//         });  
//     });  
// });

// console.log(3);
// console.log(4);


//getTodos();

// ASYNC & AWAIT

const getTodos = async () => {

    const response = await fetch('todos/Seb.json');
    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }
    const data = await response.json();
    return data;
    
};



getTodos().then(data => console.log('Resolved', data))
.catch(err => console.log('Rejected', err.message));









// FETCH API

// fetch('todos/Adrian.json').then((response) =>{
//     console.log('Resolved:', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log('Rejected:', err);
// });


