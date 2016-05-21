jQuery(document).ready(function($) {

				  // slider home
				  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
				  $('#slider-with-blocks-1').royalSlider({
				    arrowsNav: true,
				    arrowsNavAutoHide: false,
				    fadeinLoadedSlide: false,
				    controlNavigationSpacing: 0,
				    controlNavigation: 'bullets',
				    imageScaleMode: 'none',
				    imageAlignCenter:false,
				    blockLoop: true,
				    loop: true,
				    numImagesToPreload: 6,
				    transitionType: 'fade',
				    keyboardNavEnabled: true,
				    block: {
				      delay: 400
				    },
				    autoPlay: {
				    		// autoplay options go gere
				    		enabled: true,
				    		pauseOnHover: true,
				    		delay: 4000
				    	}

				  });

				  	// slider attivita
				    var si = $('#gallery-attivita').royalSlider({
				    addActiveClass: true,
				    arrowsNav: false,
				    controlNavigation: 'none',
				    autoScaleSlider: true, 
				    autoScaleSliderWidth: 960,     
				    autoScaleSliderHeight: 340,
				    loop: true,
				    fadeinLoadedSlide: false,
				    globalCaption: true,
				    keyboardNavEnabled: true,
				    globalCaptionInside: false,

				    visibleNearby: {
				      enabled: true,
				      centerArea: 0.5,
				      center: true,
				      breakpoint: 650,
				      breakpointCenterArea: 0.64,
				      navigateByCenterClick: true
				    }
				  }).data('royalSlider');

				  // link to fifth slide from slider description.
				  $('.slide4link').click(function(e) {
				    si.goTo(4);
				    return false;
				  });


					// menu responsive
					$( ".menuopen" ).click(function() {
					$( ".vocimenu" ).slideToggle('slow');
					});

					// ricerca città
					$( ".ricercacity .bottone" ).click(function() {
					$( ".elencocity" ).slideToggle('slow');
					});

					// avanzate listino
					$( ".moreoption" ).click(function() {
					$( ".avanzate" ).slideToggle('slow');
					});

					// ridurre numero caratteri
					$(".txt-boxhome p").text(function(index, currentText) {
					    return currentText.substr(0, 90)+"...";
					});

					// ridurre numero caratteri con read more
					var showChar = 70;
						var ellipsestext = "...";
						var moretext = "SEE MORE";
						var lesstext = "LESS";
						$('.commentmore').each(function() {
							var content = $(this).html();

							if(content.length > showChar) {

								var c = content.substr(0, showChar);
								var h = content.substr(showChar-1, content.length - showChar);

								var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

								$(this).html(html);
							}
						});
						$(".morelink").click(function(){
							if($(this).hasClass("less")) {
								$(this).removeClass("less");
								$(this).html(moretext);
							} else {
								$(this).addClass("less");
								$(this).html(lesstext);
							}
							$(this).parent().prev().toggle();
							$(this).prev().toggle();
							return false;
						});


});



// calendario
var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];

$(function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "http://arosedesign.com/db/zestrip/zest/img/calendar.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  });



// tab
if($(window).width() > 768){

	// Hide all but first tab content on larger viewports
	$('.accordion__content:not(:first)').hide();

	// Activate first tab
	$('.accordion__title:first-child').addClass('active');

} else {
  
	// Hide all content items on narrow viewports
	$('.accordion__content').hide();
	};

	// Wrap a div around content to create a scrolling container which we're going to use on narrow viewports
	$( ".accordion__content" ).wrapInner( "<div class='overflow-scrolling'></div>" );

	// The clicking action
	$('.accordion__title').on('click', function() {
		if($(this).hasClass('active') && (window.screen.width < 850) || ($(window).width() < 850)) {
		                $(this).next().toggle();
		} else {
		                $('.accordion__content').hide();
		                $(this).next().show().prev().addClass('active').siblings().removeClass('active');
		}

});


// aggiungi numeri a chat
$(".boxchat").each(function(i) {
  $(this).addClass("chat_" + (i+1));
});

// clickcontatti
$('.boxcontatti ul li').on('click', function() {
$(this).addClass('active').siblings().removeClass('active');
});


// The clicking action
$('.boxcontatti ul li').click(function() {
    var i = $(this).index();
    $('.boxchat').hide();
    $('.chat_' + (i+1)).show();
});





