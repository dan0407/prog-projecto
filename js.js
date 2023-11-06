function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarPassword(password) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}
function login(){
    var email = document.getElementById("username").value 
var password = document.getElementById("password").value 

console.log(email,password)


if (email==="123@gmail.com"&& password==="12345678") {
    console.log("Datos válidos");
} else {
    console.log("Datos inválidos");
}
} 



