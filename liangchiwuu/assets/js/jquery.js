$(document).ready(function(){

  // determine device-width
  var rwd = window.matchMedia('(max-device-width: 960px)');

  // gotop button control
  $(function() {
    $('#gotop').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $('#gotop').fadeIn('fast');
      } else {
        $('#gotop').stop().fadeOut('fast');
      }
    });
  });

  // navigation button control
  var navDist;
  if (rwd.matches) {
    navDist = 90;
  } else {
    navDist = 60;
  }
  $('#intro-button').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#intro-detail-div').offset().top - navDist
    }, 800);
    event.preventDefault();
  });
  $('#skills-button').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#skills-div').offset().top - navDist
    }, 800);
    event.preventDefault();
  });
  $('#exp-button').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#exp-div').offset().top - navDist
    }, 800);
    event.preventDefault();
  });
  $('#contact-button').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#contact-div').offset().top - navDist
    }, 800);
    event.preventDefault();
  });

  // skills diagram animation control
  $(window).scroll(function() {
    $('.skills-diagram').each(function() {
    var imageTop = $(this).offset().top;
    //var imageBottom = imageTop + $(this).outerHeight();
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (imageTop < bottomOfWindow - 300) {
        $(this).addClass('bigEntrance');
      }
    });
  });

  // tools logo animation control
  $(window).scroll(function() {
    $('.tool-logo-entry').each(function() {
    var imageTop = $(this).offset().top;
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (imageTop < bottomOfWindow - 100) {
        $(this).addClass('fadeIn');
      }
    });
  });

  // schools exp animation control
  $(window).scroll(function() {
    $('#uofa-exp, #nctu-exp').each(function() {
    var imageTop = $(this).offset().top;
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (imageTop < bottomOfWindow - 75) {
        $(this).addClass('slideRight');
      }
    });
  });

});

