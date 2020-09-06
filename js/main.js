// preloader delay
(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".preloader").length > 0)
        {
            $(".preloader").delay(100).fadeOut('slow');
        }
    });
})(jQuery)

// Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

/*side-navbar changing active class while clicking 
$(".sidenav a").on("click", function() {
  $(".sidenav a").removeClass("active");
  $(this).addClass("active");
});
*/

//nav-menu scroll when clicking
$('.nav-item a, .nowrap, #footer a, .get-started, .sidenav a').click(function() {
	var target = $(this.hash);

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1500, 'easeInOutExpo');
});

//nav-bar change active class while scrolling
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.nav-item , .sidebar').addClass('fixed');
        $('body section').each(function(i) {
            if ($(this).position().top <= windscroll + 10) {
                $('.nav-item a.active').removeClass('active');
                $('.nav-item a').eq(i).addClass('active');
                $('.sidenav a.active').removeClass('active');
                $('.sidenav a').eq(i).addClass('active');
            }
        });

    } 
}).scroll();

// Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('navbar-scroll');
    } else {
      $('#header').removeClass('navbar-scroll');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scroll');
  }

// Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // Initiate the wowjs animation library
  new WOW().init();

//sidenav open & close function
 function openNav() {
  $("body").css("overflow", "hidden");
  $(".sidenav").css("opacity", "1");
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  $("body").css("overflow", "visible");
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}