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


// // scrool top vvvvvvvv
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
// scrollFunction();
// };

// function scrollFunction() {
// if (
// document.body.scrollTop > 20 ||
// document.documentElement.scrollTop > 20
// ) {
// mybutton.style.display = "block";
// } else {
// mybutton.style.display = "none";
// }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;
// }

// // scrool top  ^^^^^ 








// for scrool bottom invincible 

$(document).ready(function(){


  $(window).scroll(function(){
      if(this.scrollY > 400){
          $('#scrool_bottom').hide();
      }else{
          $('#scrool_bottom').show();
      }

// for scrool bottom invincible 




// for scrool top vvvvvvvvv

      $(window).scroll(function(){
        if(this.scrollY > 50){
          $('#btn-back-to-top').show();
        }else{
          $('#btn-back-to-top').hide();
        }
      })



      $("#btn-back-to-top").click(function(){
        $(window).scrollTop(0);
      })




      // for scrool top ^^^^^^^^^^


})


  
});

AOS.init({
  offset: 70,
  duration: 1000
  });

