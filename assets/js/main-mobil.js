$(document).ready(function(){

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        if(scroll > 150) {
        	$( "#trBuscar" ).show();
        } else {
        	$( "#trBuscar" ).hide();
        }
    });
    $( "#trBuscar" ).click(()=>{
      $( "#inputBuscar" ).focus();
    });

var $height = $(window).scrollTop();
  if($height > 50) {
        $('#bucas').addClass('actve-scroll');
    } else {
        $('#bucas').removeClass('actve-scroll');
    }

var contador = 1;

function main () {
  $('.icon-bar').click(function(){
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
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();
  });
}



});

