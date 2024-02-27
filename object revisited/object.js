// Berbagai cara membuat object pada javascript
// 1. Object lIteral (Tidak efektif dengan object yang banyak)
let mahasiswa = {
    nama: 'anto',
    energy: 10,
    makan: function (porsi) {
        this.energy = this.energy + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

// 2. Function Declaration
// method akan disimpan di memory selama satu kali
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log (`Halo ${this.nama}, selamat makan!`);
//     }, 
//     // Jangan lupa pakai , karena dia bentuknya object

//     main : function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     // Jika ada method baru pada object literal maka harus dibuat lagi
//     tidur : function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

function Mahasiswa(nama, energy) {
    let mahasiswa = {};
    // object nama dan energy akan mengacu pada parameter
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    // object makan dan main diisi oleh method diatas akan mengacu pada object diatas (diluar function mahasiswa dan tidak dibuat ulang)
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    // jika setiap ada method baru harus selalu dituliskan method barunya pad function declaration ini
    mahasiswa.tidur = methodMahasiswa.tidur;
    
    return mahasiswa; 
}

// lakukan instansi
// let anto = Mahasiswa('Anto', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 3. Constructor Function
// wajib menggunakan keyword new saat ingin menjalankan
function Mahasiswa(nama, energy) {
    // variable kosong dan nilai return dihilangkan dan setiap nama properti diganti dengan this karena constructor sudah menyediakan nilai variable kosong dan nilai return
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log (`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

// lakukan instansi (HARUS PAKAI NEW !!!! JIKA TIDAK KOMPUTER AKAN MENGANGGAP MEMBUAT FUNCTION DECLARATION DAN MENCARI NILAI VARIABLE KOSONG DAN NILAI RETURN)
// let anto = new Mahasiswa('Anto', 10);
// let doddy = new Mahasiswa('Doddy', 20);

// 4. Object create
// method akan disimpan di memory selama satu kali
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log (`Halo ${this.nama}, selamat makan!`);
    }, 
    // Jangan lupa pakai , karena dia bentuknya object

    main : function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    // Jika ada method baru pada object literal maka harus dibuat lagi
    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
}

function Mahasiswa(nama, energy) {
    // dengan object create tidak perlu menulis method secara berulang" di property function declaration
    // object create sama dengan {} namun kita bisa membuat parameter dengan isinya object parent
    // object create bisa didefinisikan dengan kita menghubungkan object dalam function kita dengan object luar
    let mahasiswa = Object.create(methodMahasiswa);
    // object nama dan energy akan mengacu pada parameter
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
        
    return mahasiswa; 
}

// lakukan instansi
let anto = Mahasiswa('Anto', 10);
let doddy = Mahasiswa('Doddy', 20);