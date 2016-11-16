/* CSCI 4300 : Web Programming    ******    Viraj Patel  Project 4 
*  Created all the fuction required for the project to do the animation this will call each fuction when user 
*  selects button or any item from the dropdown menu in ascii.html file.
*/
//Required use of strict
"use strict"
var run, split, animationName; 
var text = " ";
/*
This function is for the start button that will start the animation, so when it starts it will disable the start 
button and animation dropdown menu as requirement and it will call the animation using array from myanimation.js 
and it will split the frame when it sees ======= braking point.
*/
document.getElementById("stop").disabled = true; // disables the stop button
function start(){

	document.getElementById("animation").disabled = true;
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;

	if(text.indexOf("=====\n") > -1 || text.indexOf("=====") > -1){

			split = text.split("=====\n");
		}//end of if
		else if(ANIMATIONS[text]){

			split = ANIMATIONS[text].split("=====\n");
		}//end of else if

		var c = 0;
		if(c <= split.length){

			var speed = checkBox();
			animationLoop(c, speed);
		}//end of if
}//end of start() function
/*
The function is for the stop button that will stop the animation, so when animation is running and user click the 
stop button it will enable the start button, animation dropdown menu, and it will disable the stop button when it
get pressed. After that on the mytextarea it will show the stopped animation in each frame same as before with all frames.
*/
function stop(){
	document.getElementById("animation").disabled = false;
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;

	clearInterval(run);
	document.getElementById("mytextarea").value = text;
}//end of stop() function
/*
This function changes the animation to show when user selets the animation from the dropdown menu, so 
it will get the dropdown menu by id then it will set the selected value  eqal to animation string in myanimation.js 
the it will set = the mytextarea to show up on the screen.
*/
function animation(){
	var aniM = document.getElementById("animation");
	animationName = aniM.options[aniM.selectedIndex].value;
	document.getElementById("mytextarea").value = ANIMATIONS[animationName];
	text = document.getElementById("mytextarea").value;
}//end of animation() function
/*
This is the function is called when user press the start button, so this will count the frames
on the animation and check the speed by checking if user has pressed the Turbo checkBox or not.
*/
function animationLoop(count, speed){

	run = setInterval(function(){
		document.getElementById("mytextarea").value = split[count];
		count++;
		var newSpeed = checkBox(); // sets the regular/Turbo speed by calling checkBok() function
		if(newSpeed !== speed){

			clearInterval(run);
			animationLoop(count, newSpeed);
		}

		if(count >= split.length){

			count = 0;
		}
	},speed)
}//end of animationLoop() function

//This function will call the ID of the dropdown menu the it will set value= to whatever user chooses Tiny, Medium, etc...
function sizeC(){
	var s = document.getElementById("size");
	document.getElementById("mytextarea").style.fontSize=s.options[s.selectedIndex].value;
}//end of sizeC() function

//This function chnages the speed of the animation 50ms regular or 250ms Turbo.
function checkBox(){
	var value;
  if(document.getElementById('Turbo').checked){
	value = 50;

	  }else{
	value = 250;
		}
	return value;
  }//end of checkBox() function

