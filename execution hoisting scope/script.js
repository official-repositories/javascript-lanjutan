// Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'Anto';

// Creation phase pada Global Context (javascript akan mencari var dan function terlebih dahulu)
// nama var =  undefined
// nama function = fn()
// diatas dinamakan hoisting (var dan function akan otomatis dinaikkan ke atas)
// window = global Object
// this = window

// Execution phase

// contoh lain dari execution context dan hoisting

// console.log(sayHello()); (Error)

// var nama = 'Anto';
// var umur = 30;

// // console.log(sayHello()); (Aman)

// function sayHello() {
//     return `Halo , nama saya ${nama}, saya ${umur} tahun.`;
// }

// function akan dieksekusi terlebih dahulu oleh js karena function membuat Local Execution Context (bisa akses window dan arguments)
// yang didalamnya terdapat Creation dan Execution phase

// var nama = 'Anto';
// var username = '@wenakkkkk';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

function satu() {
    var nama = 'sandhika';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'erik';
satu();
dua ('doddy');
console.log(nama);