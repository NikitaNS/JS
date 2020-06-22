var userName = prompt('Как вас зовут?');
var userSurname = prompt('Введите вашу фамилию');
var userBirthYear = prompt('Введите ваш год рождения');
var age = new Date().getFullYear() - userBirthYear;

if (age < 20 )
  {
    alert('Привет, ' + userName + ' ' + userSurname +'!');
  }
if (age >=20 && age <= 40)
  {
    alert('Добрый день, ' + userName + ' ' + userSurname + '!');
  }
if (age > 40 )
  {
    alert('Здравствуйте, ' + userName + ' ' +userSurname + '!');
  }
