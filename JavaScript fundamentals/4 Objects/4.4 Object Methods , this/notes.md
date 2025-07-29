# METHODS 

```js
let user = {
    name : 'prem',
    age : 23,
}

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi();

```

+ A **function** which is a property of the object called methods


```js

let user2 = {
    name : 'sinchan',
    age : 5,
    sayHi : function(){
        alert('hellow my name is ' + this.name)
    }
}
user2.sayHi()
```
+ user can declare methods inside an object also known as method shorthand
+ methdos needs to access the information stored inside the object to get the information use `this`
+ `this` point on the currrent object bocz here we know the object name but in real life we didn't know the object identifier which is variable name of the object so we use this. to get acces the information 
+ ***To access the object, a method can use the this keyword.***
+ value of the `this` is decided during run-time, according to the context

```js
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
```

**Difference between this in js and other programming language**
+ this refers to the object that is executing the current function. It’s very dynamic and its value depends on how the function is called.

 Feature                    | JavaScript                 | Java / C++ / Python            
 -------------------------- | -------------------------- | ------------------------------ 
 Binding of `this`          | Dynamic (runtime)          | Lexical (compile-time/static)  
 In regular function        | `window` or `undefined`    | N/A (no free-floating methods) 
 In class/method            | Object calling the method  | Current instance               
 Arrow functions            | Inherit from lexical scope | Not available                  
 Explicit declaration       | No                         | Python uses explicit `self`    
 Can change `this` manually | Yes (`call`, `bind`, etc)  | No                             

+ Arrow functions don’t bind their own this, so you should not use arrow functions for methods that rely on this referring to the object itself.