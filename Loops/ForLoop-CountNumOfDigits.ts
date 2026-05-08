/* Count Number of Digits in a Number */

let num:number=209
let count:number=0
for(let i:number=num;i>0;i=Math.floor(i/10)){
count++
}
console.log(count)