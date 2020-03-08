
/* Частичное применение. Функции которые имеют предзаполненые параметры */

const partial = (fn, ...a) => (...b) => fn.apply(this, [...a, ...b]);

function log(type, value){
    console.log(type, value);
}

const logSuccess = partial(log, 'success')

log('success', 'Сохранение прошло успешно');

logSuccess('Сохранение прошло успешно');