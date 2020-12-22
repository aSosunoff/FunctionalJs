function debounceDecorator(func, delay = 0) {
	let timer = null;

	const clearTimer = () => {
		clearTimeout(timer);
		timer = null;
	};

	return function (...arg) {
		if (timer) {
			clearTimer();
		}

		timer = setTimeout(() => {
			func.apply(this, arg);
			clearTimer();
		}, delay);
	};
}

/* **TEST** */

function test() {
	console.log(1);
}

test = debounceDecorator(test, 1000);
