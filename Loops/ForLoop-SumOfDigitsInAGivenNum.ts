/* Find Sum of Digits in a Number */
 
let num:number = 735489
let sum:number=0
for(let i:number=num;i>0;i=Math.floor(i/10)){
let digit:number=i%10
sum=sum+digit
}
console.log(`The sum of digits is: ${sum}`)