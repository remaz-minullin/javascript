/* task 1 */

let m = prompt('введите цену');
let n = prompt ('сколько у вас деняг')
if ( m < 0 ||  n < 0) {
    alert('ты че crazzy?')
}
else {
    if(m === n) {
        alert('покупка совершена')
    }
    else if (m > n) {
        p = m - n
        alert('у вас не хватает  ' + p)
    }
    else if (m < n) {
        p = n -m
        alert('ваша сдача  ' + p)
    }
    
}

/* task 2 */
let num = prompt('введи число')
if (num > 0) {
    alert(1)
}
else if (num < 0) {
    alert(-1)
}
else if (num == 0) {
    alert(0)
}

/* task 3 */
let a = prompt('введи а')
let b = prompt('введи b')
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result)
