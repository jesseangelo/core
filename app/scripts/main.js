'use strict';

/* General scripts */
$('.minimize-sidebar').click(function() {
  
    $(this).hide();  
    $('.maximize-sidebar').show();
    $('#sidebar .content-minimized').show();
    $('#sidebar .content-maximized').hide();
    $('#sidebar').addClass('minimized').removeClass('col-md-3');
    $('#mainWindow').addClass('maximized').removeClass('col-md-9');
    $('.actionbar-fixed-bottom').addClass('maximized');
    
  /*
  $('#sidebar').addClass('animated slideOutLeft', function() {
    $(this).hide();  
    $('.maximize-sidebar').show();
    $('#sidebar .content-minimized').show();
    $('#sidebar .content-maximized').hide();
    $('#sidebar').addClass('minimized').removeClass('col-md-3');
    $('#mainWindow').addClass('maximized').removeClass('col-md-9');
  });
  */  
});

$('.maximize-sidebar').click(function(){
  $('#sidebar').removeClass('minimized').addClass('col-md-3');
  $('#mainWindow').removeClass('maximized').addClass('col-md-9');
  $(this).hide();
  $('.minimize-sidebar').show();
  $('#sidebar .content-minimized').hide();
  $('#sidebar .content-maximized').show();
  $('.actionbar-fixed-bottom').removeClass('maximized');
});

$('.minimize-topbar').click(function(){
  minimizeTopbar();
});

var minimizeTopbar = function() {
  $('#topbar').addClass('minimized');
  $('.minimize-topbar').hide();
  $('.maximize-topbar').show();
  $('#topbar .content-minimized').show();
  $('#topbar .content-maximized').hide();
};

$('.maximize-topbar').click(function(){
  $('#topbar').removeClass('minimized');  
  $(this).hide();
  $('.minimize-topbar').show();
  $('#topbar .content-minimized').hide();
  $('#topbar .content-maximized').show();
});

$('.search').click(function(){
  $('.global-search').toggle();
});

/* end general scripts */

/* Workflow scripts */
$('section.workflow-step, section.workflow-end').hide();

$('.workflow .btn-start').click(function() {
  $('.workflow .workflow-start').hide();
  $('.workflow-sample .workflow-step').first().show();
});

$('.workflow .btn-next').click(function() {
  $(this).parents('section.workflow-step').hide();
  $(this).parents('section.workflow-step').next().show();
});

$('.workflow .btn-finish').click(function() {
  $(this).parents('section.workflow-end').hide();
  $('section.workflow-start').show();
});

$('.workflow .btn-cancel').click(function() {
  $(this).parents('section[class^="workflow-"]').hide();
  $('section.workflow-start').show();
});


/* end workflow scripts */

/* button scripts */
var p = true;
$('.fa-spin').hide();
$('.fa-check').hide(); 

$('.section-demo-buttons .btn-warning').click(function(){
  if(p) {
    p = false;
    $('.fa-spin').show();
    $('.section-demo-buttons .btn-warning .btn-label').text(' Saving');
    var change = function() {
      $('.section-demo-buttons .btn-warning').addClass('btn-success');
      $('.section-demo-buttons .btn-warning .btn-label').text(' Success');
      $('.fa-spin').hide();
      $('.fa-check').show();
    };
    setTimeout(change, 1500);
  
  } else {
    p = true;
    (function() {
      $('.section-demo-buttons .btn-warning').removeClass('btn-success');
      $('.section-demo-buttons .btn-warning .btn-label').text('Primary');
      $('.fa-check').hide();
    })();
  }
});
/* end button scripts */

/* nav scripts */

var isBackdropped = false;
$(document).ready(function () {
  $('.nav .dropdown').on('show.bs.dropdown', function () {
    if(!isBackdropped) {
      $('<div class="menu-backdrop fade in"></div>').appendTo(document.body);
      isBackdropped = true;
    }
  });

  $('.dropdown').on('hide.bs.dropdown', function () {
    removeBackdrop();
  });

});

var removeBackdrop = function() {
  $('.menu-backdrop').remove();
  isBackdropped = false;
};

$(document).on('click', function () {
  removeBackdrop();
});


//Function to the css rule
function checkSize(){
    //mobile
    if ($(".mediaTest").css("float") == "none" ) {
        
        $('.actionbar-fixed-bottom').removeClass('maximized');
        $('#mainWindow').removeClass('maximized');
    //desktop
    } else if ($(".mediaTest").css("float") == "left" ) {
      
      if ($('#sidebar').hasClass('minimized')) {
        $('.actionbar-fixed-bottom').addClass('maximized');
        $('#mainWindow').addClass('maximized');
      }
    }
}



$(window).scroll(function(){
  if( $(window).scrollTop() != 0 ) {
    $('.navbar-custom').addClass('scrolling');
  } else {
    $('.navbar-custom').removeClass('scrolling');
  }
});

/* end nav scripts */

/* Actionbar scripts */
$(document).ready(function () {
    // run test on initial page load
    checkSize();
    minimizeTopbar();

    // run test on resize of the window
    $(window).resize(checkSize);
    
    $('.toggleActionbar').click(function(){
      $('.actionbar-fixed-bottom').toggle();
    });

    $('.toggleActionbar').click();

    //$('.minimize-topbar').click();
    $('.minimize-sidebar').click();

    $('a.menu-prototype').click(function (){
      $('#menu-prototype').toggleClass('open');
    })

});
/* End Actionbar scripts */
/* END CORE SCRIPTS */
