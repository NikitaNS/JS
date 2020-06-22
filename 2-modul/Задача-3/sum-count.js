let number;
let sum = 0;

while (true) {
    number = prompt('Введите число');

    if(number === null){
        alert(`Сумма всех чисел равна: ${sum}`);
        break;
    }

    if(!isNaN(parseFloat(number)) && isFinite(number)) {
    sum += +number;
    }
}