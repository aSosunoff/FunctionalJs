function cacheDecorator(func) {
	const cache = new Map();

	return function (...arg) {
		const key = `${JSON.stringify(arg)}`;

		if (!cache.has(key)) {
			cache.set(key, func.apply(this, arg));
		}

		return cache.get(key);
	};
}

/* **TEST** */

function test() {
	console.log("123");
	return 1;
}

test = cacheDecorator(test);
