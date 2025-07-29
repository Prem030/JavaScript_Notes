// console.log('hello world');

let value1 = prompt("enter something for value 1");
let value2 = prompt("enter something for value 2");
let value3 = prompt("enter something for value 3");

let realValue =( value1 ?? value2 ?? value3 ?? "enter something valid");
console.log(realValue)
console.log(value3)
alert('The valid value : '+ realValue)