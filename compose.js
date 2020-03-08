/* Композиция, функция которая компонует несколько функций, которые производят какие лебо действия над входным параметром передавая результат слева на право */

/* Невозможно отладить если допустили ошибку */
/*
const mult5 = x => x * 5;
const add10 = x => x + 10;

const mult5AfterAdd10 = x => mult5(add10(x));

console.log(mult5AfterAdd10(5));
*/

/* Можно отладить */
/*
const mult5 = x => x * 5;
const add10 = x => x + 10;
*/

const compose = (...fn) => x => fn.reduceRight((res, f) => f(res), x);
const compose2 = (...fn) => x => fn.reduceRight((res, f) => Array.isArray(f) ? f.map(x => x(res)) : f(res), x);

const trace = x => { console.log(x); return x; };

/*
const mult5AfterAdd10 = compose(
    mult5,
    trace,
    add10,
    trace
);

console.log(mult5AfterAdd10(5));
*/

const classNameToMethodName = compose(
    x => x.join(''),
    x => x.map(c => c.substring(0, 1).toUpperCase() + c.substring(1)),
    x => x.split('-'),
    x => x.split('=').slice(0, 1).toString(),
    x => x.replace(/[\.\[\]]/g, '')
);

console.log(classNameToMethodName('.class-add-button'));
console.log(classNameToMethodName('[data-product-event-type="remove-click"]'));