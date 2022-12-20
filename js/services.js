$(window).on("load",function(){
    $(".loader_div_service").fadeOut("slow");
  });

  
  $(window).scroll(function(){
    if(this.scrollY > 50){
      $('#btn-back-to-top').show();
    
    }else{
      $('#btn-back-to-top').hide();
  
    }
    if(this.scrollY > 200){
      $('.home2').show();
      $('.home1').hide();
    }else{
      $('.home2').hide();
      $('.home1').show();
    }
  })


  

// scrool to top vvvvvvv

  $("#btn-back-to-top").click(function(){
    $(window).scrollTop(0).animate;
  })  
// scrool to top ^^^^^^^





// aos vvvvvvvvvvv

AOS.init({
  offset: 80,
  duration: 1000
  });
// aos ^^^^^^^^^^