function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return "Please Provide Valid Array."
    }
    else {
        let arr = [];
        for (let element of array) {
            if (!isNaN(element) && typeof element === 'number') {
                arr.push(element);
            }
        }
        return arr;
    }
}
console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]))

