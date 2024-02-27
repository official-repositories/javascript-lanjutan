// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Anto'];

// const [salam, satu, dua, nama] = perkenalan; /*unpacked biasa*/
// bisa di unpacked sesuai keinginan namun tanda , harus disertakan (skipping items)
// const[salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(a); /*muncul 1*/

// Rest Parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values); /*sisa akan masuk ke array*/

// <------------------------------------------------------------------------------------------->

// Destructuring Object
// const mhs ={
//     nama: 'anto',
//     umur: 30
// }

// const { nama, umur } = mhs; /*nama dalam destructuring {} harus sama dengan nama object*/
// console.log(nama);

// Assignment tanpa deklarasi object
// bisa tanpa variable namun diganti dengan tanda ()
// ({ nama, umur } = { nama: 'anto', umur: 30 });
// console.log(nama);

// Assign ke variable baru
// const mhs ={
// nama: 'anto',
// umur: 30
// }
    
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan nilai default
// const mhs ={
//     nama: 'anto',
//     umur: 30
// }

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(nama);

// Memberi nilai dfeault & Assign ke variabel baru
// const mhs ={
//     nama: 'anto',
//     umur: 30,
//     email: 'anto@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs ={
//     nama: 'anto',
//     umur: 30,
//     email: 'anto@gmail.com'
// }

// const { nama, ...value } = mhs;
// console.log(value); /*sisa akan menjadi object*/

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs ={
//     nama: 'anto',
//     umur: 30,
//     email: 'anto@gmail.com'
// }

// function getIdMhs({ id }){
//     return id;
// }

// console.log(getIdMhs(mhs));