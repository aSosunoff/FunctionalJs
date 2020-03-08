/* 
Каррировани - трансформация функции которая принимает несколько аргументов в функцию которая будет принимать 1 агрумент и 
возвращать функцию которая будет ожидать следующего агрумента. при последнем аргументе будет возвращать результат
*/

/**
 * @param {Function} fn
 * @returns {Function} Возвращает каррированную функцию следующего аргумента
*/
const curry = (fn, ...a) => (a.length >= fn.length)
	? fn.apply(this, a)
	: (...b) => curry.apply(this, [fn, ...a, ...b]);

let sum = (a, b) => a + b;
let sum2 = curry(sum)(2)(2);
let sum10 = curry(sum)(10);

console.log(sum(2, 10));
console.log(curry(sum)(2)(10));
console.log(curry(sum)(2, 10));
console.log(sum2);


function log(date, importance, message) {
	console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

console.log('\n');

log(new Date(), 'Средней важности', 'Какое то сообщение');
log(new Date(), 'Важно', 'Какое то сообщение');
log(new Date(), 'Очень важно', 'Какое то сообщение');

console.log('\n');

let logNowDate = curry(log)(new Date());
logNowDate('Средней важности', 'Какое то сообщение');
logNowDate('Важно', 'Какое то сообщение');
logNowDate('Очень важно', 'Какое то сообщение');

console.log('\n');

let logNowDateMiddle = curry(log)(new Date())('Средней важности');
let logNowDateImportant = curry(log)(new Date())('Важно');
let logNowDateVeryImportant = curry(log)(new Date())('Очень важно');
logNowDateMiddle('Какое то сообщение');
logNowDateImportant('Какое то сообщение');
logNowDateVeryImportant('Какое то сообщение');