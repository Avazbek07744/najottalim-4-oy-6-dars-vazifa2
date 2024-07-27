//! 1-misol \\\

// let arr = [1, 5, 20, 2, 4, 5, 10];

// let max = arr[0] > arr[1] ? arr[0] : arr[1];
// let toMax = arr[0] < arr[1] ? arr[0] : arr[1];

// for (let i = 2; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > max) {
//         toMax = max;
//         max = num;
//     } else if (num > toMax && num < max) {
//         toMax = num;
//     }
// }

// console.log("Massivdagi ikkinchi eng katta element:", toMax);

//! 2-misol \\\

// let arr = ['salom', 2, true, 'xayr', 'bye']

// let res = []

// for (const iterator of arr) {
//     if (typeof iterator == 'string') {
//         res.push(iterator.length)
//     }
// }

// console.log(res);

//! 3-misol \\\

// let arr = [1, 5, 19, 20, 9, 5, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] = arr[i + 1];
//     }
// }

// const result = arr.filter(num => num % 2 != 0);

// console.log(result);

//! 4-misol \\\

//? 1-usul

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     res.unshift(arr[i])
// }

// for (let i = 0; i < res.length; i++) {
//     if (res[i] % 2 !== 0) {
//         res[i] = 0;
//     }
// }

// console.log(res);

//! 5-misol \\\

// let arr = [10, 5, 20, 20, 4, 5, 10];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i;
// }

// console.log("Indeks qiymatlari bilan almashtirilgan massiv:", arr);

//! 6-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = []

// for (const iterator of arr) {
//     if (iterator % 3 != 0) {
//         res.push(iterator)
//     }
// }

// console.log(res);

//! 7-misol \\\

// let arr = [10, 5, 20, 15, 4, 5, 10];

// let sum = 0;
// for (const num of arr) {
//     sum += num;
// }

// let res = [];
// for (const num of arr) {
//     res.push(num / sum);
// }

// console.log(res);

//! 9-misol \\\

// let arr = [1, -2, 3, 4, 5, -6, 7, -8, 9, 10]

// let res = []

// for (const iterator of arr) {
//     if (iterator > 0){
//         res.push(iterator)
//     }
// }

// console.log(res.length);

//! 10-misol \\\

// let arr = [1, -2, 3, 4, 5, -6, 7, -8, 9, 10];

// let sum = 0;

// for (const iterator of arr) {
//     if (iterator < 0) {
//         sum = sum + iterator
//     }
// }

// console.log(sum);

//! 11-misol \\\

// let arr = ["apple", "banana", "kiwi", "grape", "watermelon", "blueberry"];

// let res = [];
// for (const str of arr) {
//     if (str.length > 0) {
//         res.push(str[0]);
//     }
// }

// console.log(res);

//! 12-misol \\\

// const arr = [1, -5, 2, -4, 5, 10];

// let res1 = 1;
// let res2 = false;

// for (const num of arr) {
    // if (num > 0) {
        // res1 *= num;
        // res2 = true;
    // }
// }

// if (!res2) res1 = 0;

// console.log(res1);


//! 13-misol \\\

// let arr = ["apple", "banana", "kiwi", "grape", "watermelon", "blueberry"];

// let shortest = arr[0];
// let longest = arr[0];

// for (const str of arr) {
//     if (str.length < shortest.length) {
//         shortest = str;
//     }
//     if (str.length > longest.length) {
//         longest = str;
//     }
// }

// console.log("Eng uzun satr:", longest);
// console.log("Eng qisqa satr:", shortest);
