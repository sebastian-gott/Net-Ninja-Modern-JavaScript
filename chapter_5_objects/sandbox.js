// Object literals

// const blogs = [
//     { title: 'Skole på 123', likes: 10 },
//     { title: 'Test test test', likes: 5 }
// ];

let user = {  
    name: 'Sebastian', 
    age: '22',
    email: 'seb@seb.no',
    location: 'Norway',
    blogs: [ 
        { title: 'Skole på 123', likes: 10 },
        { title: 'Test test test', likes: 5 } 
    ],
    login: function(){
        console.log('the user logged in');
    },
    logOut: () =>{
        console.log('the user logged out');
    },
    logBlogs(){
       //console.log(this.blogs); 
       console.log( 'this user has written the following blogs:' );
       this.blogs.forEach( blog =>{
           console.log(blog.title, blog.likes);
       });
    }
};

user.logBlogs();
console.log(this);

user.login();
user.logOut();



// console.log(user);
// console.log(user.name);

// user.age = 23;
// console.log(user.age);

// // [] Funker også

// const key = 'email';

// user['email'] = 'seb@live.no';
// console.log(user['email']);

// console.log(user[key]); 


// MATH OBJECT

console.log(Math);
console.log(Math.PI);
console.log(Math.LN2);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// RANDOM NUMBERS

const random = Math.random();

console.log(Math.round(random * 100));

// PRIMITIVE VALUES

let scoreOne = 40;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// REFERENCE VALUES

const userOne = { name: 'Seb', age: 22 };
const userTwo = userOne

console.log( userOne, userTwo );

userOne.age = 25;

console.log( userOne, userTwo );


