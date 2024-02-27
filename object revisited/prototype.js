// prototyple inheritance version
// function Mahasiswa(nama, energy) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};
//     // let this = object.create(Mahasiswa.prototype); sebenarnya constructor parent sudah memiliki default yaitu .prototype jadi kita tidak usah membuat object baru yang dijadikan parent
//     this.nama = nama;
//     this.energy = energy;

//     // return mahasiswa;
//     // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy += jam;
//     return `Halo ${this.nama}, selamat main!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let anto = new Mahasiswa('Anto', 10);

// class version
class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan (porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  };

  main (jam) {
    this.energy += jam;
    return `Halo ${this.nama}, selamat main!`;
  };

  tidur (jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  };
}

let anto = new Mahasiswa('Anto', 10);
