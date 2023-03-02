var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

color1.value = "#ff0000";
color2.value = "#ffff00";

css.textContent = "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0));"


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNum() {
	var num1 = Math.floor(Math.random() * 256);
	var num2 = Math.floor(Math.random() * 256);
	var num3 = Math.floor(Math.random() * 256);
	var num4 = Math.floor(Math.random() * 256);
	var num5 = Math.floor(Math.random() * 256);
	var num6 = Math.floor(Math.random() * 256);
	colornew1 = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
	colornew2 = "rgb(" + num4 + "," + num5 + "," + num6 + ")";

	body.style.background = 
		"linear-gradient(to right, " + colornew1 + "," + colornew2 + ")";

	css.textContent = body.style.background + ";";

	var hex1 = num1.toString(16);
	var hex2 = num2.toString(16);
	var hex3 = num3.toString(16);
	var hex4 = num4.toString(16);
	var hex5 = num5.toString(16);
	var hex6 = num6.toString(16);
	hexnew1 = "#" + hex1 + hex2 + hex3;
	hexnew2 = "#" + hex4 + hex5 + hex6;

	color1.value = hexnew1;
	color2.value = hexnew2;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomNum);

