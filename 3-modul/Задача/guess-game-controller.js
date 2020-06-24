const RANDOM_NUMBER_RANGE = 21;
const RANDON_NUMBER = createRandomNumber(RANDOM_NUMBER_RANGE);

while(true) {
    const GAME_RESULT = checkUserNumber(RANDON_NUMBER,getUserNumber())
    console.log(GAME_RESULT)
    if(GAME_RESULT === true) {
        break;
    }
}

//Получаем пользовательское число
function createRandomNumber (randomNumberRange) {
    return (Math.floor(Math.random() * randomNumberRange));
};

//Проверяем пользовательске число с загаданным
function checkUserNumber(randomNumber, userNumber) {
    console.log(RANDON_NUMBER)
    if (userNumber === null) {
        return true;
    }
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

function getUserNumber() {
    let userNumber = prompt('Введи число');
    if (userNumber === null) {
        return userNumber;
    }
    //Проверяем ввод пользователя на правильность(должен ввести число)
    if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber)) {
        return (Number(userNumber));
    }
}

