// Declaración de las variables  
var boton = document.getElementById('btn');

// Declaramos las funciones que se emplearan al cargar la página
window.onload = function() {
  boton.addEventListener('click', showMenu);
};


function showMenu(){
  var menu=document.getElementById('options-menu');
  // Verificamos si el elemento contiene la clase con contains
  if(menu.classList.contains('disabled-menu')){
  // Añadimos la clase enabled-menu y removemos las demás
   menu.classList.remove('disabled-menu');
   menu.classList.add('enabled-menu');
  } else{
  // Añadimos la clase disabled-menu y removemos las demás
    menu.classList.remove('enabled-menu');
    menu.classList.add('disabled-menu');
  }
}