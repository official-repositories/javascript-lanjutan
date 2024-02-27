// Callback
// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan nama: ')
//     callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan( nama => alert(`halo, ${nama}`));

// <------------------------------------------------------------------------->

// Asynchronous Callback
const mhs = [
    {
        "nama": "Anto",
        "nomor": "042413543",
        "email": "anto@gmail.com",
        "jurusan": "Teknik Hukum",
        "idDosenWali": 1
    },
    {
        "nama": "Doddy",
        "nomor": "038391303",
        "email": "doddy@gmail.com",
        "jurusan": "Teknik Pangan",
        "idDosenWali": 2
    },
    {
        "nama": "Erik",
        "nomor": "044857193",
        "email": "erik@gmail.com",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 3
    }
];
console.log('mulai');
mhs.forEach(m => {
    for ( let i = 0; i < 1000000; i++){
        let date = new Date();
        }
        console.log(m.nama) /*synchronous dia blocking tidak akan menampilkan task 2 jika task 1 belum selesai*/
    }); 
console.log('selesai');

// <------------------------------------------------------------------------------------------------------------->

function getDataMahasiswa(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr === 4){
            if(xhr.status === 200){
                success(xhr.response);
            }else if(xhr.status === 404){
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', results => {
    const mhs = JSON.parse(results); /*agar tampil object bukan text*/
    mhs.forEach(m => console.log(m.nama)); /*looping agar yang tampil nama saja*/
}, () => {
});
console.log('selesai');


// <------------------------------------------------------------------------->

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success:(mhs) => {
        mhs.forEach(m => console.log(m.nama)); /*isinya sudah json dan sudah asynchronous*/
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');