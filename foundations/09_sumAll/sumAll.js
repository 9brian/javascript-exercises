const sumAll = function(firstNum, secondNum) {

    if (
        firstNum <= 0 || secondNum <= 0
        || 
        Number.isInteger(firstNum) == false
        ||
        Number.isInteger(secondNum) == false
    
    ){
        return "ERROR";
    } 

    

    let finalSum = 0;

    if (firstNum > secondNum){ 

        for(let i = secondNum; i <= firstNum; i++){
            finalSum += i;
        }

    } else { // first is less than second

        for(let i = firstNum; i <= secondNum; i++){
            finalSum += i;
        }
    }


    return finalSum

};

// Do not edit below this line
module.exports = sumAll;
