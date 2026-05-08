/* Calculate the sum of all even numbers from 1 to N */
 
let N:number=53
let count:number=0
for(let i:number=1;i<=N;i++){
    if(i%2==0){
        count=count+i
    }
}
console.log(`The sum of even numbers from 1 to ${N} is: ${count}`)