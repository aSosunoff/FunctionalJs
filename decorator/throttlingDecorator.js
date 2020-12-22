function throttlingDecorator(func, delay = 0) {
	let isCooldown = false;
	let saveThis = null;
	let saveArgs = null;
	let IS_CALL = false;

	return function wrapper(...arg) {
		if (isCooldown) {
			IS_CALL = true;
			saveThis = this;
			saveArgs = arg;
			return;
		}

		func.apply(this, arg);

		isCooldown = true;

		setTimeout(() => {
			isCooldown = false;
			if (IS_CALL) {
				wrapper.apply(saveThis, saveArgs);
				IS_CALL = false;
			}
		}, delay);
	};
}

/* **TEST** */

function test(x) {
	console.log(x);
}

test = throttlingDecorator(test, 10000);
