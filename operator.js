// // 1. **Ball baholash**
// let baho = prompt("O'quvchini 1 dan 100 gacha baholang.");
// if (baho <= 100 && baho >= 90) {
//     alert("A'lo");
// } else if (baho < 90 && baho >= 70) {
//     alert("Yaxshi");
// } else if (baho < 70 && baho >= 60) {
//     alert("Qoniqarli");
// } else if (baho < 60 && baho >= 0) {
//     alert("Qoniqarsiz");
// } else {
//     alert("1 dan 100 gacha baholang!")
// }


// 2. **Hafta kunlari**
// let haftaKuni = +prompt("Hafta kunini raqamini kiriting (1 - 7) oralig'ida.");
// switch (haftaKuni) {
//     case 1:
//         alert("Yakshanba.");
//         break;
//     case 2:
//         alert("Dushanba.");
//         break;
//     case 3:
//         alert("Seshanba.");
//         break;
//     case 4:
//         alert("Chorshanba.");
//         break;
//     case 5:
//         alert("Payshanba.");
//         break;
//     case 6:
//         alert("Juma.");
//         break;
//     case 7:
//         alert("Shanba.");
//         break;
//     default:
//         alert("hafta kunini (1 - 7) oralig'ida kiriting.")
//         break;
// }


// // 3. **Yoshga qarab toifa aniqlash**
// let age = +prompt("yoshingizni kiriting.");
// if (age > 0 && age <= 12 ) {
//     alert("Bola");
// } else if (age > 12 && age < 20) {
//     alert("O'smir");
// } else if (age >= 20 && age < 60) {
//     alert("Katta");
// } else if (age > 60) {
//     alert("Qariya.")
// } else if (age < 0) {
//     alert("Hali tu'g'ulmagan.")
// } else {
//     alert("Go'dak");
// }


// // 4. **Katta son**
// let son1 = Number(prompt("Birinchi son: ?"));
// let son2 = Number(prompt("Ikkiinchi son: ?"));
// let son3 = Number(prompt("Uchinchi son: ?"));
// let katta = ((son1 > son2) ? son1 : son2) > son3 ? ((son1 > son2) ? son1 : son2) : son3;
// alert(`Eng katta son ${katta}`);


// // 5. **Oy kunlari**
// let oy = +prompt("Istagan oyingizni raqamini tanlang (1 - 12).");
// switch (oy) {
//     case 1:
//         alert("1 - oy Yanvarda 31 kun bor.");
//         break;
//     case 2:
//         alert("2 - oy Fevralda 28 kun bor.");
//         break;
//     case 3:
//         alert("3 - oy Martda 31 kun bor.");
//         break;
//     case 4:
//         alert("4 - oy Aprelda 30 kun bor.");
//         break;
//     case 5:
//         alert("5 - oy Mayda 31 kun bor.");
//         break;
//     case 6:
//         alert("6 - oy Iyunda 30 kun bor.");
//         break;
//     case 7:
//         alert("7 - oy Iyulda 31 kun bor.");
//         break;
//     case 8:
//         alert("8 - oy Avgustda 31 kun bor.");
//         break;
//     case 9:
//         alert("9 - oy Sentabrda 30 kun bor.");
//         break;
//     case 10:
//         alert("10 - oy Oktabrda 31 kun bor.");
//         break;
//     case 11:
//         alert("11 - oy Noyabrda 30 kun bor.");
//         break;
//     case 12:
//         alert("12 - oy Dekabrda 31 kun bor.");
//         break;
//     default:
//         alert("Bunday oy mavjud emas.")
//         break;
// }


// // 6. **Login tekshirish**
// let login = prompt("Loginni kiriting.");
// let parol = prompt("Parolni kiriting.");
// if (login == 'admin' && parol == '12345') {
//     alert("Xush kelibsiz, Admin");
// } else if (login == 'user' && parol == 'password') {
//     alert("Xush kelibsiz, Foydalanuvchi");
// } else {
//     alert("Login yoki parol xato");
// }


// // 7. **Fasl aniqlovchi**
// let fasl = +prompt("Istagan oyingizni raqamini tanlang (1 - 12).");
// switch (fasl) {
//     case 1:
//     case 2:
//     case 12:
//         alert("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Kuz");
//         break;
//     default:
//         alert("Bunday oy ham fasl ham mavjud emas.")
//         break;
// }


// // 8. **Raqamni so'zga o'girish**
// let raqamToSoz = +prompt("(1 dan 5) gacha raqam kiriting.");
// switch (raqamToSoz) {
//     case 1:
//         alert("Bir")
//         break;
//     case 2:
//         alert("Ikki")
//         break;
//     case 3:
//         alert("Uch")
//         break;
//     case 4:
//         alert("To'rt")
//         break;
//     case 5:
//         alert("Besh")
//         break;
//     default:
//         alert("Noto'g'ri raqam")
//         break;
// }


// 9. **Baho tavsifi**
let bahogaBaho = +prompt("O'quvchini 1 dan 5 gacha baholang.");
switch (bahogaBaho) {
    case 5:
        alert("A'lo")
        break;
    case 4:
        alert("Yaxshi")
        break;
    case 3:
        alert("Qoniqarli")
        break;
    case 2:
        alert("Qoniqarlisiz")
        break;
    case 1:
        alert("Yomon")
        break;
    default:
        alert("Noto'g'ri baho")
        break;
}