$(".menu-toggle").click(function(){
      $(".nav-menu").toggleClass("active");
    });
    
   
    $(".nav-links-btn").click(function(){
      $(".sign-up").addClass("modal-active");
    });
    $(".header-btn").click(function(){
      $(".sign-up").addClass("modal-active");
    });
    
    $(".close-btn").click(function(){
      $(".modal").removeClass("modal-active");
    });

    $(".login-form").click(function(){
      $(".sign-up").removeClass("modal-active");
    });
    $(".login-form").click(function(){
      $(".sign-in").addClass("modal-active");
    });
    
    
    
  
