// Объект перодв времени
let timePeriods= {
    months : ['января', 'февраля', 'марта', 'апрлеля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],

    days : ['понедельник' ,'вторноки','среда','четверг','пятица','суббота','воскресенье']
}

// 
setInterval('console.log(getNowDate())', 1000) 

// Функция вывода сегодняней даты со временем
function getNowDate() {
    let d = new Date();
    return `Сегодня ${d.getDate()} ${getMonthName(d.getMonth())}, ${getDayName(d.getDay())}, ${d.getHours()} ${getHourName(d.getHours())} ${d.getMinutes()} ${getMinuteName(d.getMinutes())} ${d.getSeconds()} ${getSecondName(d.getSeconds())}`;
}

// Функция сопоставления номаера месяца с его номером
function getMonthName(monthNum) {
    for(let month in  timePeriods.months) {
        if (month == monthNum) {
            return timePeriods.months[month]
        }
    }    
}

// Фуккция сопоставления дня недели с его номером
function getDayName(dayNum) {
    for(let day in  timePeriods.days) {
        if (day == dayNum) {
            return timePeriods.days[day]
        }
    } 

}

// Функция склонения слова час в зависимости от численного колличества часов
function getHourName(hour) {
    if (hour === 1 || hour === 21) {
        return 'час';
    }
    if (hour < 5 && hour > 1 || hour === 22 || hour === 23) {
        return 'часа';
    }
    if (hour >= 5 || hour === 0) {
        return 'часов';
    }
}

// Функция склонения слова минута в зависимости от численного колличества  минут
function getMinuteName(minute) {
    if (minute % 10 === 1) {
        return 'минута';
    }
    if (minute >= 2 && minute <= 4 || minute >= 22 && minute <= 24 || minute >= 32 && minute <=34 || minute >=42 && minute <= 44 || minute >= 52 && minute <=54)  {
        return 'минуты';
    }
    if (minute === 0 || minute >= 5 && minute <= 20 || minute >= 25 && minute <= 30 || minute >= 35 && minute <= 40 || minute >=45 && minute <= 50 || minute >= 55 && minute <= 59) {
        return 'минут';
    }
}

// Фукция склонения слова секунда в зависимости от численного колличества секунд
function getSecondName(second) {
    if (second % 10 === 1) {
        return 'секунда';
    }
    if (second >= 2 && second <= 4 || second >= 22 && second <= 24 || second >= 32 && second <=34 || second >=42 && second <= 44 || second >= 52 && second <=54)  {
        return 'секунды';
    }
    if (second === 0 || second >= 5 && second <= 20 || second >= 25 && second <= 30 || second >= 35 && second <= 40 || second >=45 && second <= 50 || second >= 55 && second <= 59) {
        return 'секунд';
    }
}
