let startYear;
let endYear;

while(true) {
    startYear = prompt('Введи год начала отсчета', 'число');
    if (!isNaN(parseFloat(startYear)) && isFinite(startYear)){
        startYear = +startYear
        break;
    }
}

while(true) {
    endYear = prompt('Введи год конца отсчета', 'число');
    if (!isNaN(parseFloat(endYear)) && isFinite(endYear)){
        endYear = +endYear
        break;
    }
}

if (startYear > endYear) {
    startYear += endYear;
    endYear = startYear - endYear;
    startYear -= endYear;
}

for (let i = startYear; i <= endYear; i++ ) {
    if (i % 4 === 0 || (i % 100 === 0 && i % 400 === 0)) {
        console.log(i, ' -год високосный');
    }
}

