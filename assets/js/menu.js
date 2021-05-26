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

  $(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    // Do something
	    if(scroll > 400) {
	    	$( "#trBuscar" ).css("display", "block");
	    } else {
	    	$( "#trBuscar" ).css("display", "none");
	    }
	});
}

$(document).ready(main);