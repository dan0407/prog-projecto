//La informacion de los usuario
const usuarios = [];
const storage = window.localStorage;

//Esta funcio se ejcuta al terminar de cargar la pag y se encarga de
//sacar del storage los usuario y llenar el arreglo "usuarios"
window.onload = function () {
  const usuariosLocal = storage.getItem("userInfo");
  const usuarioList = JSON.parse(usuariosLocal);

  usuarioList.forEach((user) => {
    usuarios.push(user);
  });

  console.log(usuarios);
};

function validarCorreo() {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  if (validarCorreoRegular(email)) {
    const newUser = { nombre: "xxxxxx", clave: "12345", correo: email };
    storage.setItem("newUsr", JSON.stringify(newUser));
    window.location.href = "pag2.html";
  } else {
    alert("Correo errado");
  }
}

function validarUsuarioyEdad() {
  let newUser = JSON.parse(storage.getItem("newUsr"));
  const usuarioField = document.getElementById("usuario");
  const usuario = usuarioField.value;

  const usuarioValido = validarUsuarioRegular(usuario);
  const mayorEdad = validarAdulto();

  if (usuarioValido) {
    if (mayorEdad) {
      newUser.nombre = usuario;
      storage.setItem("newUsr", JSON.stringify(newUser));
      window.location.href = "pag3.html";
    } else {
      alert("Debes ser mayor de 16 a#os...");
    }
  } else {
    alert(
      "El usuario debe ser de minimo 3 y maximo 10 caracteres y contener solo letras y numeros"
    );
  }
}

function validarAdulto() {
  const dobField = document.getElementById("fechaNacimiento");
  const dob = dobField.value;

  const edad = calcularEdad(dob);
  if (edad > 16) {
    return true;
  } else {
    false;
  }
}

function validarCorreoRegular(email) {
  // Expresion regular para validar correo
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Validar patron del la exprsion regular
  if (validEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validarUsuarioRegular(user) {
  let validUser = /^\w{3,25}$/;

  console.log(user);

  if (user.length > 25) return false;

  // Validar patron del la exprsion regular
  if (validUser.test(user)) {
    return true;
  } else {
    return false;
  }
}

function calcularEdad(dob) {
  let hoy = new Date();
  let cumpleanos = new Date(dob);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function validarClaves() {
  let newUser = JSON.parse(storage.getItem("newUsr"));
  const clave1Field = document.getElementById("clave1");
  const clave1 = clave1Field.value;

  const clave2Field = document.getElementById("clave2");
  const clave2 = clave2Field.value;

  if (clave1.length == 0 || clave2.length == 0) {
    alert("La clave no puede ser vacia ");
    return;
  }
  if (clave1 == clave2) {
    newUser.clave = clave1;
    usuarios.push(newUser);
    storage.setItem("userInfo", JSON.stringify(usuarios));

    // CONECTAR CON PAGINA PRINCIPAL
    window.location.href = "";

    console.log("Todo bien");
  } else {
    alert("Las claves son difrentes...corrija");
  }
}
