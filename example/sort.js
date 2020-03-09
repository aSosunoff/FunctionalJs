const partial = (fn, ...a) => (...b) => fn.apply(this, [...a, ...b]);

const sort = (desc, a, b) => {
    switch (typeof a) {
        case "number":
            return (desc ? b - a : a - b);
        case "string":
            return ((desc ? a < b : a > b) ? 1 : -1);
        default:
            return true;
    }
}

const sortAsc = partial(sort, false);
const sortDesc = partial(sort, true);

console.log([1,5,2,6,3].sort(sortAsc));
console.log([1,5,2,6,3].sort((a, b) => sort(false, a, b)));

console.log([1,5,2,6,3].sort(sortDesc));
console.log([1,5,2,6,3].sort((a, b) => sort(true, a, b)));

/**
 *
 * @param {number} a
 * @param {number} b
 */
const byField = (fnSort, name) => (a, b) => fnSort(a[name], b[name]);

const sortAscByField = partial(byField, sortAsc);
const sortDescByField = partial(byField, sortDesc);

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(sortAscByField('name')));
console.log(users.sort(sortDescByField("surname")));

console.log(users.sort(sortAscByField('age')));
console.log(users.sort(sortDescByField("age")));