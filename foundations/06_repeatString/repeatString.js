const repeatString = function(word, frequency) {
    
    let finalString = ""

    if (frequency < 0) {
        return "ERROR";
    } else if (frequency == 0) {
        return finalString;
    } else {
        for(let i = 0; i < frequency; i++){
            finalString += word
        }
    
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
