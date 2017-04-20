

$('a').click(function(e){
	//prevents link from redirecting 
	e.preventDefault();

	// changes the link text color
	$(this).css('color','red');
 
	// to maintain the context inside timeout
	var self = $(this);
	setTimeout(function(){
		//go to location which the links should go to
		window.location.href = self.attr('href');
	},500);
});

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});