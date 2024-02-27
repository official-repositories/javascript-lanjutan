// For..Of
// Array
// const mhs = ['Anto', 'Doddy', 'Erik']; /*array adalah salah satu iterable*/

// 1. For biasa
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// 2. ForEach
// mhs.forEach(m => console.log(m));

// 3. For Of
// for ( const m of mhs ) {
//     console.log(m);
// }

// <----------------------------------------------------------------------------->

// String
// const nama = 'Anto';
// for(const n of nama) {
//     console.log(n);
// }

// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i}`);
// });

// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i}`);
// } /*for of tidak memiliki index*/

// <------------------------------------------------------------------------------>

// NodeList
// const liNama = document.querySelectorAll('.nama');

// // liNama.forEach(m => console.log(n.innerHTML));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// <------------------------------------------------------------------------------->

// Arguments

// function jumlahkanANgka() {
//     // return arguments.reduce((a,i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanANgka(1,2,3,4,5));

// <------------------------------------------------------------------------------->

// For In

const mhs = {
  nama: "Anto",
  umur: 30,
  email: "anto@gmail.com",
};

for (m in mhs) {
  console.log(m);
}

// kalo looping property dari object pake for in, kalo mau looping isi array dan iterable object yang lain pake for of
// mau ngambil value bukan property bisa panggil m sebagai index dari object console.log(mhs[m]);
