const form = document.querySelector('.signup-form');
const error = document.querySelector('.error');
const usernamePattern = /^[a-zA-Z0-9]{3,12}$/;
//const username = document.querySelector('#username');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //console.log(username.value);
    //console.log(form.username.value);
    const username = form.username.value;
    
    
    if(usernamePattern.test(username)){
        error.style.color = 'blue';
        error.innerHTML = 'Riktig brukernavn';
    }else {
        error.style.color = 'red';
        error.innerHTML = 'Brukernavn kan kun inneholde store og små bokstaver uten mellomrom';
    }
});

// LIVE FEEDBACK

form.username.addEventListener('keyup', (e) =>{
    console.log(e);
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        //form.username.style.background = 'rgba(63, 84, 191, 0.32)';
        form.username.setAttribute('class', 'success')
    } else {
        //form.username.style.background = 'rgba(193, 66, 66, 0.32)';
        form.username.setAttribute('class', 'error1');
    }
});

// const username = 'Sebastian';
// const pattern = /^[a-zA-Z]{6,}$/;

// // let result = pattern.test(username);


// // if(result){
// //     console.log('Regex test passed');
// // } else {
// //     console.log('Regex test failed');
// // }

// let result = username.search(pattern);
// console.log(result);