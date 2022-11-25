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





// for scrool bottom invisible 

$(document).ready(function(){


  $(window).scroll(function(){
      if(this.scrollY > 400){
          $('#scrool_bottom').hide();
      }else{
          $('#scrool_bottom').show();
      }

// for scrool bottom invisible 


      $(window).scroll(function(){
        if(this.scrollY > 300){
          $('#btn-back-to-top').show();
        }else{
          $('#btn-back-to-top').hide();
        }
      })


      $("#btn-back-to-top").click(function(){
        $(window).scrollTop(0);
      })

  })



});

