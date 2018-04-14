window.onload = function() {

	//zadanie 1

	const test = document.getElementById('test');
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
		if (this.style.background == 'none') {
			this.style.background = 'black';
			this.style.color = 'white';
		} else {
			this.style.color = 'black';
			this.style.background = 'none';
		}
	}
	function fontSizePlus() {
		if (fontSize < 52) {
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
	textSize.onclick = answer;
	textSize.onmouseover = changeColor;
	buttonPlus.addEventListener('click', fontSizePlus);
	buttonMinus.addEventListener('click', fontSizeMinus);

	//zadanie 2

	const clientXid = document.getElementById('clientXid');
	const shiftKeyId = document.getElementById('shiftKeyId');
	const mouseButtonsId = document.getElementById('mouseButtonsId');
	const eTarget = document.getElementById('eTarget');
	const eventList = document.querySelectorAll('ul');

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
		mouseButtonsId.oncontextmenu = function(e) {
				e.preventDefault();
			}
		if(event.button === 0) {
			eventDisplay.value = 'Left mouse button';
		} else if (event.button === 2) {
			eventDisplay.value = 'Right mouse button';
		} else {
			eventDisplay.value = 'Middle mouse button';
		}
	}
	function eventTarget() {
		eventDisplay.value = event.target.tagName;
	}
	function pointerList() {
		this.style.cursor = 'pointer';
	}

	clientXid.addEventListener('mousemove', eventClientX);
	shiftKeyId.addEventListener('mousemove', eventShiftKey);
	mouseButtonsId.addEventListener('mousedown', eventButtonMouse);
	eTarget.addEventListener('click', eventTarget);
	eventList[0].addEventListener('mouseover', pointerList);
}

//Zadanie 3
	
	const addText = document.getElementById('addText');
	const addButton = document.querySelector("#formExercise3 input[type='submit']");
	const addedTextList = document.getElementById('addedTextList');
	const exercise3 = document.getElementById('exercise3');
	const deleteInfo = document.createElement('p');
	const LiElements = document.getElementsByClassName('newLi');

	deleteInfo.innerHTML = '* kliknij aby usunąć';

	function remove() {
		this.parentNode.removeChild(this);
	}

	addButton.onclick = event => {
		event.preventDefault();
		const newLi = document.createElement('li');
		addedTextList.appendChild(newLi);
		newLi.innerText = '*' + addText.value;
		if(addText.value == '') {
			newLi.innerText = '* brak nazwy';
		}
		newLi.setAttribute('style', 'cursor: pointer');
		newLi.onclick = remove;
		addText.value = '';
	}
	exercise3.appendChild(deleteInfo);

	


	









