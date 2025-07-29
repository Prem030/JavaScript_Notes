# Object references and copying
+ One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,


```javascript
let user = {
    name : 'prem',
    age : 23,
}

let user2 = uesr;

```
+ **A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference”**

```js

console.log(user.name)
console.log(user2.name)

user.name = 'Dhara'
console.log(user2.name)

```

+ In above code the refrence of the user object is stored in user2 not the whole object
+ there is still one object but two variable point on it we can access the value with any one variable
+ and we can access and change the value with any one of the variable


## **Comparison by reference**


```js
let user = {
    name : 'prem',
    age : 23,
}
let user2 = uesr;

alert( user == user2) // true
```
+ Two object equal if they point on a same object


```js
let a = {};
let b = {};
console.log(a == b) //false
```
- but two seperate objects are not equal even if they have same property and same vale



**Note:** constant object can be modified 
```js
const userPrem = {
    firstName : 'prem',
    sirName : 'dhara',
    age :22,
}
console.log(userPrem)
userPrem.age = 23;
console.log(userPrem)
```

+ we didn't change the refrence stored in the const we change the value on which the refrence point on

## **Cloning and merging, Object.assign**
```js
let game1 = {
    name:'god of war',
    releaseDate : 2018,
}
let clone1 = {}
for( key in game1){
    clone1[key] = game1[key] //this will create the independent clone changing values didn't affect original copy
}
console.log(clone1)
clone1.name = 'sekiro'
clone1.releaseDate = 2019
console.log(clone1)
console.log(game1) //changing clone didn't affect the original copy
```
+ Too create a clone object we replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

### ***we can use Object.assign*** 
```js
//syntax : Object.assign(dest,...sources)
```
+ The first argument dest is a target object.
+ Further arguments is a list of source objects.
+ It copies the properties of all source objects into the target dest, and then returns it as the result

```js
let game2 = {
    name : 'Elden ring',
    relesaeDate : 2022,

}
let gameOfYear = {};
Object.assign(gameOfYear,game2)
console.log(gameOfYear)
```

+ Object.assign() copies all properties from game2 and gameOfYear into user.
+ If the copied properites already exists then the properteis get overwritten.

## **Nested Colning**

+ until now we assume the properties of object are primitive but the project can be objects
```js
let currentUser = {
    name : {
        firstName :'Prem',
        lastName :'Dhara'
    },
    age : 23
}
```
***NOTE:*** we can't clone nested object using Object assign
```js
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
``` 
+ Any change in the nested value of clone if will affect the real copy 

+ to avoide the above error we use deep cloning or structured cloning
```js
currentUser.name.firstName = 'prem'
anotherUser = structuredClone(currentUser)
anotherUser.name.firstName = 'saurab'  // change the colone value
console.log(currentUser) // no effect on the real value
console.log(anotherUser)
```
