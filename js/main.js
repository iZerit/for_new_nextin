var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{998}(00)000-00-00'
    });



    function buttonClicked() {
        const hideDiv = document.getElementById('map_divv')
        if(hideDiv.style.display == 'none'){
            $("#map_divv").show();
        }else{
            $("#map_divv").hide();

        }
        }