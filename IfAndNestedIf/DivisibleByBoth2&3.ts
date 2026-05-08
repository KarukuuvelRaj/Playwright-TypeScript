/* Check if a number is divisible by both 2 and 3 */
 
let num:number=2
if(num%2==0){
    if(num%3==0){
        console.log(`The number ${num} is divisible by both 2 and 3`)
    }else{
        console.log(`The number ${num} is divisible only by 2`)
    }
}else{
    if(num%3==0){
        console.log(`The number ${num} is divisible only by 3`)
    }
else{
        console.log(`The number ${num} is not divisible by both 2 & 3`)
    }
}