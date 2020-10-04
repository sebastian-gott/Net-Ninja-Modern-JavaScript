// QUERY SELECTOR AND QUERY SELECTORALL

// const para = document.querySelector('.reference');

// console.log(para);

// const paras = document.querySelectorAll('p');

// const errors= document.querySelectorAll('.test')

// paras.forEach(para =>{
//     console.log(para);
// });

// console.log(errors);


// // GET ELEMENT BY ID

// const title = document.getElementById('dom');
// console.log(title);


// // GET ELEMENT BY CLASS

// const references = document.getElementsByClassName('reference');
// console.log(references);


// const para = document.querySelector('p');

// //console.log(para.innerText);

// para.innerText = 'Test av endring';

// const parass = document.querySelectorAll('p');

// parass.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' test av fest';
// });

// const content = document.querySelector('.content')

//     content.innerHTML = ' <h3> dette er en innerHTML test </h3>';

//     const people = ['Seb', 'Adrian', 'Harald'];

//     people.forEach(person =>{
//         content.innerHTML += `<p>${person}</p>`;
//     });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.youtube.com');

// link.innerText = 'YouTube';

// const message = document.querySelector('p');

// console.log(message.getAttribute('class'));

// message.setAttribute('class', 'success');
// message.setAttribute('style', 'color: green');

// message.innerText = 'This is a link to YouTube';

// // STYLE IN JSB

// const title = document.querySelector('h1');

// title.style.margin = '50px';
// title.style.color = 'orange';
// title.style.fontSize = '60px';


// const content = document.querySelector('p');

// console.log(content);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const password = 'p@ss';


//     people.forEach(person =>{
//         content.innerHTML += `<p>${person}</p>`;
//     });


// const content = document.querySelectorAll('p');

// console.log(content);

// content.forEach(cont =>{
//     if (cont.innerText.includes('error')){
//         cont.classList.add('error');
//     }
//     else if (cont.innerText.includes('success')){
//         cont.classList.add('success');
//     }
// });



// if(content.includes('error')) {
//     content.classList.add('error');
// }
// else if (content.includes('success')){
//     content.classList.add('success');
// }

const article = document.querySelector('article');

// Array.from(article.children).forEach(child =>{
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);

// const bttn = document.querySelector('button');

// console.log(bttn);

// bttn.classList.add('click-bttn');
// bttn.addEventListener('click', () =>{
//     //console.log('you clicked');
//     const li = document.createElement('li');
//     li.textContent = 'New item';
//     ul.prepend(li);
// });

// const ul = document.querySelector('ul');

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', (e) =>{
//         //console.log('item clicked');
//         //console.log(e.target);
//         //e.target.style.textDecoration = 'line-through';
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

// ul.addEventListener('click', (e) =>{
//     if(e.target.tagName === "LI"){
//         e.target.remove();
//     }
// });

// const copy = document.querySelector('.copy-me')

// copy.addEventListener('copy', () =>{
//     console.log('Copyright');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', (e) =>{
    
//     box.textContent = ` X: ${e.offsetX}, Y: ${e.offsetY}`;
// });


// document.addEventListener('wheel', (e) =>{
//     console.log(e);
// });

const button = document.querySelector('.pop-up');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () =>{
    popup.style.display = 'none';
});



