var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{998}(00)000-00-00'
    });



    $(document).ready(function(){


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


       
       

     


        
      });


      



$(document).ready(function(){


// for scrool bottom invincible 
  $(window).scroll(function(){
      if(this.scrollY > 400){
          $('#scrool_bottom').hide();
      }else{
          $('#scrool_bottom').show();
      }
// for scrool bottom invincible 

})



// for scrool top show and hide vvvvvvvvv
      $(window).scroll(function(){
        if(this.scrollY > 50){
          $('#btn-back-to-top').show();
        
        }else{
          $('#btn-back-to-top').hide();
      
        }
        if(this.scrollY > 200){
          $('#home2').show();
          $('#home1').hide();
        }else{
          $('#home2').hide();
          $('#home1').show();
        }
      })
// for scrool top show and hide^^^^^^^^^^






      // for scrool top on click
      $("#btn-back-to-top").click(function(){
        $(window).scrollTop(0).animate;
      })
      // for scrool top on click

   



      // footer to map vvvvvvvvv
      $("#footer_btn_map").click(function() {
        $('html, body').animate({
            scrollTop: $("#formsection").offset().top - 150
        }, 500);
    });
    // footer to map  ^^^^^^^^^



    

  
});



// aos vvvvvvvvvvv

AOS.init({
  offset: 80,
  duration: 1000
  });

// aos ^^^^^^^^^^
  
  $(window).on("load",function(){
    $(".loading").fadeOut("slow");
});
