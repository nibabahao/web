import "./src/style.css";
import bg from './src/8.jpg';
import printMe from './src/print.js';
function aa(){}
var div = document.createElement("div");
	div.innerHTML="webpack";
	div.classList.add("hello");
var myIcon = new Image();
    myIcon.src = bg;
    div.appendChild(myIcon);
var btn = document.createElement("button");
	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;
	div.appendChild(btn);
	document.body.appendChild(div);

