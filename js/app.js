fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(response => response.json())
    .then(data => {
      const valoresDolar = data.filter(d => d.casa.nombre.includes('Dolar'));
      const dolarOficial = valoresDolar.find(v => v.casa.nombre === 'Dolar Oficial');
      const dolarBlue = valoresDolar.find(v => v.casa.nombre === 'Dolar Blue');
      const dolarBolsa = valoresDolar.find(v => v.casa.nombre === 'Dolar Bolsa');
      const dolarSoja = valoresDolar.find(v => v.casa.nombre === 'Dolar Contado con Liqui');

      const valoresDolarElem = document.querySelector('#dolar-cinta');
      const dolarOficialElem = valoresDolarElem.querySelector('.odenDolares.d-oficial span');
      const dolarBlueElem = valoresDolarElem.querySelector('.odenDolares.d-blue span');
      const dolarBolsaElem = valoresDolarElem.querySelector('.odenDolares.d-bolsa span');
      const dolarSojaElem = valoresDolarElem.querySelector('.odenDolares.d-soja span');

      dolarOficialElem.textContent = `Compra $${dolarOficial.casa.compra}  -  Venta $${dolarOficial.casa.venta}`;
      dolarBlueElem.textContent = `Compra $${dolarBlue.casa.compra}  -  Venta $${dolarBlue.casa.venta}`;
      dolarBolsaElem.textContent = `Compra $${dolarBolsa.casa.compra}  -  Venta $${dolarBolsa.casa.venta}`;
      dolarSojaElem.textContent = `Compra $${dolarSoja.casa.compra}  -  Venta $${dolarSoja.casa.venta}`;
    });



    // EMAIL
    let forms = document.querySelector("form.reservation");
forms.addEventListener("submit", function (e) {
  let errores = [];
  let nameForm = document.querySelector("input.form-name")
  let emailForm = document.querySelector("input.form-email")
  let acc = 0;

  if (nameForm.value == "") {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, completa este campo)</span>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else if (nameForm.value.length < 3) {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, minimo tres caracteres)</span>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else if (soloLetras(nameForm.value) === false) {
    errores.push('<span class="errores-push danger">Nombre: (Por favor, ingresa solo letras)</span>')
    nameForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else {
    errores.push('<span class="errores-push pass">Nombre valido</span>')
    nameForm.setAttribute("style", "border-color:green;")
    acc += 1
  }
  //EMAIL
  if (emailForm.value == "") {
    errores.push('<span class="errores-push danger">Email: (Por favor, completa este campo)</span>')
    emailForm.setAttribute("style", "border-color: red;")

    acc += 0
  } else if (!validar_email(emailForm)) {
    errores.push('<span class="errores-push danger">Email: (Por favor, ingresa un Correo valido)</span>')
    emailForm.setAttribute("style", "border-color: red;")
    acc += 0
  } else {
    errores.push('<span class="errores-push pass">Correo valido</span>')
    emailForm.setAttribute("style", "border-color: green;")
    acc += 1
  }  
  borrarErrores()
  if (acc < 2) {
    e.preventDefault()
    let ulErrores = document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }
  } else {
    swal({
      title: "Gracias!",
      text: "Su solicitud ah sido recibida!",
      icon: "success",
      timer: 2000
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