const angka =[-1, 2, 5, -8, 2, 6, -4, 7, 1, 9];

// mencari angka >= 3
// 1. for
// const newAngka = [];

// for (let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// 2. filter
// const newAngka = angka.filter(function(a){
//     return a => 3; 
// }); 
// console.log(newAngka);
// <------------------------------------ diubah menjadi arrow function ------------------------------>
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// 3. map
// kalikan semua angka dengan 2
// const newAngka = angka.map (a => a * 2);
// console.log(newAngka);

// 4. reduce
// jumlahkan seluruh elemen pada array
// -1 + 2 + 5 + -8 + 2 + 6 + -4 + 7 + 1 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue /*, disini ada nilai awal yaitu 0 bisa diubah sesuai kebutuhan */);
// console.log(newAngka);

// 5. method chaining
//  cari angka > 5 (filter) 
// kalikan * 3 (map)
// jumlahkan semua (reduce)
const hasil = angka.filter(a = a > 5)
    .map(a = a * 3)
    // bisa ditambahkan filter, map dan reduce lagi
    .reduce((acc, cur) => acc + cur, 0);
console.log(hasil);