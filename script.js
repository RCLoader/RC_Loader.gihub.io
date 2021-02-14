function cameraLeft() {
	let elem = document.getElementById("camera_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_camera_left");
	elem.classList.remove("arrow--passive__camera");
	elem.classList.add("arrow--active__camera");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V0?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V0?value=0', false);
	request.send();
}

function cameraRight() {
	let elem = document.getElementById("camera_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_camera_right");
	elem.classList.remove("arrow--passive__camera");
	elem.classList.add("arrow--active__camera");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V0?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V0?value=0', false);
	request.send();
}

function baseLeft() {
	let elem = document.getElementById("main_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_main_left");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V1?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=0', false);
	request.send();
}

function baseRight() {
	let elem = document.getElementById("main_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_main_right");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V1?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=0', false);
	request.send();
}

function widthLeft() {
	let elem = document.getElementById("length_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_length_left");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V2?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V2?value=0', false);
	request.send();
}

function widthRight() {
	let elem = document.getElementById("length_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_length_right");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V2?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V2?value=0', false);
	request.send();
}

function heightLeft() {
	let elem = document.getElementById("height_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_height_left");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V3?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V3?value=0', false);
	request.send();
}

function heightRight() {
	let elem = document.getElementById("height_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_height_right");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V3?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V3?value=0', false);
	request.send();
}

function mechLeft() {
	let elem = document.getElementById("mech_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_mech_left");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V4?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V4?value=0', false);
	request.send();
}

function mechRight() {
	let elem = document.getElementById("mech_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_mech_right");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V4?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V4?value=0', false);
	request.send();
}

function rMechLeft() {
	let elem = document.getElementById("rmech_left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_rMech_left");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V5?value=1', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V5?value=0', false);
	request.send();
}

function rMechRight() {
	let elem = document.getElementById("rmech_right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_rMech_right");
	elem.classList.remove("btn--arrow");
	elem.classList.add("btn--arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/3AeZ4TnGNKOwHgC7j7KO3CdevAaLaKkB/update/V5?value=2', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V5?value=0', false);
	request.send();
}

function upLeft() {
	let elem = document.querySelector("#btn--up");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_up");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	elem = document.querySelector("#btn--left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_left");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=5', false);
	request.send();
}

function upRight() {
	let elem = document.querySelector("#btn--up");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_up");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	elem = document.querySelector("#btn--right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_right");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=6', false);
	request.send();
}

function downLeft() {
	let elem = document.querySelector("#btn--down");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_down");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	elem = document.querySelector("#btn--left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_left");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=7', false);
	request.send();
}

function downRight() {
	let elem = document.querySelector("#btn--down");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_down");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	elem = document.querySelector("#btn--right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_right");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=8', false);
	request.send();
}

function up() {
	let elem = document.querySelector("#btn--up");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_up");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=1', false);
	request.send();
}

function down() {
	let elem = document.querySelector("#btn--down");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_down");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=2', false);
	request.send();
}

function left() {
	let elem = document.querySelector("#btn--left");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_left");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=3', false);
	request.send();
}

function right() {
	let elem = document.querySelector("#btn--right");
	elem.classList.add("green--active");
	elem = document.querySelector("#arrow_right");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=4', false);
	request.send();
}

function t() {
	let elem = document.querySelector("#top");
	elem.classList.add("blue--active");
	elem = document.querySelector("#arrow_top");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V2?value=1', false);
	request.send();
}

function bottom() {
	let elem = document.querySelector("#bottom");
	elem.classList.add("blue--active");
	elem = document.querySelector("#arrow_bottom");
	elem.classList.remove("arrow--passive");
	elem.classList.add("arrow--active");
	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V2?value=2', false);
	request.send();
}



function stop() {
	// buttons 

	let elem = document.querySelector("#btn--up");
	elem.classList.remove("green--active");
	elem = document.querySelector("#btn--down");
	elem.classList.remove("green--active");
	elem = document.querySelector("#btn--left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#btn--right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#top");
	elem.classList.remove("blue--active");
	elem = document.querySelector("#bottom");
	elem.classList.remove("blue--active");
	elem = document.querySelector("#main_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#mech_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#rmech_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#length_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#height_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#main_right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#mech_right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#rmech_right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#length_right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#height_right");
	elem.classList.remove("green--active");
	elem = document.querySelector("#camera_left");
	elem.classList.remove("green--active");
	elem = document.querySelector("#camera_right");
	elem.classList.remove("green--active");

	// icons

	elem = document.querySelector("#arrow_main_left");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_main_right");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_mech_left");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_mech_right");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_rMech_left");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_rMech_right");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_length_left");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_length_right");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_height_left");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_height_right");
	elem.classList.remove("btn--arrow--active");
	elem.classList.add("btn--arrow");
	elem = document.querySelector("#arrow_up");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_left");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_down");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_right");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_top");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_bottom");
	elem.classList.remove("arrow--active");
	elem.classList.add("arrow--passive");
	elem = document.querySelector("#arrow_camera_right");
	elem.classList.remove("arrow--active__camera");
	elem.classList.add("arrow--passive__camera");
	elem = document.querySelector("#arrow_camera_left");
	elem.classList.remove("arrow--active__camera");
	elem.classList.add("arrow--passive__camera");

	let request = new XMLHttpRequest();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V1?value=0', false);
	request.send();
	request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V2?value=0', false);
	request.send();
}

