$(document).ready(function(){
  
    $("#top").nested({
  		minWidth: 100,
  		gutter: 5,
  		animate: true,
      animationOptions: {
        speed: 20,
        duration: 500,
        queue: true
      }
	});

	$("#bottom").nested({
  		minWidth: 150,
  		gutter: 10,
  		animate: true,
      animationOptions: {
        speed: 20,
        duration: 200,
        queue: true
      }
	});

  //$(".inner").hide(0).delay(500).fadeIn(1000);


});

