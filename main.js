//- логин и пароль должны быть указаны
//- логин - адрес электронной почты
//- в пароле могут присутствовать только буквы латинского алфавита и/или цифры
//- длина пароля должна быть не менее 6 символов

document.getElementById('signIn').onclick = function () {
    const containsLetters = /^[A-Za-z0-9]+$/;
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if (!(login == "" || password == ""))
    {
        if (!containsLetters.test(password)) 
            alert('в пароле могут присутствовать только буквы латинского алфавита и/или цифры');
        if (password.length <= 6) alert("длина пароля должна быть не менее 6 символов");
        alert("Добро пожаловать!");
    } 
    else {
        alert('Поля должны быть заполнены');
    }
        
}
