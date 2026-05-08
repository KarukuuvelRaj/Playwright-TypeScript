/* Write a program to calculate the factorial of a given number using a while loop */
 
let num:number=7
let fact:number=1
while(num>=1){
    fact=fact*num
    num--
}
console.log(`The factorial of given number is: ${fact}`)