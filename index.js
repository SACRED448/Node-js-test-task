const xlsx = require('xlsx');
const fs = require('fs');


// Создание json-файла с данными из эксель
let workBook = xlsx.readFile('./read.xlsx');
let workSheet = workBook.Sheets['test'];
// Написание регулярных выражений
// /\d{2}.\d{2}./g ;
// let str = workSheet['A11'].v;
// console.log(str);
// const regExp = /\d{2}.\d{2}../g;
// let result = str.match(regExp).join('') ;
// console.log(result);

let data = {
    'Оператор': workSheet['B2'].v,
    'Дата/Время': workSheet['B5'].w,
    'Наименование':  {
        '1': workSheet['A11'].v,
        '2': workSheet['A12'].v,
        '3': workSheet['A13'].v,
        '4': workSheet['A14'].v,
        '5': workSheet['A15'].v,
        '6': workSheet['A16'].v
    },
    'Дата': {
        '1': workSheet['B11'].w,
        '2': workSheet['B12'].w,
        '3': workSheet['B13'].w,
        '4': workSheet['B14'].w,
        '5': workSheet['B15'].w,
        '6': workSheet['B16'].w
    },
    'Конц. [mg/L]': {
        '1': workSheet['C11'].v,
        '2': workSheet['C12'].v,
        '3': workSheet['C13'].v,
        '4': workSheet['C14'].v,
        '5': workSheet['C15'].v,
        '6': workSheet['C16'].v
    }
};
fs.writeFileSync('./datajson.json', JSON.stringify(data, null, 2));
