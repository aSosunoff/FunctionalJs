// Декоратор-шпион
const spyDecorator = (func) => {
	const wrapper = function (...arg) {
		wrapper.calls.push(arg);
		return func.apply(this, arg);
	};

	wrapper.calls = [];

	return wrapper;
};

// произвольная функция или метод
function work(a, b) {
	return a + b;
}

work = spyDecorator(work);

console.log(work(1, 2));
console.log(work(3, 2));
console.log(work.calls);
