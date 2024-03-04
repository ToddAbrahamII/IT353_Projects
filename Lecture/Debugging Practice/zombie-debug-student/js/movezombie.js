function docReady()
{
	window.addEventListener('keydown', moveZombie);
	/*eventListner can tell a key is pressed, and then call the function 	moveZombie*/
}



function moveZombie(evt) { /* create a function call it moveZombie*/
	switch (evt.keyCode) {
		case 37: /* the keyCode for the Left Arrow key is 37*/
		leftArrowPressed(); /* call the function leftArrowPressed()*/
		case 39:
		rightArrowPressed();
		break;
		case 38:
		downArrowPressed();
		break;
		case 40:
		upArrowPressed();
		break;

	}
}

function leftArrowPressed() {             /*define a function and call it leftArrowPressed()*/

	var zombie = document.getElementById('zombie-1'); /*find the zombie div by ID */
	zombie.style.left = parseInt(zombie.style.left) - 10 + 'px';
	/*when left Arrow Pressed move the zombie 10 px to the left*/
}

function rightArrowPressed() {
	var zombie = document.getElementById('zombie-1');
	zombie.style.left = parseInt(zombie.style.left) + 10 + 'px';
}

function upArrowPressed() {
	
	zombie.style.top = parseInt(zombie.style.top) - 10 + 'px';

}

function downArrowPressed() {
	var zombie = document.getElementById('zombie-1'); /*find the zombie div by ID */
	zombie.style.top = parseInt(zombie.style.top) + 10 + 'px';
}


