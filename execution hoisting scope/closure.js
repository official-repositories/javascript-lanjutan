function init(){
    let nama = 'anto'; /*local var*/
    function tampilNama(){   /*inner function (closure)*/
        console.log(nama); /*akses ke parent var akan mencari var local dulu jika tidak ada maka akan mencari keatas*/
    }
    tampilNama();
}
init();

//contoh lain closure
function init(){
    // let nama = 'anto';
    return function(){
        console.log(nama);
    }
}

let panggilNama = init();
panggilNama('sandhika');
panggilNama('doddy'); 

// contoh lain
function ucapkanSalam(waktu){
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('Anto');


// contoh latihan
let add = (function () {
    let counter = 0; /*closure*/
    return function () {
        return ++counter;
    }
})(); /*() gunanya membungkus dalam immediately invoke function jadi inner funtion saat dimasukkan ke variable akan lgsg di eksekusi inner functionnya */

counter = 100; /*tidak akan mengganggu closure*/

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());