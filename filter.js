/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function inBetween(a, b) {
    return e => e >= a && e <= b
}

/**
 * 
 * @param {array} arr 
 */
function inArray(...arr) {
    return e => arr.includes(e);
}

let arr = [1, 2, 3, 4, 5, 7, 10];

console.log(arr.filter(inBetween(2, 4)));
console.log(arr.filter(inArray([5, 6, 7, 8, 9, 10])));