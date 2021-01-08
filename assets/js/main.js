/* intro-carousel */
$(document).ready(function () {
  "use strict";

  $('.intro-carousel').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    touchMove: false,
    infinite: true,
    autoplaySpeed:5500,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    swipe: false
  });

  $('#testimonialscard').slick({
    ltr: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    beforeChange: 'nextSlide',
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
    pauseOnFocus: false,

  });


  $("#blogCarousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
  });

    $(".selector").flatpickr({
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      disableMobile: "true"
    });


  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

});



/*nav-fixed*/
$(document).ready(function () {
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll == 0) {
      pure();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        hideNav();
      } else {
        showNav();
      }
      previousScroll = currentScroll;
    }

  });

  function hideNav() { $(".navbar").removeClass("is-visible").addClass("is-hidden"); }

  function showNav() { $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling").addClass("fixed-top"); }

  function pure() { $(".navbar").removeClass("is-visible").addClass("nav-pure").removeClass("fixed-top"); }

  $('#toggler').click(function () {
    if ($(window).width() <= 500) {
      mobileSize();
    } else {
      openNav();
    }
  });
});


/*sidenav*/
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("sideOverlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sideOverlay").style.display = "none";
}

function mobileSize() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("sideOverlay").style.display = "block";
}

/* nav-search-icon */
$('.search-icon').click(function () {
  $('.search-form').toggle(500);
});


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filter-button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});



/* Popup-gallery-Js */
$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
});


$(".js-example-theme-single").select2({
});


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
      $('body .section').each(function(i) {
          if ($(this).position().top <= windscroll + 110) {
              $('.nav-link.active').removeClass('active');
              $('.nav-link').eq(i).addClass('active');
          }
      });

  } else {

      $('.nav-link.active').removeClass('active');
      $('.nav-item:first-of-type').children().addClass('active');
  }

}).scroll();


init_pointer({
  pointerColor: "#FFF",
  ringSize: 15,
  ringClickSize: 10
});


/*global $*/
$(document).ready(function () {
  "use strict";
  
  var span = $('.letter'),
      tlSmell = new TimelineMax({repeat : -1});
      
  tlSmell
      .staggerFromTo($('svg .smell'), 3, {y: 50, autoAlpha: 0.5}, {y: -20, autoAlpha: 1}, 1);
  
  // tween max pol body 
  TweenMax.fromTo($('svg #body'), 3, {x: -1, repeat : -1, yoyo : true}, {x: 1, repeat : -1, yoyo : true}); 
});


function myFunction() {
  setTimeout(function(){ 'use strict';
    $(".loading").fadeOut(1000, function () {
		
		$("body").css("overflow", "auto");
	}); }, 1800);
}

myFunction();


/* Wow.Js */
new WOW().init();