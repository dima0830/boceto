$(document).ready(function(){
$(".fancyb").fancybox();
    $(".fancyform").fancybox({
        padding:    0
    });

    $(".dropdown").focus(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    /*Buscador*/
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

});

   jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fa fa-caret-up" aria-hidden="true"></i></div><div class="quantity-button quantity-down"><i class="fa fa-caret-down" aria-hidden="true"></i></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    /* input carrito */

        jQuery('<div class="inputnumber-nav"><div class="inputnumber-button inputnumber-up"><i class="fa fa-caret-up" aria-hidden="true"></i></div><div class="inputnumber-button inputnumber-down"><i class="fa fa-caret-down" aria-hidden="true"></i></div></div>').insertAfter('.inputnumber input');
    jQuery('.inputnumber').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.inputnumber-up'),
        btnDown = spinner.find('.inputnumber-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });