function throttlingDecorator(func, delay = 0) {
	let isCooldown = false;
	let lastArg = null;

	return function wrapper(...arg) {
		if (isCooldown) {
			lastArg = arg;
			return;
		}

		func.apply(this, arg);

		isCooldown = true;

		setTimeout(() => {
			isCooldown = false;
			if (lastArg) {
				wrapper.apply(this, lastArg);
				lastArg = null;
			}
		}, delay);
	};
}

/* **TEST** */

function test(x) {
	console.log(x);
}

test = throttlingDecorator(test, 10000);
