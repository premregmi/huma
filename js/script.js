//Event CountDown------------
 $('[data-countdown]').each(function() {
   var $this = $(this), finalDate = $(this).data('countdown');
   $this.countdown(finalDate, function(event) {
     $this.html(event.strftime('<span><h3>%D</h3>Days</span> <span><h3>%H</h3>Hours</span><span><h3>%M</h3>Minutes</span> <span><h3>%S</h3>Seconds</span>'));
   });
 });

// -Smooth Scrolling-----------
$(function() {
  $('.main-menu .navigation a, .btn').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Tab to top
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.scroll-top-wrapper').addClass("show");
    }
    else{
        $('.scroll-top-wrapper').removeClass("show");
    }
});
    $(".scroll-top-wrapper").on("click", function() {
     $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//Hide Logo
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header .logo').addClass("hide-logo");
    }
    else{
        $('header .logo').removeClass("hide-logo");
    }
});

// navigation
$('.main-menu .navigation').each(function(){
 var $ulHeight = $(this)[0].scrollHeight
$(this).css("margin-top", -$ulHeight/2);
});

$('.main-menu .navigation li a').each(function(){
var $menuTitle = $(this).attr('data-title');
$(this).parent('li').append('<span>');
$(this).parent('li').children('span').append($menuTitle);
    $(this).mouseenter(function(){
    $(this).parent('li').children('span').addClass('visible');
    });
    $(this).mouseleave(function(){
    $(this).parent('li').children('span').removeClass('visible');
    });
});


// Remove Placeholder
$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

// Carousel
$('.carousel').carousel({
        interval: 5000 //changes the speed
});

// Content Animation
new WOW().init();

//Gallery Slider
$(document).ready(function() { 
  $("#gallery-carousel").owlCarousel({
 
      autoPlay: 6000, //Set AutoPlay to 3 seconds
      pagination:false,
      navigation:true,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

// Event Slider
$(document).ready(function() { 
   $("#event-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  }); 
});

// highlight current day on opeining hours
$(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
});

// Testimonials
$(document).ready(function() {
 
  $("#testimonials").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
