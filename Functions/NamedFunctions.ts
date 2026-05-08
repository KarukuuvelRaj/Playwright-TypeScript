/* Named function Syntax:
 
function functionName(parameters):returnType{
 
} */
 
//Funtion with no parameters and return type
 
function add(){
console.log("Welcome")
}
add()
 
//Function with parameter and return type
 
function multiply(x:number, y:number):number{
    return x*y
}
console.log(multiply(3,10))
 
//Function with Rest parameters
 
let sum:number=0
function addition(...val:number[]){
for(let i:number=0;i<val.length;i++){
sum=sum+val[i]
}
console.log("The sum is:", sum)
}
addition(21,20,4,5)
 
//Rest parameters - Multiple types
 
function details(...det:(number | string)[]):number{
    return det.length
}
console.log(details("John", 30, 21345, "CSE"))
console.log(details("Jacob", 34, 12345))
 
//Function with Optional parameters
 
function opt(Name: string, Age: number, Dept?: string){
    console.log("Name is:", Name)
    console.log("Age is", Age)
    if(Dept!=undefined){
    console.log("Department is:", Dept)
    }
}
opt("Raj", 33, "CSE")
 
//Function with Default Parameters
 
function calDiscount(price:number, discount:number=.20):void{
    let disc=price*discount
    console.log("The Discount price is:", disc)
}
calDiscount(500,.30) // Here it will use the parameter 0.30 for calculation as it's explicity provided
calDiscount(500)  // Here it will use default parameter for calculation that is 0.20