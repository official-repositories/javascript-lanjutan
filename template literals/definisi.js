// 1. Template Literals / Template string
const nama = "Anto";
const umur = 20;
// konkat
// console.log('Halo, nama saya ' + nama + ', dan saya' + umur + ' tahun.');
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// 2. Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert("halo!")}`);
const x = 11;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "anto",
  umur: 30,
  nomor: "04421635",
  email: "anto@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nomor">${mhs.nomor}</span>
</div>`;

console.log(el);
