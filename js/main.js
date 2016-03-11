$(document).ready(function(){

	$(".photography").hover(function(e){
		e.preventDefault();
		$(".photography").toggleClass("active");
		if($(".photography").hasClass("active")) {
			$(".photography div").removeClass("faded");
			$(".photography p").removeClass("hide");
			$(".graphicDesign div").addClass("faded");
			$(".webDesign div").addClass("faded");
			$(".graphicDesign").removeClass("active");
			$(".webDesign").removeClass("active");
			$(".graphicDesign p").addClass("hide");
			$(".webDesign p").addClass("hide");
		}else{
			$(".photography div").addClass("faded");
			$(".photography p").addClass("hide");
		}	
	});

	$(".graphicDesign").hover(function(e){
		e.preventDefault();
		$(".graphicDesign").toggleClass("active");
		if($(".graphicDesign").hasClass("active")) {
			$(".graphicDesign div").removeClass("faded");
			$(".graphicDesign p").removeClass("hide");
			$(".photography div").addClass("faded");
			$(".webDesign div").addClass("faded");
			$(".photography").removeClass("active");
			$(".webDesign").removeClass("active");
			$(".photography p").addClass("hide");
			$(".webDesign p").addClass("hide");
		}else{
			$(".graphicDesign div").addClass("faded");
			$(".graphicDesign p").addClass("hide");
		}	
	});

	$(".webDesign").hover(function(e){
		e.preventDefault();
		$(".webDesign").toggleClass("active");
		if($(".webDesign").hasClass("active")) {
			$(".webDesign div").removeClass("faded");
			$(".webDesign p").removeClass("hide");
			$(".photography div").addClass("faded");
			$(".graphicDesign div").addClass("faded");
			$(".photography").removeClass("active");
			$(".graphicDesign").removeClass("active");
			$(".photography p").addClass("hide");
			$(".graphicDesign p").addClass("hide");
		}else{
			$(".webDesign div").addClass("faded");
			$(".webDesign p").addClass("hide");
		}	
	});
});