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
		fontSize.toString();
		pxDisplay.value = fontSize + 'px';
		textSize.style.fontSize = fontSize + 'px';
	} else {
		return;
	}
}

function fontSizeMinus() {
		if (fontSize > 0) {
		fontSize -= 1;
		fontSize.toString();
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









