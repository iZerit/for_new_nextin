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