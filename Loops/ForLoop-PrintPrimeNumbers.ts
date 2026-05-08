/* Print Prime Numbers between 1 and 50 */

for(let i:number=1;i<=50;i++){
 let isPrime:boolean=true  
    if(i<=1){
        isPrime=false
    }else{
        for(let j:number=2; j*j<=i;j++){
        if(i%j==0){
            isPrime=false
            break
        }
    }
    }
    if(isPrime){
        console.log(i)
    }
}