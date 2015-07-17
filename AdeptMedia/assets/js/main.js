function testAnim() {

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

        
        testAnim();
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

     //Firefox
     $('body').bind('DOMMouseScroll', function(e){
         if(e.originalEvent.detail > 0) {
             //scroll down
              shake();
         }else {
             //scroll up
              shake();
         }

         //prevent page fom scrolling
         return true;
     });

     //IE, Opera, Safari
     $('body').bind('mousewheel', function(e){
         if(e.originalEvent.wheelDelta < 0) {
             //scroll down
              shake();
         }else {
             //scroll up
              shake();
         }

         //prevent page fom scrolling
         return true;
     });

    function shake () {
        $('#shake').removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    };


});

$(window).load(function(){

    'use strict';


    //ANIMATED ITEMS
        $('.animated').appear(function() {
            var item = $(this);
            var animation = item.data('animation');
            if ( !item.hasClass('visible') ) {
                var animationDelay = item.data('animation-delay');
                if ( animationDelay ) {
                    setTimeout(function(){
                        item.addClass( animation + " visible" );
                    }, animationDelay);
                } else {
                    item.addClass( animation + " visible" );
                }
            }
        });

// End Window Load Function
});