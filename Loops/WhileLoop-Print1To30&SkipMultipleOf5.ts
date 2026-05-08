/* Write a program to print numbers from 1 to 30 but skip numbers that are multiples of 5. Use the continue statement within a while loop */
 
let i:number=1
while(i<=30){
    if(i%5==0){
        i++
        continue
    }
    console.log(i)
    i++
}