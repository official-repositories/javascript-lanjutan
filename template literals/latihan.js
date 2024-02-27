// 1. HTML Fragments
// const mhs = {
//     nama: "anto",
//     umur: 30,
//     nomor: "04421635",
//     email: "anto@gmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nomor">${mhs.nomor}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'ray',
//         email: 'ray@gmail.com'
//     },
//     {
//         nama: 'anto',
//         email: 'anto@gmail.com'
//     },
//     {
//         nama: 'erik',
//         email: 'erik@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${nama}</li>
//     <li>${email}</li>
//     </ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Viva La Vida',
//     penyanyi: 'Coldplay',
//     feat: 'BTS'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `('feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang
const mhs = {
    nama: 'Anto',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemograman Sistem Interaktif',
        'Perancangan sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
