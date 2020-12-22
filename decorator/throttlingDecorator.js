function throttlingDecorator(func, delay = 0) {
	let isCooldown = false;

	return function (...arg) {
		if (isCooldown) return;

		const result = func.apply(this, arg);

		isCooldown = true;

        setTimeout(() => (isCooldown = false), delay);
        
		return result;
	};
}

/* **TEST** */

function test() {
	return 1;
}

test = throttlingDecorator(test, 1000);
