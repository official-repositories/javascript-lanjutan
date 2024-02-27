// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//         else {
//             console.log(xhr.responseText);
//         }
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers') /*fetch mengembalikan promise*/
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promise (Object yang mempresentasikan keberhasilan / kegagalan dari sebuah event yang asynchronous di masa yang akan datang)
// Janji (terpenuhi / ingkar) = States (fulfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch)

// contoh 1
// let ditepati = true;
// const janji! = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati')
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// console.log(janji1);

// janji1
//     .then(response => console.log('OK: ' + response))
//     .catch(response => console.log('NOT OK: ' + response));

// contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        },2000);
    } else {
        setTimeout(() => {
            resolve('tidak ditepati setelah bebrapa waktu!');
        },2000);
    }
});

console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2 /*tidak akan muncul pending tetapi langsung dijalankan*/
    .finally(() => console.log('selesai menunggu!'))
    .then(response => console.log('OK: ' + response))
    .catch(response => console.log('NOT OK: ' + response));
console.log('seleseai');

// Promise.all()
const film = new Promise (resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'anto',
            pemeran: 'doddy, erik'
        }])
    }, 1000);
});

const cuaca =  new Promise (resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: '26',
            kondisi: 'cerah berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });