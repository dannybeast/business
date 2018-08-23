$(document).ready(function(){

  // loader
	// $(".loader").fadeOut("slow");

  // navigation
  // $('.navigation').bind('mousewheel', function(e){
  //       if(e.originalEvent.wheelDelta /120 > 0) {
  //           console.log('scrolling up !');
  //       }
  //       else{
  //           console.log('scrolling down !');
  //       }
  //   });

  $('.nav-icon-wrap').click(function(){
    $(this).children('#nav-icon').toggleClass('open');
    $('body').toggleClass('body--overlay');
    $('.navigation').toggleClass('navigation--open');
  });

})
