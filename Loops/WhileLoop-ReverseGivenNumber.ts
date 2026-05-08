/* Write a program to reverse a given number using a while loop */
 
let num:number=1234
let reverse:number=0
while(num>0){
let digit:number=num%10
reverse=reverse*10+digit
num=Math.floor(num/10)
}
console.log(`The reversed number is ${reverse}`)