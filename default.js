var timesguessed = 0; //guess row counter
var currentcolor = "rgb(255, 255, 255)";
var circleselect = 0; // targeting circle for color change
var tinyselect = 0; // targeting tiny circle
//random number generation for answer key, changes on page load
//currently 3 numbers add more later
var key1 = Math.floor((Math.random() * 3) + 1); 
var key2 = Math.floor((Math.random() * 3) + 1);
var key3 = Math.floor((Math.random() * 3) + 1);
var key4 = Math.floor((Math.random() * 3) + 1);
var key5 = Math.floor((Math.random() * 3) + 1);
var guessarray = [0,0,0,0,0]; //used for score tracking
var keyarray = [key1,key2,key3,key4,key5]; //used for score tracking
var pegscore = [0,0]; // return value
var colorarray = ["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"]


//ran on button click
//changes orb color on each guess and calls score function to display how close guess is
function submitanswer() {
	//gets color or guess by id
	//replace with for loop later
	var color1 = $("#guess1").css("background-color");
	var color2 = $("#guess2").css("background-color");
	var color3 = $("#guess3").css("background-color");
	var color4 = $("#guess4").css("background-color");
	var color5 = $("#guess5").css("background-color");
	guessarray = [color1,color2,color3,color4,color5] // replaces default with actual colors
	circleselect = timesguessed*5; //pointer for circle
	//adds color to correct row
	$("div.target:eq("+circleselect+")").css("background-color",color1);
	circleselect+=1;
	$("div.target:eq("+circleselect+")").css("background-color",color2);
	circleselect+=1;
	$("div.target:eq("+circleselect+")").css("background-color",color3);
	circleselect+=1;
	$("div.target:eq("+circleselect+")").css("background-color",color4);
	circleselect+=1;
	$("div.target:eq("+circleselect+")").css("background-color",color5);
	//calls score function returns values as [black,white]
	pegscore = score(guessarray);
	//pointer for tiny score circles
	tinyselect = timesguessed * 5;
	//changes color for black tiny circles
	for (var i = 0; i < pegscore[0]; i++) {
		$("div.tinycircle:eq("+tinyselect+")").css("background-color","black");
		tinyselect++
	} 
	//changes color for white tiny circles
	for (var i = 0; i < pegscore[1]; i++) {
		$("div.tinycircle:eq("+tinyselect+")").css("background-color","white");
		tinyselect++
	} 
	timesguessed = timesguessed + 1;
	if(pegscore[1] == 5){
		$(".answer").css("display","inline-block");
		alert("Congradulations!!!!\nYou Win!!!")
	}
	if(timesguessed > 8){
		$(".answer").css("display","inline-block");
		alert("I'm sorry \nYou have lost!");
	}
}
//for guessing row click rotates color between these, currently [red,green,blue]
//add more colors later for more difficulty
//add selector for user variable difficulty
$(document).ready(function(){
    $(".guess").click(function(){
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
//converts random numbers to there colors
// add more colors later
$(document).ready(function(){
	for (var i = 0; i < keyarray.length; i++) {
		if(keyarray[i] == 1){
			colorarray[i] = "rgb(255, 0, 0)"
		}
		else if(keyarray[i] == 2){
			colorarray[i] = "rgb(0, 255, 0)"
		}
		else if(keyarray[i]==3){
			colorarray[i] = "rgb(0, 0, 255)"
		}
		$("div.answer:eq("+i+")").css("background-color",colorarray[i]);
	}
})
//error black registering before white
function score(guessed){
	var whitepeg = 0;//score holder, denotes perfect match
	var blackpeg =0;//score holder, denotes right color wrong location
	var scorearray = [0,0,0,0,0];//makes sure each peg only counts for one score
	for (var i = 0; i < guessed.length; i++) {
		if (guessed[i] == colorarray[i]){
			whitepeg ++ //exact match equal white peg
			if(scorearray[i] == 1){
				blackpeg --;
			}
			scorearray[i] = 1;
		}
		else{//if not exact compare to all other pegs
			for (var x = 0; x < scorearray.length; x++) {
				if(guessed[i] == colorarray[x])
					if (scorearray[x]==0) {//check if peg has already been scored
						blackpeg++ //right color wrong location
						scorearray[x] = 1;
						break
					}
			}
		}
	}
	var returnscore = [blackpeg,whitepeg]
	return returnscore;
}
function show(){
	if($(".answer").css("display") == "none"){
		$(".answer").css("display","inline-block");
	}
	else{
		$(".answer").css("display","none");
	}
}
