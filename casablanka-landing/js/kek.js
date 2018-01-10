$(document).ready(function(){

    $('#nav-icon').click(function(){
      $(this).toggleClass('animate-icon');
      $('#overlay').fadeToggle();
    });

    $('#overlay').click(function(){
        $('#nav-icon').removeClass('animate-icon');
        $('#overlay').toggle();
    });

    $('a.yaklink[href*="#"]')
      .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function() {
        });
        }
      }
    });
    
    $('.wrapper__video').parent().click(function () {
      if($(this).children(".wrapper__video").get(0).paused){
          $(this).children(".wrapper__video").get(0).play();
          $(this).children(".wrapper__playpause").fadeOut();
      }else{
         $(this).children(".wrapper__video").get(0).pause();
          $(this).children(".wrapper__playpause").fadeIn();
      }
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})

$('.tab-btn').click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
});

$('#tab-all').click(function(){
    $('.branding-wrap, .design-wrap, .ui-wrap, .illustrations-wrap').removeClass("disNone");
});

$('#tab-branding').click(function(){
    $('.design-wrap, .ui-wrap, .illustrations-wrap').removeClass("disNone");
    $('.branding-wrap').addClass("disNone");
});

$('#tab-design').click(function(){
    $('.branding-wrap, .ui-wrap, .illustrations-wrap').removeClass("disNone");
    $('.design-wrap').addClass("disNone");
});

$('#tab-ui').click(function(){
    $('.branding-wrap, .design-wrap, .illustrations-wrap').removeClass("disNone");
    $('.ui-wrap').addClass("disNone");
});

$('#tab-illustrations').click(function(){
    $('.branding-wrap, .design-wrap, .ui-wrap').removeClass("disNone");
    $('.illustrations-wrap').addClass("disNone");
});

});

  
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       50,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();