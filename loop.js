// // 1. **Toq sonlarni topish**
// let n = +prompt("Sonni kkiriting.");
// for (let i = 1; i < n + 1; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// // 2. **Raqamlar yig'indisi**
// let sumNumber = prompt("Sonni kiriting.");
// let sum = 0;
// for (let i = 0; i < sumNumber.length; i++) {
//     sum += Number(sumNumber[i]);
// }

// console.log("Raqamlar yig'indisi = ",sum);


// // 3. **Teskari satr**
// let teskariSatr = prompt("So'z kiriting.");
// let str = teskariSatr.length;
// let rev = '';
// for (let i = str - 1; i >= 0; i--) {
//     rev += teskariSatr[i];
// }
// console.log(rev);


// // 4. **Ko'paytirish jadvali**
// let N = Number(prompt("Sonni kiriting."));
// if (!isNaN(N)) {
//     for (let i = 1; i < 11; i++) {
//         console.log(`${N} x ${i} = ${N * i}`);
//     }
// } else {
//     alert("Iltimos faqat son kiriting.")
// }


// // 5. **Kalkulyator**
// let n = Number(prompt("Sonni kiriting."));
// let k = Number(prompt("Nechi marta qo'shmoqchisiz?"));
// let sum = 0;
// let count = 0;

// while (count < k) {
//     sum = sum + n;
//     count ++
// }
// console.log(sum);


// // 6. **Sonlar ketma-ketligi**
// let n = +prompt("N ni kiriting.");

// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// // 7. **Raqamlar o'rnini almashtirish**
// let number = prompt("Son kiriting:");
// let result = "";

// for (let i = 0; i < number.length; i++) {
//     if ((i + 1) % 2 === 0) {
//         result += "0";
//     } else {
//         result += number[i];
//     }
// }

// console.log(result);


// 8. **Ichma-ich loop**
let n = +prompt("n ni kiriting:");

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += (i * j) + "\t"; 
    }
    console.log(row);
}
