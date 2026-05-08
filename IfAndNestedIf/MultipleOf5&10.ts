/* Check if a number is a multiple of both 5 and 10 */
 
let input:number=3;
if(input%5==0){
if(input%10==0){
console.log(`The number ${input} is a multiple of 5 and 10`)
}else{
    console.log(`The number ${input} is only a multiple of 5`)
}
}else{
   console.log(`The number ${input} is not a multiple of 5 and 10`)
}