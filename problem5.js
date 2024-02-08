function monthlySavings(arr, livingCost) {
    if(Array.isArray(arr)===false || typeof livingCost !== 'number'){
        return "invalid input"
    }
        let income = 0;
    let tex20 = 0;
    for (let element of arr) {
        income = income + element;
    }
    for (let item of arr) {
        let tex = 0;
        if (item >= 3000) {
            tex = item * 20 / 100;
        }
        tex20 = tex;
    }
    let result = income - tex20 - livingCost;
    if (result < 0) {
        return "earn more"
    }
    else {
        return result;
    }
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));