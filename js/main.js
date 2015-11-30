
// FOR MENU TOGGLE

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

console.log('y into the pipe?');

// FOR HAMBURGER ICON ANIMATION
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

// FOR NAV PAGE INDICATION
$(function() {
  $('nav a[href$="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

// FOR SPLASH SCREEN
$( document ).ready(function() {
  if($(".splash").is(":visible"))
  {
    $(".wrapper").css({"opacity":"0"});
  }
  $(".splash-arrow").click(function()
  {
    $(".splash").slideUp("800", function() {
        $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
     });
  });
});

/*
$(window).scroll(function() {
  var windTop = $(window).scrollTop();
  var splashHeight = $(".splash").height();
  
  if(windTop>(100)){
     $(window).off("scroll");
      $(".splash").slideUp("800", function() {
       $("html, body").animate({"scrollTop":"0px"},100);
     });
     $(".wrapper").animate({"opacity":"1.0"},800);
  } 
  else {
  
  }  
});
*/

$(window).scroll(function() {
      $(window).off("scroll");
    $(".splash").slideUp("800", function() {
    $("html, body").animate({"scrollTop":"0px"},100);
    $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
 });
 });