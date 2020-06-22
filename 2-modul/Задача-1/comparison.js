let firstNumber;
let secondNumber;

while(true) {
    firstNumber = prompt('Введи первое число', 'число');
    if (!isNaN(parseFloat(firstNumber)) && isFinite(firstNumber)){
        break;
    }
}

while(true) {
    secondNumber = prompt('Введи второе число', 'число');
    if (!isNaN(parseFloat(secondNumber)) && isFinite(secondNumber)){
        break;
    }
}

if(+firstNumber > +secondNumber) {
    alert(`Первое число- ${firstNumber} больше второго- ${secondNumber}`)
}
if(+secondNumber > +firstNumber) {
    alert(`Второе число- ${secondNumber} больше первого- ${firstNumber}`)
}
if (+secondNumber === +firstNumber){
    alert(`Они равны ${firstNumber} = ${secondNumber}`)
}