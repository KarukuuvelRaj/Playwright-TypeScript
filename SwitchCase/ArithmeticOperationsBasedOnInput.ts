/* Perform basic arithmetic operations based on user input */
 
let input:string='-'
let num1:number=7
let num2:number=5
 
switch(input){
    case '+':
        console.log(`Result is: ${num1+num2}`)
        break;
    case '-':
        console.log(`Result is: ${num1-num2}`)
        break;
    case '*':
        console.log(`Result is: ${num1*num2}`)
        break;
    case '/':
        console.log(`Result is: ${num1/num2}`)
        break;
    case '**':
        console.log(`Result is: ${num1**num2}`)
        break;
    default: console.log("Invalid operator")
}