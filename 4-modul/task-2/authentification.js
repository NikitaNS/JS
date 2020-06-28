// Массив объектов с данными пользователя
let users = [
    {
        name: "Nikita",
        login: "nik",
        password: "qwerty"
    },

    {
        name: "Ivan",
        login: "vai",
        password: "qazwsx"
    },

    {
        name: "Irina",
        login: "iri",
        password: "admin"
    }
]

authentificaton();

// Функция аутентификации
function authentificaton() {
    let inputLogin = prompt("Insert ypu login:")
    for (let user in users) {
        if (inputLogin === users[user].login) {
            let inputPassword = prompt("Insert your paswword:")
            if (inputPassword === users[user].password) {
                alert(`Hello, ${users[user].name}`);
                return;
            }
            else {
                alert("Wrong password or login");
                authentificaton();
            }
        }
    }
    alert("Wrong password or login");
    authentificaton();
}
