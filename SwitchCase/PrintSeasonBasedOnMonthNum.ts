/* Print the season based on the month number */
 
let season:number=9
switch(season){
    case 1:
    case 2:
    case 3:
        console.log("It is Spring")
        break;
    case 4:
    case 5:
    case 6:
        console.log("It is Summer")
        break;
    case 7:
    case 8:
    case 9:
        console.log("It is Autumn")
        break;
    case 10:
    case 11:
    case 12:
        console.log("It is Winter")
        break;
        default: console.log("Invalid number")
}