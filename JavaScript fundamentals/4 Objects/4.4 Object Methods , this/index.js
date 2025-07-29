let user = {
    name : 'prem',
    age : 23,
    
}

// user.sayHi = function() {
//   alert("Hello!");
// };
// user.sayHi();


// let user2 = {
//     name : 'sinchan',
//     age : 5,
//     sayHi : function(){
//         alert('hellow my name is ' + this.name)
//     }
// }
// user2.sayHi()


let user3 = {name : 'hanuman'}
let admin = {name : 'Ram'}

function sayName(){
    alert(this.name)
}

user3.func = sayName;
admin.func = sayName;

// these calls have different this
// "this" inside the function is the object "before the dot"
user3.func() // hanuman  (this == user)
admin.func() // Admin  (this == admin)