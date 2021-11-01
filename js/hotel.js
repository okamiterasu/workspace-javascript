"use strict";

class Guest
{
	constructor(name, checkin, number, type)
	{
		this.name = name;
		this.checkin = checkin;
		this.number = number;
		this.type = type;
	}

	display()
	{
		return this.name + " reserved " + this.room + " at " + this.checkin;
	}
}

const name_E = $("#name");
const checkin_E = $("#checkin");
const num_E = $("#num");
const room_E = $("#room");

let guests = new Array();

function submit()
{
	const name = name_E.val();
	const checkin = checkin_E.val();
	const num = num_E.val();
	const room = room_E.val();
	const guest = new Guest(name, checkin, num, room);
	guests.push(guest);
	console.log(guest.display());
}

$("#submit").click(submit);
$("#lists").click(function()
{
	for (const guest of guests)
	{
		guest.display()
	}
});