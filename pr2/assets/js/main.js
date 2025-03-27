/* task1 */

function evenNumber(a, b) {
    a = prompt('Введите число а');
    b = prompt('Введите число b');

    for (i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i + " ")
        }
    }
}
evenNumber()

/* task2 */
function min(a, b) {
    a = prompt('Введите число а');
    b = prompt('Введите число b');

    if (a > b) {
        console.log('Меньшее число ' + b)
    }
    else if (a < b) {
        console.log('Меньшее число ' + a)
    }
}
min()

/* task3 */

let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);


let middleElement = Math.floor(styles.length / 2);
styles[middleElement] = 'Классика';
console.log(styles);


let firstElement = styles.shift();
console.log(firstElement);
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

