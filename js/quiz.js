const elements = document.getElementsByClassName("answer");
let selected = document.getElementsByClassName("selected")[0];
function click(e)
{
	e.preventDefault();
	selected.setAttribute("class", "answer");
	selected.children[0].children[0].checked = false;
	this.setAttribute("class", "answer selected");
	selected = this;
	this.children[0].children[0].checked = true;
	const animation = [
		{transform: "scale(1, 1)"},
		{transform: "scale(2, 2)"}
	];
	this.animate(animation, {duration: 3000, fill: "forwards"});
}

for (const element of elements)
{
	element.addEventListener("click", click);
}