const compose = (...fn) => x => fn.reduceRight((res, f) => Array.isArray(f) ? f.map(x => x(res)) : f(res), x);
const partial = (fn, ...a) => (...b) => fn.apply(this, [...a, ...b]);

const data = [
    {
        fieldName: 'username'
    },
    {
        fieldName: 'email',
        validators: ['pattern', 'length']
    },
];

const parcing = (getValue, { fieldName }) => ({
    [fieldName]: getValue(fieldName)
});

const getValue = (fieldName) => ({
    'username': 'Alex',
    'email': 'mr.dart@mail.ru'
}[fieldName]);

compose(
    console.log,
    result => ({result}),
    x => x.map(partial(parcing, getValue))
)(data);