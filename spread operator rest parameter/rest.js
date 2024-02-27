// Rest Parameter

// function myFunc (a, ...myArgs) {
//     // return`a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     // return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for(const a of angka){ /*ambil array 1 elemen untuk merepresentasikan*/
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a,b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// Array destructuring
// const kelompok1 = ['Anto', 'Erik', 'Harry', 'Fajar', 'Doddy'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object Destructuring
// const team = {
//     pm: 'Anto',
//     frontEnd1: 'Erik',
//     frontEnd2: 'Doddy',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Harry'
// }

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// Filtering
function filterBy(){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number',1,2, 'Anto', false, 10, true, 'Doddy'));
console.log(filterBy('string',1,2, 'Anto', false, 10, true, 'Doddy'));
console.log(filterBy('boolean',1,2, 'Anto', false, 10, true, 'Doddy'));