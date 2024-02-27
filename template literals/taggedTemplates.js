// Tagged Templates
// const nama = 'Anto';
// const umur = 30;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Highlight
const nama = 'Anto';
const umur = 30;
const email = 'anto@gmail.com'

function coba(strings, ...values){
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl"${values[i] || ''}</span>`,'');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adlah: ${email}.`;

document.body.innerHTML = str;