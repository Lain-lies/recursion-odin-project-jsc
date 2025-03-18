function divide(array){
    
    if(array.length === 0)
        return [];

    if(array.length === 1)
        return array;

    const mid = array.length / 2;
    const leftArray = divide(array.slice(0, mid));
    const rightArray = divide(array.slice(mid, array.length));
    
    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray){
    const sorted = [];

    while(leftArray.length !== 0 && rightArray.length !== 0){
        
        if(leftArray[0] < rightArray[0]){

            sorted.push(leftArray[0]);
            leftArray.shift();

        }else{

            sorted.push(rightArray[0]);
            rightArray.shift();
        }
         
    }

    let arrayWithElementsLeft;

    if(leftArray.length === 0 && rightArray.length === 0)
        return sorted;

    else if(leftArray.length === 0)
        arrayWithElementsLeft = rightArray;

    else
        arrayWithElementsLeft = leftArray;
        
    arrayWithElementsLeft.forEach(element => sorted.push(element))

    return sorted;
}

console.log(divide([101,2,10,5,0,-1,46,3]));