// OBJECT LITERAL NOTATION

// NOT VERY MAINTAINABLE. REWRITING A LOT OF CODE

// const userUne = {
//     username: 'Seb',
//     email: 'seb@seb.com',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };

// console.log(userUne.email, userUne.username);

// const userTwo = {
//     username: 'Deb',
//     email: 'Deb@seb.com',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };

// console.log(userTwo.email, userTwo.username);

// const userThree = new User('Dse@des.com', 'seb');

//A CLASS IS LIKE A BLUEPRINT FOR AN OBJECT. IT DESCRIBES HOW ONE SHOULD BE MADE. PROPERTIES AND FUNCTIONALITY

// USER class
// {
//     username, 
//     email,
//     login(),
//     logout()
// };

// the 'new' keyword
// 1 - it creates a new object {}
// 2 - it binds the value of 'this' to the new object
// 3 - it calls the contructor function to 'build' the object

// class User {
//     constructor(userName, email){
//         // SET UP PROPERTIES ON THE OBJECT
//         this.userName = userName;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.userName} just logged in`);
        
//         return this;
//     }
//     logout(){
//         console.log(`${this.userName} has logged out`);

//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.userName} has a score of ${this.score}`);

//         return this;
//     }
// };

// CONSTRUCTOR FUNCTION OLD WAY

function User (userName, email ){
    this.userName = userName;
    this.email = email;
    
}

User.prototype.login = function(){
    console.log(`${this.userName} has logged it`);
    return this;
};

function Admin (userName, email, title){
    User.call(this , userName, email);
    this.title = title;
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //DELETE USER
};


// CLASS SYNTAX USE THIS
// class Admin extends User {
//     constructor(userName, email, title){
//         super(userName, email);
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter( u => u.userName !== user.userName);
//     }
// };

const userOne = new User('Adrian', 'adr@adr.com');
const userTwo = new Admin('Seb', 'Seb@seb.com', 'Powerlift');

// console.log(userOne, userTwo);

// let users = [userOne, userTwo];
// console.log(users);

// userTwo.deleteUser(userOne);
// console.log(users);

console.log(userOne, userTwo);


