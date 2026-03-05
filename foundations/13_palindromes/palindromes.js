const palindromes = function (string) {

    let reversedString = ""
    let cleanedString = ""

    for(let i = 0; i < string.length; i++){
        if (
            !(
            string[i] == "!" || 
            string[i] == "?" ||
            string[i] == "." ||
            string[i] == "," ||
            string[i] == " "
        )
        ){
            cleanedString += string[i].toLowerCase();
        }
        
    }

    for(let i = string.length - 1; i >= 0; i--){
        if (
            !(
            string[i] == "!" || 
            string[i] == "?" ||
            string[i] == "." ||
            string[i] == "," ||
            string[i] == " "
        )
        ){
            reversedString += string[i].toLowerCase();
        }
        
    }

    if (reversedString === cleanedString){
        return true;
    } return false;
    // return reversedString;

};

// Do not edit below this line
module.exports = palindromes;
