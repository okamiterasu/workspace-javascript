"use strict";

function fix_link()
{
	const self = $(this);
	const source = self.attr("src");
	console.log(source);
	self.attr("src", "./img/"+source);
}

$("img").each(fix_link)