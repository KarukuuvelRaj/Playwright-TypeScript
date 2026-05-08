/* Write a program to find the largest digit in a given number using a while loop */
 
let num:number=735231;
let largest:number=0;
while(num>0){
    let digit:number=num%10
    if(digit>largest){
        largest=digit
    }
    num=Math.floor(num/10)
}
console.log(`Digit '${largest}' is the largest number`)