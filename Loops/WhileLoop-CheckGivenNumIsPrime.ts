/* Write a program to check if a given number is a prime number using a while loop */
 
let givenNum:number=15
let i:number=2
let isPrime:boolean=true
while(i<givenNum){
if(givenNum%i==0){
    isPrime=false
    break
}
i++
}
if(isPrime){
    console.log("Prime")
}else{
    console.log("Not Prime")
}