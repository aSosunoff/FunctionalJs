function debounceDecorator(func, delay = 0) {
	let timer = null;
	return function (...arg) {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, arg), delay);
	};
}

/* **TEST** */

function test() {
	console.log(1);
}

test = debounceDecorator(test, 1000);