let tow_switch = 0;

function tow() {
	if(tow_switch == 0) {
		let elem = document.querySelector("#btn--tow");
		elem.classList.add("red--active");
		elem = document.querySelector("#icon_tow");
		elem.classList.remove("arrow--passive");
		elem.classList.add("arrow--active");
		tow_switch = 1;

	} else {
		let elem = document.querySelector("#btn--tow");
		elem.classList.remove("red--active");
		elem = document.querySelector("#icon_tow");
		elem.classList.remove("arrow--active");
		elem.classList.add("arrow--passive");
		tow_switch = 0;
	}
	let request = new XMLHttpRequest();
	request.open('GET', '/tow', false);
	request.send();
}

let flash_switch = 0;

function flash() {
	let request = new XMLHttpRequest();
	if(flash_switch == 0) {
		let elem = document.querySelector("#btn--flash");
		elem.classList.add("yellow--active");
		elem = document.querySelector("#icon_flash");
		elem.classList.remove("arrow--passive");
		elem.classList.add("arrow--active");
		flash_switch = 1;
		request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V0?value=1', false);
		request.send();
	} else {
		let elem = document.querySelector("#btn--flash");
		elem.classList.remove("yellow--active");
		elem = document.querySelector("#icon_flash");
		elem.classList.remove("arrow--active");
		elem.classList.add("arrow--passive");
		flash_switch = 0;
		request.open('GET', 'http://139.59.206.133/k5Zb3DyYqt5QAbMQprLlq-pWqDrdDb27/update/V0?value=0', false);
		request.send();
	}
	
	
}

var lttimer;

let camera_Left = document.getElementById("camera_left");

camera_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(cameraLeft, 100);
}, false);

camera_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

camera_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(cameraLeft, 100);
}, false);

camera_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

camera_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let main_Left = document.getElementById("main_left");

main_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(baseLeft, 100);
}, false);

main_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

main_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(baseLeft, 100);
}, false);

main_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

main_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let mech_Left = document.getElementById("mech_left");

mech_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(mechLeft, 100);
}, false);

mech_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

mech_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(mechLeft, 100);
}, false);

mech_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

mech_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let width_Left = document.getElementById("length_left");

width_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(widthLeft, 100);
}, false);

width_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

width_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(widthLeft, 100);
}, false);

width_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

width_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let height_Left = document.getElementById("height_left");

height_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(heightLeft, 100);
}, false);

height_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

height_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(heightLeft, 100);
}, false);

height_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

height_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let rMech_Left = document.getElementById("rmech_left");

rMech_Left.addEventListener('mousedown', function(event) {
	lttimer = setInterval(rMechLeft, 100);
}, false);

rMech_Left.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

rMech_Left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(rMechLeft, 100);
}, false);

rMech_Left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

rMech_Left.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let camera_Right = document.getElementById("camera_right");

camera_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(cameraRight, 100);
}, false);

camera_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

camera_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(cameraRight, 100);
}, false);

camera_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

camera_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let main_Right = document.getElementById("main_right");

main_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(baseRight, 100);
}, false);

main_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

main_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(baseRight, 100);
}, false);

main_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

main_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let mech_Right = document.getElementById("mech_right");

mech_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(mechRight, 100);
}, false);

mech_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

mech_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(mechRight, 100);
}, false);

mech_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

mech_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let width_Right = document.getElementById("length_right");

width_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(widthRight, 100);
}, false);

width_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

width_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(widthRight, 100);
}, false);

width_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

width_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let height_Right = document.getElementById("height_right");

height_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(heightRight, 100);
}, false);

height_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

height_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(heightRight, 100);
}, false);

height_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

height_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let rMech_Right = document.getElementById("rmech_right");

rMech_Right.addEventListener('mousedown', function(event) {
	lttimer = setInterval(rMechRight, 100);
}, false);

rMech_Right.addEventListener('mouseup', function(event) {
	clearInterval(lttimer);
	stop();
}, false);

rMech_Right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setInterval(rMechRight, 100);
}, false);

rMech_Right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearInterval(lttimer);
}, false);

rMech_Right.addEventListener('touchend', function(event) {
	stop();
	clearInterval(lttimer);
}, false);

let id_up = document.getElementById("btn--up");

id_up.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(up, 100);
}, false);

id_up.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_up.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let id_down = document.getElementById("btn--down");

id_down.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(down, 100);
}, false);

id_down.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_down.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let id_left = document.getElementById("btn--left");

id_left.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(left, 100);
}, false);

id_left.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_left.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let id_right = document.getElementById("btn--right");

id_right.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(right, 100);
}, false);

id_right.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_right.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let id_top = document.getElementById("top");

id_top.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(t, 100);
}, false);

