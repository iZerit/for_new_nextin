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










      //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 40 ||
document.documentElement.scrollTop > 40
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}