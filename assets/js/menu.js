$(document).ready(main);

var contador = 1;

function main () {
  $('.icon-bar').click(function(){
    console.log(contador)
    if (contador == 1) {
      $('.nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('.nav').animate({
        left: '-100%'
      });
    }
  });

  // Mostramos y ocultamos submenus
  $('.submenuOf').click(function(){
    $(this).children('.children').slideToggle();
  });
}