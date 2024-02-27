// 1. Function Expression
// const tampilNama = function (nama){
//     return`Halo, ${Nama}`;
// }
// console.log(tampilNama('Anto'));

// 2. Arrow Function 1 parameter
// const tampilNama = (nama) => {return `Halo, ${nama}`;}
// console.log('Anto Muller')

// 3. Arrow Function 2 parameter
// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }

// console/log(tampilNama('Anto', 'Pagi'));

// 4. Implisit Return (parameter tidak pake () dan return dan tidak pake {})
// const tampilNama = nama => `Halo, ${nama}`; */return  dan {} juga tidak dibutuhkan jika parameter hanya satu (implisit return)
// console.log('Anto Muller') */jika satu paramater, maka parameter tidak usah didalam kurung. jika dua maka wajib ada dalam kurung di parameter*/

// 5. Tidak pakai parameter () wajib ada
// const tampilNama = () => `Hellow World`; jika tidak ada parameter dalam kurung () wajib ada
// console.log(tampilNama());

// <--------------------------------------------------------------------------------------------->

// Contoh Case
// (Function Expression)
// let mahasiswa = ['Sandhika Galih', 'Doddy Febriansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// (Arrow Function)
// let jumlahHuruf = mahasiswa.map (nama => nama.length);
// console.log(jumlahHuruf);

// (Arrow Function tapi ingin yang tampil Object)
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length })); */property dibungkus menggunakan ({}) jangan {} jika hanya {} js akan menganggap kita akan me return
// console.table(jumlahHuruf);

// <-------------------------------------------------------------------------------------------------------->

// This pada arrow function

// 1. Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'sandhika';
//     this.umur = 30;

//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`)
//     }
// }

// const sandhika = new Mahasiswa();

// 2. Arrow Function
// const Mahasiswa = function () { */function disini tidak bisa langsung dijadikan arrow function karean akan error */
//     this.nama = 'sandhika';
//     this.umur = 30;

//     this.sayHello = () => {  */Jika method disini bisa */
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`)
//     }
// }

// const sandhika = new Mahasiswa();

// 3. Object Literal
// const mhs1 = {
//     nama: 'anto',
//     umur: 30,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
//         // akan error karena arrow function tidak mengadaptasi konsep this
//     }
// }

// <---------------------------------------------------------------------------------------------------------------->

// const Mahasiswa = function () {
//     this.nama = 'sandhika';
//     this.umur = 30;

//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`)
//     }

//     // setInterval(function () { *function declaration* */ini akan undefined(not a number) karena akan di hoisting jadi this.umur akan mencari window */
//     //     console.log(this.umur);
//     // }, 500);

//     setInterval (() => { */karena arrow function tidak memilki konsep this maka this akan mencari ke lexical scope/keluar (context ini akan mengambil mahasiswa bukan global) */
//         console.log(this.umur++);
//     }, 500);
// }

// const sandhika = new Mahasiswa();

// <-------------------------------------------------------------------------------------------------------------------->

// Contoh Kasus REAL
const box = document.querySelector(".box");
box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";

    if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
    }
  // console.log(this); tidak bisa pakai arrow function karena konsep this
    this.classList.toggle("satu");
    setTimeout(() => {
    this.classList.toggle("dua");
    }, 600);
});
