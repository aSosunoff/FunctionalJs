function promiseDecorator(func) {
	return function (...arg) {
		try {
			return Promise.resolve(func.apply(this, arg));
		} catch (e) {
			return Promise.reject(e);
		}
	};
}

function test(x, y) {
	return `${x} ${y}`;
}

const obj = {
	name: "alex",
	getName() {
		return this.name;
	},
};

test = promiseDecorator(test);

obj.getName = promiseDecorator(obj.getName);
