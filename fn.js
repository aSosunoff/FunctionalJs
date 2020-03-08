const compose = (...fn) => x => fn.reduceRight((res, f) => Array.isArray(f) ? f.map(x => x(res)) : f(res), x);

// посчитать количество слов
// вывести только слова которые больше 5

const sourceStroke = `Functional programming is powerful and enjoyable to write. It's very cool!`;

/**
 * @param {string} str 
 */
const getArr = (str) => 
    str.split(' ');

/**
 * @param {string} str 
 */
const removeSpecificSign = (str) => 
    str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

/**
 * @param {string} str 
 */
const countWord = (arr) => 
    arr.length;

/**
 * @param {string} str 
 */
const getWord5 = (arr) => 
    arr.filter(e => e.length > 5);

/* 
function process(str){
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    let arrWord = str.split(' ');

    let countWord = arrWord.length;

    let getWord5 = arrWord.filter(e => e.length > 5);

    console.log('количество слов : \t\t\t\t', countWord);

    console.log('только слова которые больше 5 символов : \t', getWord5);    
}

process(sourceStroke);
 */

/* 
function process(str, getArrCallback, countWordCallback, removeSpecificSignCallback, getWord5Callback) {
    let arr = getArrCallback(removeSpecificSignCallback(str));
    console.log('количество слов : \t\t\t\t', countWordCallback(arr));
    console.log('только слова которые больше 5 символов : \t', getWord5Callback(arr));
}

process(sourceStroke, getArr, countWord, removeSpecificSign, getWord5); 
*/


const process = compose(
    x => x[1] ? (console.log('только слова которые больше 5 символов : \t', x[1]), x) : null,
    x => x[0] ? (console.log('количество слов : \t\t\t\t', x[0]), x) : null,
    [countWord, getWord5],
    getArr,
    removeSpecificSign
);

process(sourceStroke); 
