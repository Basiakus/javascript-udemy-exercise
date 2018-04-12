window.onload = function() {

	//zadanie 1

	const test = document.getElementById('test');
	const elementThis = document.getElementById('elementThis'); 
	const textSize = document.getElementById('textSize');
	const textSizeButtons = document.getElementById('textSizeButtons');
	const pxDisplay = document.createElement('input');
	const buttonPlus = document.createElement('button');
	const buttonMinus = document.createElement('button');
	let fontSize = 14;

	textSizeButtons.appendChild(pxDisplay);
	textSizeButtons.appendChild(buttonPlus);
	textSizeButtons.appendChild(buttonMinus);

	buttonPlus.innerHTML = "+";
	buttonMinus.innerHTML = "-";

	function answer() {
		alert('Ejjj!!!!')
	}
	function changeColor() {
		if (this.style.color == 'black') {
			this.style.color = 'red';
		} else {
			this.style.color = 'black';
		}
	}
	function fontSizePlus() {
		if (fontSize < 32) {
			fontSize += 1;
			pxDisplay.value = fontSize + 'px';
			textSize.style.fontSize = fontSize + 'px';
		} else {
			return;
		}
	}
	function fontSizeMinus() {
			if (fontSize > 0) {
			fontSize -= 1;
			pxDisplay.value = fontSize + 'px';
			textSize.style.fontSize = fontSize + 'px';
		} else {
			return;
		} 
	}
	elementThis.onclick = answer;
	elementThis.onmouseover = changeColor;
	buttonPlus.addEventListener('click', fontSizePlus);
	buttonMinus.addEventListener('click', fontSizeMinus);

	//zadanie 2

	const clientXid = document.getElementById('clientXid');
	const shiftKeyId = document.getElementById('shiftKeyId');
	const mouseButtonsId = document.getElementById('mouseButtonsId');

	function eventClientX(event) {
		eventDisplay.value = event.clientX;
	}
	function eventShiftKey(event) {
		eventDisplay.value = event.shiftKey;
		if(event.shiftKey) {
			eventDisplay.value = 'SHIFT: active';
		} else {
			eventDisplay.value = 'SHIFT: passive';
		}
	}
	function eventButtonMouse(event) {
		eventDisplay.value = event.button;
		if(event.button === 0) {
			eventDisplay.value = 'Left mouse button';
		} else if (event.button === 2) {
			eventDisplay.value = 'Right mouse button';
		} else {
			eventDisplay.value = 'Middle mouse button';
		}
	}

	clientXid.addEventListener('mousemove', eventClientX);
	shiftKeyId.addEventListener('mousemove', eventShiftKey);
	mouseButtonsId.addEventListener('mousedown', eventButtonMouse);
}









