/* Write a program to check if a given number is a palindrome using a while loop */
let originalNum:number=3233213
let palindrome:number=originalNum
let reverseNum:number=0
while(originalNum>0){
    let digit:number=originalNum%10
    reverseNum=reverseNum*10+digit
    originalNum=Math.floor(originalNum/10)
}
if(palindrome === reverseNum){
    console.log(`The '${palindrome}' is a Palindrome number`)
}else{
    console.log(`The '${palindrome}' is not a Palindrome number`)
}