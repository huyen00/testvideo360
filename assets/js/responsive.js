$(document).ready(function(){
   $("#icon_menu").click(function(){
    $(".list_menu").slideToggle();
   
   })

  
   if( $(document).width() < 321){
    $("#icon_menusub").click(function(){
       $(".list_menu").hide();
      });
      $("#icon_menu").click(function(){
         $(".menu_sub").hide();
      });
   }
   if( $(document).width() < 481 ){
      $("#icon_menusub").click(function(){
         $(".list_menu").hide();
        });
        $("#icon_menu").click(function(){
           $(".menu_sub").hide();
        });
     }
     if( $(document).width() < 601 ){
      $("#icon_menusub").click(function(){
         $(".list_menu").hide();
        });
        $("#icon_menu").click(function(){
           $(".menu_sub").hide();
        });
     }
     if( $(document).width() < 801 ){
      $("#icon_menusub").click(function(){
         $(".list_menu").hide();
        });
        $("#icon_menu").click(function(){
           $(".menu_sub").hide();
        });
     }
     if( $(document).width() < 993 ){
      $("#icon_menusub").click(function(){
         $(".list_menu").hide();
        });
        $("#icon_menu").click(function(){
           $(".menu_sub").hide();
        });
     }
   

   // menu mobile top
   $("#menu_mobile").click(function(){
      $(".menu_top_mobile").slideToggle();
   });
   
  });
  


 

