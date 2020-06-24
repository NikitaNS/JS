const RANDOM_NUMBER_RANGE = 21;
const RANDON_NUMBER = createRandomNumber(RANDOM_NUMBER_RANGE);

game();
//Функция создания загаданного числа
function createRandomNumber (randomNumberRange) {
    return (Math.floor(Math.random() * randomNumberRange));
};

//Получаем пользовательское число
function getUserNumber() {
    
    let userNumber = prompt('Введи число');
    if (userNumber === null) {
        return;
    }
    //Проверяем ввод пользователя на правильность(должен ввести число)
    if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber)) {
        console.log(Number(userNumber))
        return (Number(userNumber));
    }
    console.log(userNumber)
    getUserNumber();
}

//Проверяем пользовательске число с загаданным(randomNumber) числом
function checkUserNumber(randomNumber, userNumber) {
    
    console.log(userNumber)
    if (userNumber > randomNumber) {
        
        alert('Много');
        return false;
    }
    if (userNumber < randomNumber) {
        
        alert('Мало');
        return false;
    }
    if (userNumber == randomNumber) {
        
        alert('Угадал');
        return true;
    }
}

//Функция игры
function game() {
    
    //Узнаем результат функции проверки: пользовательсое число = загпдпнному?
    const GAME_RESULT = checkUserNumber(RANDON_NUMBER,getUserNumber())
    //Если не угада- запускаем еще одну попытку
    if (GAME_RESULT === false){
        game();
    }
}