id_top.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_top.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let id_bottom = document.getElementById("bottom");

id_bottom.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	lttimer = setTimeout(bottom, 100);
}, false);

id_bottom.addEventListener('touchmove', function(event) {
	event.preventDefault();
	event.stopPropagation();
	clearTimeout(lttimer);
}, false);

id_bottom.addEventListener('touchend', function(event) {
	stop();
	clearTimeout(lttimer);
}, false);

let map = {
	"ArrowUp": false,
	"ArrowLeft": false,
	"ArrowRight": false,
	"ArrowDown": false
}

let tmp = 0;
let tmp1 = 0;

document.addEventListener('keydown', (event) => {
	const keyName = event.key;
	if(keyName in map) {
		map[keyName] = true;
		if(map["ArrowUp"] && map["ArrowLeft"] && tmp == 0) {
			upLeft();
			tmp = 1;			
		} else if (map["ArrowUp"] && map["ArrowRight"] && tmp == 0) {
			upRight();
			tmp = 1;
		} else if (map["ArrowDown"] && map["ArrowLeft"] && tmp == 0) {
			downLeft();
			tmp = 1;
		} else if (map["ArrowDown"] && map["ArrowRight"] && tmp == 0) {
			downRight();
			tmp = 1;
		} else if(map["ArrowUp"] && tmp1 == 0) {
			up();
			tmp1 = 1;
		} else if(map["ArrowDown"] && tmp1 == 0) {
			down();
			tmp1 = 1;
		} else if(map["ArrowLeft"] && tmp1 == 0) {
			left();
			tmp1 = 1;
		} else if(map["ArrowRight"] && tmp1 == 0) {
			right();
			tmp1 = 1;
		}
	} else {
		if((keyName.toLowerCase() === "v" || keyName.toLowerCase() === "м") && tmp == 0) {
			t();
		} else if((keyName.toLowerCase() === "b" || keyName.toLowerCase() === "и") && tmp == 0) {
			bottom();
		} else if ((keyName.toLowerCase() === "q" || keyName.toLowerCase() === "й") && tmp == 0) {
			baseLeft();
			lttimer = setInterval(baseLeft, 100);
		} else if ((keyName.toLowerCase() === "w" || keyName.toLowerCase() === "ц") && tmp == 0) {
			baseRight();
			lttimer = setInterval(baseRight, 100);
		} else if((keyName.toLowerCase() === "a" || keyName.toLowerCase() === "ф") && tmp == 0) {
			mechLeft();
			lttimer = setInterval(mechLeft, 100);
		} else if ((keyName.toLowerCase() === "s" || keyName.toLowerCase() === "ы") && tmp == 0) {
			mechRight();
			lttimer = setInterval(mechRight, 100);
		} else if ((keyName.toLowerCase() === "z" || keyName.toLowerCase() === "я") && tmp == 0) {
			rMechLeft();
			lttimer = setInterval(rMechLeft, 100);
		} else if ((keyName.toLowerCase() === "x" || keyName.toLowerCase() === "ч") && tmp == 0) {
			rMechRight();
			lttimer = setInterval(rMechRight, 100);
		} else if ((keyName.toLowerCase() === "r" || keyName.toLowerCase() === "к") && tmp == 0) {
			widthLeft();
			lttimer = setInterval(widthLeft, 100);
		} else if ((keyName.toLowerCase() === "t" || keyName.toLowerCase() === "е") && tmp == 0) {
			widthRight();
			lttimer = setInterval(widthRight, 100);
		} else if ((keyName.toLowerCase() === "f" || keyName.toLowerCase() === "а") && tmp == 0) {
			heightLeft();
			lttimer = setInterval(heightLeft, 100);
		} else if ((keyName.toLowerCase() === "g" || keyName.toLowerCase() === "п") && tmp == 0) {
			heightRight();
			lttimer = setInterval(heightRight, 100);
		} else if ((keyName.toLowerCase() === "d" || keyName.toLowerCase() === "п") && tmp == 0) {
			cameraLeft();
			lttimer = setInterval(cameraLeft, 100);
		} else if ((keyName.toLowerCase() === "c" || keyName.toLowerCase() === "с") && tmp == 0) {
			cameraRight();
			lttimer = setInterval(cameraRight, 100);
		}
		tmp = 1;
	}
});

document.addEventListener('keyup', (event) => {
	const keyName = event.key;
	stop();
	tmp = 0;
	tmp1 = 0;
	clearInterval(lttimer);
	if(keyName in map) {
		map[keyName] = false;
		if(map["ArrowUp"]) {
			up();
			tmp1 = 1;
		} else if (map["ArrowDown"]) {
			down();
			tmp1 = 1;
		} else if (map["ArrowLeft"]) {
			left();
			tmp1 = 1;
		} else if (map["ArrowRight"]) {
			right();
			tmp1 = 1;
		}
	}
});

document.addEventListener('keypress', (event) => {
	const keyName = event.key;
	if(keyName == " ") {
		tow();
	} else if(keyName.toLowerCase() == "e" || keyName.toLowerCase() === "у") {
		flash();
	}
});






