let forms = document.querySelector("form.reservation");
forms.addEventListener("submit", function (e) {
  let errores = [];
  let nameForm = document.querySelector("input.form-name")
  let emailForm = document.querySelector("input.form-email")
  let messageForm = document.querySelector("textarea.form-message")
  let acc = 0;

  if (nameForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text112">Nombre: (Por favor, completa este campo)</a></i>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else if (nameForm.value.length < 3) {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text113">Nombre: (Por favor, minimo tres caracteres)</a></i>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else if (soloLetras(nameForm.value) === false) {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text114">Nombre: (Por favor, ingresa solo letras)</a></i>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else {
    errores.push('<i id="errorPush2" class="material-icons">check_circle<a class="errores-push lang" key="text115">Nombre valido</a></i>')
    nameForm.setAttribute("style", "border-color:green;")
    acc += 1
  }
  //EMAIL
  if (emailForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text116">Email: (Por favor, completa este campo)</a></i>')
    emailForm.setAttribute("style", "border-color: red;")

    acc += 0
  } else if (!validar_email(emailForm)) {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text117">Email: (Por favor, ingresa un Correo valido)</a></i>')
    emailForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else {
    errores.push('<i id="errorPush2" class="material-icons">check_circle<a class="errores-push lang" key="text118">Correo valido</a></i>')
    emailForm.setAttribute("style", "border-color: green;")
    acc += 1
  }
  //MENSAJE
  if (messageForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text119">Mensaje: (Por favor, completa este campo)</a></i>')
    messageForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else {
    errores.push('<i id="errorPush2" class="material-icons">check_circle<a class="errores-push lang" key="text120">Mensaje valido</a></i>')
    messageForm.setAttribute("style", "border-color: green;")
    acc += 1
  }
  borrarErrores()
  if (acc < 3) {
    e.preventDefault()
    let ulErrores = document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }
  } else {
    swal({
      title: "Gracias!",
      text: "Su mensaje a sido enviado!",
      icon: "success",
      button: "ok",
      timer: 4000
    });
  }
});
let ele = document.getElementById('parent');
function borrarErrores() {
  while (ele.lastChild) {
    ele.lastChild.remove();
  }
}
let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let reg = /^[a-zA-ZÀ-ÿ ]+$/;
function validar_email(email) {
  return (expReg.test(email.value)) ? true : false;
}
function soloLetras(str) {
  return (reg.test(str)) ? true : false;
}

document.querySelector(".hambur-desktop").addEventListener("click", function(){
  document.querySelector(".mn-dsktop").classList.toggle("show-menu");
});

document.querySelector(".close-menu").addEventListener("click", function(){
  document.querySelector(".mn-dsktop").classList.remove("show-menu");
});

let menuOptions = document.querySelectorAll(".desktop-menu li");

menuOptions.forEach(function(option) {
  option.addEventListener("click", function(){
      document.querySelector(".mn-dsktop").classList.remove("show-menu");
  });
});