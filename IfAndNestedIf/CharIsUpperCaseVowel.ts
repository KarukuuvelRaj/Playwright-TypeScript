/* Check if a character is an uppercase vowel */
 
let char:string='I'
if(char>='A' && char<='Z'){
    if(char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
        console.log(`Yes, the character '${char}' is an uppercase vowel`)
    }else{
        console.log(`The character '${char}' is an uppercase but not a vowel`)
    }
}else{
    console.log(`The character '${char}' is not an uppercase vowel`)
}