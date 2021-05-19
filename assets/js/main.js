$(document).ready(function(){
    $(".fancyb").fancybox();
    $(".fancyform").fancybox({
        padding:    0
    });

    $("a.afancybox").fancybox();
    $("a.ifancybox").fancybox({'type':'iframe'});

    
     $('#notificationModal').modal('show'); 

     jQuery("#formID").validationEngine();

    $('#list').click(function(event){
      event.preventDefault();
      $('#tiendaaa .item').addClass('list-group-item');
    });
    
    $('#grid').click(function(event){
      event.preventDefault();
      $('#tiendaaa .item').removeClass('list-group-item');
      $('#tiendaaa .item').addClass('grid-group-item');
    });

   
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("800");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).hide();
            $(this).toggleClass('open');
        }
    );


    $('#tienda').carousel({
        interval:   8000
    });

     $('#tienda-mobil').carousel({
        interval:   8000
    });


    $('#tienda2').carousel({
        interval:   9000
    });

    $('#marcas').carousel({
        interval:   7000
    });


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 150) {
           $( "#trBuscar" ).show();
           $( ".busc2" ).hide();
           $( ".window" ).css('padding-top','50px');
           $( ".busc2 form" ).hide();
        }
    });

    $( "#trBuscar" ).on('click', function(e){
        $( ".busc2" ).show();
        $( ".busc2 form" ).show();
        $( ".window" ).css('padding-top','0px');
        $( "#inputBuscar" ).focus();
        e.preventDefault();
        return false; 
    });

   var $height = $(window).scrollTop();
   if($height > 50) {
        $('#bucas').addClass('actve-scroll');
    } else {
        $('#bucas').removeClass('actve-scroll');
    }


    $('.menu-toggle').click(function(){
        $(this).toggleClass('open');
    });



    $("#flechaArriba").click(function() {
    $("#campoNumero").val()++;
    });

    $("#flechaabajo").click(function() {
    $("#campoNumero").val()--;
    });


 
    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
    event.preventDefault();
    $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
    $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
    $('a[href="#toggle-search"]').closest('li').toggleClass('active');

    if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
      /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
      setTimeout(function() { 
        $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
      }, 100);
    }     
  });

  $(document).on('keyup', function(event) {
    if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
      $('a[href="#toggle-search"]').trigger('click');
    }
  });


  $( window ).resize(function() {
    location.reload();
  }); 



 
});

         jQuery(document).ready(function($) {
          var Body = jQuery('body');
          Body.addClass('preloader-site');
      });
      jQuery(window).load(function() {
          jQuery('.preloader-wrapper').fadeOut();
          jQuery('body').removeClass('preloader-site');
      });