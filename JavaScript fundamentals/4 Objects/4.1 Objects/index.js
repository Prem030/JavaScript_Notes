let user = new Object(); // object using constructor
user = {}; // object using literals

user = {
    name : 'Prem Dhara',
    age : 23 ,
    collage : 'Nit Trichy ',
    Degree : 'M.C.A',
    year : 2026,
    isSingle : true ,
    'Fav Game' : 'chess',
} // name , age , collage , degrree ,  year , inSingle is called property name


// How to access property of objects
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.collage)
console.log(user.Degree)
console.log(user.year)
console.log(user.isSingle)
console.log(user["Fav Game"]) //to access mulitple word property


// for in loop 
for (const key in user) {
    console.log(user[key])
}




// To acces property according to use input
let key = prompt('enter you want to see')
alert(`the ${key} is : ${user[key]}`)


// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let propertyName = prompt('enter propety')
let propertyValue= prompt(`enter ${propertyName} value`)
let user2 = {
    [propertyName] : `${propertyValue}`,
}
console.log(user2[propertyName])


// Property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
let user3 = makeUser("John", 30);
alert(user3.name); // John


// Property existence test, “in” operator
console.log('name' in user)





// to remove property
delete user.isSingle