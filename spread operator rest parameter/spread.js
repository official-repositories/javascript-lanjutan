// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Anto', 'Doddy', 'Erik'];
// console.log(...mhs[0]);

// 1. Menggabungkan 2 atau lebih Array
// const mhs = ['Anto', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Alex'];
// const orang = [...mhs, 'Aji', ...dosen]; /*flexible*/
// // const orang = mhs.concat(dosen); /*concat tidak flexible*/
// console.log(orang);

// Mengcopy Array
// const mhs = ['Anto', 'Doddy', 'Erik'];
// // const mhs1 = mhs; /*salah (akan menimpa array yang pertama)*/
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// *Spread*
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML =  huruf;
