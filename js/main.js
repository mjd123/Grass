$( document ).ready(function(){
	
$(".title").click(function(){
	$("h5").toggle( 500 );
	$("h2").toggle( 100 );
	
})

$(".header").click(function(){
	$(this).css("background-color", "black").toggle( 500 );
	
})
$(".title").click(function(){
	$("img").append("img/moutain.jpg")
})
})


var title = document.querySelector("img")
var main =  document.getElementById("main")


function parallax(){
	 var scrolltop = window.pageYOffset
	
	 title.style.top = scrolltop * .3 + 'px'
 main.style.top = scrolltop * .4 + 'px' 

}

window.addEventListener("scroll" ,parallax); //request parallax function
	console.log ("scroll called")
