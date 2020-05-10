var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// // console.log(body);

// body.style.background = "red";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

}

color1.addEventListener("input", setGradient())

color2.addEventListener("input", setGradient());

// var name = "Anson" 

// if (name == "Anson") {
// 	alert("Hello Anson!")}
// 	else (name == "John" {
// 	alert("Hi John!")
//     else if (name -= "Anson" && "John") {
//     alert("Hello stranger!")
//     }