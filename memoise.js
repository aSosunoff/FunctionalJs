const sum = (a, b) => (console.log('запуск: ', a, b), (a + b));

const aaa = (a) => (console.log('запуск: ', a), a);

const memoise = (fn) => {
    const values = {
        values: {},
        get(key){
            let value = this.values[key];

            if(!value){
                value = fn.apply(this, key);
                this.values[key] = value;
            }

            return value;
        }
    };
    return (...a) => values.get(a);
}

const sumCached = memoise(sum);

console.log(sumCached(1,2));
console.log(sumCached(1,2));

const aaaCached = memoise(aaa);

console.log(aaaCached(1,2));
console.log(aaaCached(1,2));