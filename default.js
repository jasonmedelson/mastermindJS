var timesguessed = 1;
var currentcolor = "rgb(255, 255, 255)";
var circleselect = 0
function submitanswer() {
	var color1 = $("#guess1").css("background-color");
	var color2 = $("#guess2").css("background-color");
	var color3 = $("#guess3").css("background-color");
	var color4 = $("#guess4").css("background-color");
	var color5 = $("#guess5").css("background-color");
	circleselect = timesguessed*5;
	$("div.circle:eq("+circleselect+")").css("background-color",color1);
	circleselect+=1;
	$("div.circle:eq("+circleselect+")").css("background-color",color2);
	circleselect+=1;
	$("div.circle:eq("+circleselect+")").css("background-color",color3);
	circleselect+=1;
	$("div.circle:eq("+circleselect+")").css("background-color",color4);
	circleselect+=1;
	$("div.circle:eq("+circleselect+")").css("background-color",color5);
	timesguessed = timesguessed + 1;
}

$(document).ready(function(){
    $(".answer").click(function(){
    	currentcolor = $(this).css("background-color");
    	if (currentcolor == "rgb(255, 255, 255)"){
    		$(this).css("background-color" , "rgb(255, 0, 0)");
    	}
    	else if (currentcolor == "rgb(255, 0, 0)"){
    		$(this).css("background-color" , "rgb(0, 255, 0)");
    	}
    	else if (currentcolor == "rgb(0, 255, 0)"){
    		$(this).css("background-color" , "rgb(0, 0, 255)");
    	}
    	else{
    		$(this).css("background-color" , "rgb(255, 0, 0)");
    	}
    });
});