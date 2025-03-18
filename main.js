function divide(array) {
    if (array.length <= 1) return array; // Handles both base cases

    const mid = Math.floor(array.length / 2);
    const leftArray = divide(array.slice(0, mid));
    const rightArray = divide(array.slice(mid));

    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
    let sorted = [];
    let i = 0, j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sorted.push(leftArray[i]);
            i++;
        } else {
            sorted.push(rightArray[j]);
            j++;
        }
    }

    return [...sorted, ...leftArray.slice(i), ...rightArray.slice(j)];
}

console.log(divide([101, 2, 10, 5, 0, -1, 46, 3]));
