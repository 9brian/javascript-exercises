const removeFromArray = function(array, ...args) {
// const removeFromArray = function(list, number) {

    // const newList = []

    // for(let i = 0; i < list.length; i++){
    //     if (list[i] != number){
    //         newList.push(list[i]);
    //     }
    // }

    // console.log(newList);
    // return newList;

    
  return array.filter(val => !args.includes(val))

};

// Do not edit below this line
module.exports = removeFromArray;
