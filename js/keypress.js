"use strict";

const last_key_E = document.getElementById("lastKey");

function type(e)
{
	const code = e.keyCode;
	last_key_E.textContent = "Last Key: " + code;
	// window.alert("pressed " + code);
}

$("#message").keyup(type);

const plus_E = $("img");
const plus_x = 100;
const plus_y = 10;

function move(e)
{
	const code = e.key;
	console.log(code);
	switch (code)
	{
		case "S":
		case "s":
			plus_E.animate({left: "400px"}, 500, "linear");
			break;
		case "ArrowUp":
			plus_E.animate({top: "10px"}, 500, "linear");
			break;
				
	}
}

document.addEventListener("keydown", move);

function mouse(e)
{
	last_key_E.textContent = "mouse: " + e.pageX + "|" + e.pageY;
}

document.addEventListener("click", mouse);