
console.log("here!")

let theHTMLImage = document.getElementById('myImage');

// function first(){
//  document.getElementsById('myImage')
//  .src="myImage1";
// }

document.querySelector('button').addEventListener('click', theClick)
function theClick() {
	console.log("click!")
	theHTMLImage.src = "myImage2.jpg"
}

function second(){
	document.getElementById('myImage')
	.src="myImage2.jpg"
}
