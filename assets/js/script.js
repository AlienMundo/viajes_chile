/* ------------------ TOOLTIP ----------------- */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* --------------- CAMBIO COLOR DESTACADOS --------------- */

function cambio_color () {
  $('.cards').toggleClass('bg-success')
}
$('.cards').on('dblclick', cambio_color)


/* ------------ CAMBIO COLOR FONDO ------------ */

function modo_light () {
  $('.contenedor-todo, .card-body').toggleClass('bg-light');
  $('#light').toggleClass('btn-dark');
  $('blockquote, h2, label, .card-body').toggleClass('text-black');
}


$('#light').on('click', modo_light)



/* ------------------ ALERTA CORREO ------------------ */

function enviar () {
  alert('Gracias por contactarnos, te responderemos a la brevedad :)')
}



/* ------- ESCONDER FORMULARIO ------ */

function esconder_formulario () {
  $('.formulario').toggleClass('d-none')
}
$('#hide-contacto').on('dblclick', esconder_formulario)


/* ------------------ SCROLL ------------------ */

const qs = document.getElementById('quienes-somos');

function quienes () {
  qs.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })  
};

$('#qs').on('click', quienes);

const ds = document.getElementById('destacados');

function destacados () {
  ds.scrollIntoView({
    behavior: 'smooth',
    block: 'center'   
  })
};

$('#ds').on('click', destacados);

const ct = document.getElementById('contacto');

function contacto () {
  ct.scrollIntoView({
    behavior: 'smooth',
    block: 'center'   
  })
};

$('#ct').on('click', contacto);


/* --------------- TRANSPARENCIA NAVBAR -------------- */


const fondo_navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY < 250) {
      $('.navbar').css("background-color", "transparent");
    } else if (window.scrollY >= 250) {
      $('.navbar').css("background-color", "#25A1AB");}
});


