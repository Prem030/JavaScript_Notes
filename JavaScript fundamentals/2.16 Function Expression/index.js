

// let showMessage = function (){
//     console.log('hello world')
    
// }

// let calcSum = function ( num1 , num2 ){
//     return num1 + num2 ;
// }

// let n1 = Number(prompt("enter first number"))
// let n2 = Number(prompt("enter second number"))

// alert(calcSum(n1 , n2))



function calcSum(num1 , num2) {
    return num1 + num2
}

function calcProduct(num1 , num2 ){
    return num1*num2
}


function calculator( choice , Sum , Product , n1 , n2){
    if(choice == 1) alert('the sum is : '+ Sum(n1 , n2));

    if (choice == 2) alert('the product is : ' + Product(n1 , n2))
}

let number1 = Number(prompt('enter first number'))
let number2 = Number(prompt('enter second number'))

let cho = Number(prompt('enter choice 1 sum and 2 Product'))
calculator(cho , calcSum , calcProduct , number1 , number2)