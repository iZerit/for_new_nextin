// inputmask 
var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{998}(00)000-00-00'
    });
// inputmask 



    $(document).ready(function(){

        // map show for mobile
        $("#show_div_but").click(function(){
            $("#map_divv").show();
            $("#show_div_but").hide();
            $("#hide_div_but").show();
        });


        $("#hide_div_but").click(function(){
            $("#show_div_but").show();
            $("#map_divv").hide();
            $("#hide_div_but").hide();

        })
        // map show for mobile


       
       

     


        
      });


      



$(document).ready(function(){


// for scrool bottom invincible 
  $(window).scroll(function(){
      if(this.scrollY > 400){
          $('#scrool_bottom').fadeIn();
      }else{
          $('#scrool_bottom').fadeOut();
      }
// for scrool bottom invincible 

})



// for scrool top show and hide vvvvvvvvv
      $(window).scroll(function(){
        if(this.scrollY > 50){
          $('#btn-back-to-top').fadeIn();
        
        }else{
          $('#btn-back-to-top').fadeOut();
      
        }
        if(this.scrollY > 200){
          $('.home2').show();
          $('.home1').hide();
        }else{
          $('.home2').hide();
          $('.home1').show();
        }
      })
// for scrool top show and hide^^^^^^^^^^






      // for scrool top on click
      $("#btn-back-to-top").click(function(){
        $(window).scrollTop(0).animate;
      })  
      // for scrool top on click


    

  
});



// aos vvvvvvvvvvv

AOS.init({
  offset: 80,
  duration: 1000
  });

// aos ^^^^^^^^^^







// loaderni ochirish vvvvvvvvvvvv
  
  $(window).on("load",function(){
    $(".loader_div").fadeOut("slow");
});


// loaderni ochirish ^^^^^^^^^^^^









$(document).ready(function(){ 
  const $mapButton = $("#footer_btn_map")
  const $formDiv = $("#formsection")



     // footer to map vvvvvvvvv
     $mapButton.click(function() {
      $('html, body').animate({
          scrollTop: $formDiv.offset().top -150
      }, 500);

      $("#map_divv").show()
      $("#hide_div_but").show()
      $("#show_div_but").hide()
    

  });
  // footer to map  ^^^^^^^^^

})



