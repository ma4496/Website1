let theBody;
let theQuote;

theBody = document.querySelector("body");
theQuote = document.querySelector("h1");

theBody.style.backgroundColor = "rgb(194, 215, 249)"
theQuote.style.fontFamily = "Zilla Slab Highlight, cursive;"

document.querySelector('img').addEventListener('click', potato);

function potato(){
	console.log("you clicked!")
}

