$(document).ready(function(){

/******************************************
/* STICKY NAV                   
/*******************************************/

	$(function(){
	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 394) {
	            $(".mainNav").addClass("stickytop");
	            $("body").css("margin-top","3.4em");
	        }
	        else {
	            $(".mainNav").removeClass("stickytop");
	            $("body").css("margin-top","0em");
	        }
	    });
	});

/******************************************
/* BACK TO TOP                  
/*******************************************/

	$(function(){
	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 900) {
	            $("#backToTop").show();
	        }else {
	            $("#backToTop").hide();
	        }
	    });
	});

/******************************************
/* DISPLAY SERVICES ICONS ON HOVER                   
/*******************************************/

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

/******************************************
/* TESTIMONIAL CAROUSEL                 
/*******************************************/

	$(".arrow:first-of-type").on("click",previousTestimonial);
	$(".arrow:last-of-type").on("click",nextTestimonial);

	function previousTestimonial(){
		$("#image-container div").eq(0).addClass("img-moved-left");

		$("#image-container").on("transitionEnd webkitTransitionEnd", ".img-moved-left",function(){
			$("#image-container").append(this);
			$(this).removeClass("img-moved-left");
		});	
	}

	function nextTestimonial(){
		$("#image-container div").eq(3).addClass("img-moved-right");

		$("#image-container").on("transitionEnd webkitTransitionEnd", ".img-moved-right",function(){
			$("#image-container").prepend(this);
			$(this).removeClass("img-moved-right");
		});
	}	

});
