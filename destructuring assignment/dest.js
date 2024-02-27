// Destructuring return value

// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah); /*output 5*/
// console.log(kali); /*output 6*/

// const[tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3); (array tidak boleh tertukar)
// console.log(bagi);

// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const{bagi, tambah, kurang, kali} = kalkulasi(2,3); (jika mau ditukar" maka pakai destructuring object)
// console.log(kurang);

// <----------------------------------------------------------------------------------------------------------------->

// Destructuring Function Arguments
const mhs1 = {
    nama: 'anto',
    umur: 30,
    email: 'anto@gmail.com',
    nilai : {
        uas: 90,
        uts: 95,
        tugas: 92
    }
}

function cetakMhs(nama, umur){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs(mhs1.nama, mhs1.umur));

// <-------Cara Lain--------->

// function cetakMhs(mhs){
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// <-------------pakai destructuring---------->
// function cetakMhs({nama, umur}){
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// bersarang
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));