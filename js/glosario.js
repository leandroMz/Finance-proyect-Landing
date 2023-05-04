function changePagination(page) {
    // Ocultar todos los divs de paginación
    let paginationDivs = document.querySelectorAll('.glosario-texto > div[id^="pagination-"]');
    for (let i = 0; i < paginationDivs.length; i++) {
      paginationDivs[i].classList.add('hidden');
    }
    
    // Mostrar el div correspondiente a la página seleccionada
    let selectedDiv = document.querySelector('#pagination-' + page);
    if (selectedDiv) {
      selectedDiv.classList.remove('hidden');
    }


    let paginationButtons = document.querySelectorAll('#botones-de-paginacion button');
    for (let i = 0; i < paginationButtons.length; i++) {
      paginationButtons[i].classList.remove('active');
    }
    let selectedButton = document.querySelector('#botones-de-paginacion button:nth-child(' + page + ')');
    if (selectedButton) {
      selectedButton.classList.add('active');
    }

  }
  




  
  // Mostrar el primer div al cargar la página
  changePagination(1);
  
  function search() {
    let input, filter, glosarioTexto, divs, h6, i, txtValue;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    glosarioTexto = document.getElementsByClassName("glosario-texto")[0];
    divs = glosarioTexto.getElementsByTagName("div");
    for (i = 0; i < divs.length; i++) {
      h6 = divs[i].getElementsByTagName("h6")[0];
      txtValue = h6.textContent || h6.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }
  


  




// function search() {
//     var input = document.getElementById("search-box").value.toLowerCase();
//     var terms = document.getElementsByClassName("glosario-texto")[0].getElementsByTagName("p");
//     for (var i = 0; i < terms.length; i++) {
//       var text = terms[i].textContent.toLowerCase();
//       if (text.includes(input)) {
//         terms[i].style.display = "";
//       } else {
//         terms[i].style.display = "none";
//       }
//     }
//   }