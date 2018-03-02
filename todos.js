$("ul").on("click","li", function() {
	$(this).toggleClass("completed");
/*
	if ($(this).css("color")==="rgb(128, 128, 128)") {
		$(this).css({
		color:"black",
		textDecoration: "none"
	});	
	}

	else{
		$(this).css({
		color:"gray",
		textDecoration: "line-through"
	});	
	}
		
	
		
*/
});

$("ul").on("click","span",function() {
	$(this).parent().fadeOut(function(e){
		$(this).remove();
		e.stopPropagation();

	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li> <span> <i class='fa fa-trash-o'></i>  </span> " + todoText + "</li>");


	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});




$(document).ready(function(){
var header = $('body');

var backgrounds = new Array(
    'url(bryan-minear-317365.jpg)'
  , 'url(danka-peter-148724.jpg)',
  'url(lucas-alexander-15980.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 3000);

header.css('background-image', backgrounds[1]);
});

/*$(document).ready( function(){
	var header = $('body');

	var backgrounds = new Array( 
		'url(bryan-minear-317365.jpg)',
		'url(danka-peter-148724.jpg)',
		'url(lucas-alexander-15980 (1).jpg)'
	);

	var current = 0;

	function nextBackground(){
		current++;
		current %= Array.length;
		header.css('background-image', 'backgrounds[current]');
	} 
    
 setInterval(nextBackground, 2000);
 header.css('background-image', backgrounds[1]);

});*/
