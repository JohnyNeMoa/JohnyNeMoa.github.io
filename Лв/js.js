/**function tr(x){
    let n = '#';
    for(i = 0; i < x; i++){
        console.log(n);
        n = n + '#';
    }
}
function num(a){
    let c=+ a;
    alert(c);
}

let a = prompt('Введите браузер');
if(a == 'Edge' || a == 'edge'){
    alert('You`ve ot th Edge!')
} 
else if( a == 'Chrome' || a == 'chrome' || a == 'Firefox' || a == 'firefox' || a == 'Safari' || a == 'safari' || a == 'Opera' || a == 'opera'){
    alert('Okay we support these browser too');
}
else {
    alert('We hope that this page looks ok!');
}

let number = +prompt('Введит число между 0 и 3');

if (number === 0){
    alert('Вы ввели число 0');
}
else if(number === 1){
    alert('Вы ввели число 1');
}
if(number === 2 || number === 3){
    alert('Вы ввели число 2, а может 3')
}
else{
    alert('Введите числа в указаном диапазоне')
}*/

////Массив

// let a = [2, 'text', 55];
// a.push('hevj');

// for (let i = 0; i < a.length; i++){
//     alert(a[i]);
// }

// for(let t of a){
//     alert(t);
// }

// let style = ['Джаз', 'Блюз'];

// style.push('Рок-н-ролл');
// alert(style);
// style[Math.round(style.length/2)-1] = 'Классика';
// alert(style);
// alert(style.shift());
// style.unshift('Реп', 'Регги');
// alert(style);

// let num = [24, 21, 58, 76, 94, 100, 11];

// for (let i = 0; i < num.length; i++){
//     console.log('Индекс '+i+' = '+num[i]);
// }

// let max = num[0];

// for(let i = 0; i < num.length; i++){
//     if(max < a[i]) max = a[i];
// }
// console.log("Максимальное значение = "+max);

// let s = 0;

// for(let j = 0; j < num.length; j++){
//     s += num[j];
// }
// console.log('Сумма = '+s)

// let a = [];

// for(let i = 0; i < 10; i++){
//     a.push(Math.round(Math.random()* 100));
// }

// console.log(a)

// let first_max = a[0];
// let second_max = -1;

// for(i = 1; i < a.length; i++){
//     if(first_max < a[i]){
//         first_max = a[i];
//     }
// }
// for(i = 1; i < a.length; i++){
//     if(second_max < a[i] && a[i] <first_max){
//         second_max = a[i];
//     }
// }

// for(let i = 0; i < a.length; i++){
//     if(first_max < a[i]){
//         second_max = first_max;
//         first_max = a[i];
//     }
//     else if(first_max != a[i] && second_max < a[i]){
//         second_max = a[i];
//     } 
// }
// console.log("Максимальное значение = "+first_max);
// console.log("Второй максмум = "+second_max)


// let b = [1, 3, 5, 6, 7, 'g', 'f', 12, 43];
// let e = [4, 3, 5, 23, 7, 'g', 'r', 2, 43];
// let g;

// for(let i = 0; i < b.length; i++){
//     for(let j = 0; j < e.length; j++){
//         if (b[i] === e[j]){
//             b.splice(i, 1)
//         }
//     }
// }
// console.log(b)