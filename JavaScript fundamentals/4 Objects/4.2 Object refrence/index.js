// copying an object
let user = {
    name : 'prem',
    age : 23,
}
let user2 = user;
console.log(user.name)
console.log(user2.name)
user.name = 'Dhara' //changing the property with refrenced variable as the variables point to the same value we can use any variable to change value
console.log(user2.name) //



//comparing two objects
console.log(user == user2) // two objects are equal when they point on the same object
let a = {};
let b = {};
console.log(a == b) //false if objects not point on the same object then they are not equal even if the property and property values are same



//const object porperty can be changed bocz we are not change the refrence that stored in const variable
const userPrem = {
    firstName : 'prem',
    sirName : 'dhara',
    age :22,
}
console.log(userPrem)
userPrem.age = 23;
console.log(userPrem)


//cloning the objects
let game1 = {
    name:'god of war',
    releaseDate : 2018,
}
let clone1 = {}
for( key in game1){
    clone1[key] = game1[key] //this will create the independent clone changin values didn't affect original copy
}
console.log(clone1)
clone1.name = 'sekiro'
clone1.releaseDate = 2019
console.log(clone1)
console.log(game1) //changing clone didn't affect the original copy



// we can also use object.assign to craete a duplicate of an object
let game2 = {
    name : 'Elden ring',
    relesaeDate : 2022,

}
let gameOfYears = {};
Object.assign(gameOfYears,game2)
console.log(gameOfYears)



// object as property of the object (nested object)
let currentUser = {
    name : {
        firstName :'Prem',
        lastName :'Dhara'
    },
    age : 23
}

let anotherUser  ={};
Object.assign(anotherUser , currentUser)
anotherUser.name.firstName = 'vishal' //if we change the nested value in clone if will affect original copy 
console.log(currentUser)

//to avoide the above error we use deep cloning or structured cloning
currentUser.name.firstName = 'prem'
anotherUser = structuredClone(currentUser)
anotherUser.name.firstName = 'saurab' 
console.log(currentUser)
console.log(anotherUser)