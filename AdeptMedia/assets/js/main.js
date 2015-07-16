function testAnim(fade) {

    $('#animationSandbox').animate({
        width: "195px",
        opacity: 0.4,
    }, 400 );

    $('#animationSandbox').animate({
        width: "201px",
        opacity: 1,
    }, 600 );

}

jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        
        testAnim('fadeInDown');
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
    	$('body').scrollTo(target, 800, {offset: -84, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
    	if ($('.navbar-collapse').hasClass('in')){
    		$('.navbar-collapse').removeClass('in').addClass('collapse');
    	}

        e.preventDefault();
    	
    });

    $('.form-control').on('focus', function(e){

        var parent = $(this).parent();
                
        e.preventDefault();
        
        //Collapse mobile menu after clicking
        $('.input-group').removeClass('active');
        $(parent).addClass('active');
        
    });
  
    // is mobile device
    $("#carousel").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
   
   
    });



});