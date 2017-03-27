

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