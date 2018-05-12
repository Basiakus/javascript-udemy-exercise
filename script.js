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

	clientXid.onmousemove = eventClientX;
	shiftKeyId.addEventListener('mousemove', eventShiftKey);
	mouseButtonsId.addEventListener('mousedown', eventButtonMouse);
	eTarget.addEventListener('click', eventTarget);
	eventList[0].addEventListener('mouseover', pointerList);

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
	function addLiElement(event) {
		event.preventDefault();
		const newLi = document.createElement('li');
		addedTextList.appendChild(newLi);
		newLi.innerText = '*' + addText.value;
		if(addText.value == '') {
			newLi.innerText = '* brak nazwy';
		}
		newLi.setAttribute('style', 'cursor: pointer');
		newLi.style.width = '10%';
		newLi.onclick = remove;
		addText.value = '';
	}

	addButton.addEventListener('click', addLiElement);
	exercise3.appendChild(deleteInfo);

//Zadanie 4
	const buttonToTop = document.getElementById('buttonToTop');
	const span = document.getElementById('yAxisDisplay');

	function scrollToTop() {
		return window.scrollBy(0, -1 * window.pageYOffset);
	}
	window.onscroll = function() {
		const Yoffset = window.pageYOffset;
		span.innerHTML = 'Yaxis:' + parseInt(Yoffset);
		if(Yoffset > 600 && Yoffset < 880) {
			buttonToTop.style.display = 'block'; 
		} else {
			buttonToTop.style.display = 'none';
		}
	}
	buttonToTop.addEventListener('click', scrollToTop);

//zadanie 5
	const exercise5 = document.getElementById('exercise5');
	const movingElement = document.getElementById('movingElement');

	movingElement.onmousedown = function() {
			
		movingElement.onmousemove = function(e) {
			this.style.left = e.clientX - this.width / 2 + 'px';
			this.style.top = e.clientY - this.height / 2 + window.pageYOffset + 'px';
			this.style.width = '110px';
			this.style.height = '80px';
			this.style.filter = 'blur(3px)';
		};
	};	
	movingElement.onmouseup = function() {
		this.onmousemove = null;
		this.style.width = '100px';
		this.style.height = '100px';
		this.style.filter = 'none';

	};
	movingElement.ondragstart = function(e) {
		e.preventDefault();
	};

//Zadanie 6
	const startStoperButton = document.getElementById('startStoperButton');
	const stopStoperButton = document.getElementById('stopStoperButton');
	const continueStoperButton = document.getElementById('continueStoperButton');
	const saveStoperButton = document.getElementById('saveStoperButton');
	const displayStoper = document.getElementById('displayStoper');
	const stoperList = document.getElementById('stoperList');
	const statusDisplay = document.getElementById('statusDisplay');
	//const userValue = document.getElementById('userValue');

	// Z wykorzystaniem obiektu klasy
	function Stoper(display) {

		this.display = display;
		this.basicValue; 
		this.setTimeoutReference;
		this.status;

		this.setBasicValue = function(basicValue) {
			if(this.setTimeoutReference) {
				this.stop();
			};

			this.basicValue = basicValue;
			this.start(this.basicValue);
		};

		this.start = function() {
			if(this.basicValue < 0) {
				return;
			};
			this.status = true;
			statusDisplay.innerHTML = '&#9654'//this.status;
			display.innerHTML = this.basicValue--;
			const self = this;
			this.setTimeoutReference = setTimeout(function() {
				self.start();
			}, 1000);
			return this.status;
		};
		this.stop = function() {
			this.status = false;
			statusDisplay.innerHTML = '&#9646&#9646';//this.status;
			clearTimeout(this.setTimeoutReference);
			return this.status;
		};
		this.continue = function() {
			if(!this.status) {
				this.start(); 
			} else {
				return;
			};
		};
	};

	const stoper = new Stoper(displayStoper);

	startStoperButton.onclick = function() {
		const userValue = document.getElementById('userValue');
		stoper.setBasicValue(userValue.value);
	};

	stopStoperButton.onclick = function() {
		stoper.stop();
	};
		
	continueStoperButton.onclick = function() {
		stoper.continue();
	};
	saveStoperButton.onclick = function() {
		const newRecord = document.createElement('li');
		const length = document.querySelectorAll('#stoperList li');
		stoperList.appendChild(newRecord);
		for (let i = 0; i <= length.length; ++i) {
			newRecord.innerHTML = i + "# " + displayStoper.innerHTML;
		};
		newRecord.onclick = function() {
			this.parentNode.removeChild(this);
		};
	};
	/* Z WYKORZYSTANIEM setInterval
	let innerInterval;
	
	function interval(display, number) {
	   let innerInterval = setInterval(function() {
	      if(number.value < 0) {
	         clearInterval(innerInterval);
	         return;
	      }
	      display.innerHTML = number.value--;         
	   },1000);
	   return innerInterval;
	};
	
	startStoperButton.onclick = function() {
	   const userValue = document.getElementById('userValue');
	   displayStoper.innerHTML = userValue.value;
	   innerInterval = interval(displayStoper, userValue);
	};

	stopStoperButton.onclick = function() {
	   clearInterval(innerInterval);
	};
	*/

//Zadanie 7
	const exercise7numbers = document.getElementById('exercise7Form').numbers;
	const exercise7Letters = document.getElementById('exercise7Form').letters;
	const exercise7FullName = document.getElementById('exercise7Form').fullName;
	const exercise7Send = document.getElementById('exercise7Form').send;
	
	function isNumber(valueToCheck) {
		return !isNaN(valueToCheck);
	};
	exercise7numbers.onkeyup = function() {
		if(isNumber(this.value)) {
			this.style.backgroundColor = 'green';
		} else {
			this.style.backgroundColor = 'red';
		};
	};
	exercise7Letters.onkeydown = function(e) {
		const which = e.which;
		if(isNumber(String.fromCharCode(which))) {
			e.preventDefault();
		} else {
			this.style.backgroundColor = 'green';
		};
	};
	exercise7Send.onclick = function(e) {
		const checkName = exercise7FullName.value;
		if(checkName.indexOf(' ') < 0) {
			e.preventDefault();
			exercise7FullName.value = '!!!Podaj_imię_i_nazwisko!!!';
		} else {
			e.preventDefault();
			exercise7FullName.value = 'Brawo poszło!:D';
		};
	};

//ZADANIE 8
	const exercise8FormProducts = document.getElementById('exercise8Form').product;
	const exercise8SubmitButton = document.getElementById('exercise8Form').submitButton;
	const exercise8Declarations = document.getElementById('exercise8Form').condicion;
	const exercise8Content = document.getElementById('exercise8Content');
	const exercise8clear = document.createElement('button');

	exercise8SubmitButton.value = 'akceptuję i kupuję';

	function exercise8ClearProducts() {
		exercise8Content.innerHTML = '';
	};

	for(let i = 0; i < exercise8Declarations.length; i++) {
		//console.log(exercise8Declarations[i].value)
		exercise8Declarations[i].onclick = function() {
			exercise8SubmitButton.disabled = this.value === 'true';
		};
	};

	exercise8SubmitButton.onclick = function(e) {
		e.preventDefault();
		let checkedProducts = '';
		for (let i = 0; i < exercise8FormProducts.length; i++) {
			if(exercise8FormProducts[i].checked) {
				checkedProducts += exercise8FormProducts[i].value + '<br>';
			};
			
		};
		exercise8Content.innerHTML = checkedProducts;
		exercise8Content.appendChild(exercise8clear);
		exercise8clear.innerHTML = 'clear';
		exercise8clear.onclick = exercise8ClearProducts;
	};

//ZADANIE 9
	
	const exercise9Form = document.getElementById('exercise9Form');
	const exercise9Content = document.getElementById('exercise9Content');

	exercise9Form.sex.onchange = function() {
		if(this.value ==='women') {
			exercise9Content.innerHTML ='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Aiga_toiletsq_women_inv.svg/220px-Aiga_toiletsq_women_inv.svg.png" height="100" width="100">'
		} else if (this.value === 'men') {
			exercise9Content.innerHTML = '<img src="https://cdn0.iconfinder.com/data/icons/cosmo-navigation/40/human-256.png" height="100" width="100">';
		};
	};

//ZADANIE 10
	
	const userPassword = document.getElementById('exer10Form').password;
	const checkPasswordButton = document.getElementById('exer10Form').checkPasswordButton;
	const exer10Content = document.getElementById('exer10Content');
	const formula = /^[A-Z]{1}[a-z]{3,5}\*\d{2,4}$/;

	checkPasswordButton.onclick = function(e) {
		e.preventDefault();
		if (formula.test(userPassword.value)) {

			exer10Content.innerHTML = 'Hasło: ' + '"' + userPassword.value + '"' + 'jest poprawne!';

		} else {

			exer10Content.innerHTML = 'Hasło: ' + '"' + userPassword.value + '"' + 'jest błędne!';

		};
		//exer10Content.innerHTML = formula.test(userPassword.value);
	};

//ZADANIE 11
 	const exercise11Content = document.getElementById('exercise11Content');
 	const exercise11Clock = document.getElementById('exercise11Clock');
 	const today = new Date();
 	const birthDate = new Date('09/04/1987');

 	Date.prototype.getPolishDays = function() {
 		const days = ['Niedziela', 
					  'Poniedziałek', 
					  'Wtorek', 
					  'Środa', 
				      'Czwartek', 
					  'Piątek',
					  'Sobota'
		];
		return days[this.getDay()];
 	};
 	Date.prototype.getPolishMonth = function() {
 		const months = [
 						'Styczeń',
 						'Luty',
 						'Marzec',
 						'Kwiecień',
 						'Maj',
 						'Czerwiec',
 						'Lipiec',
 						'Sierpień',
 						'Wrzesień',
 						'Październik',
 						'Listopad',
 						'Grudzień'
 		];
 		return months[this.getMonth()];
 	};
 	function lifeTime(from, now) {
 		return parseInt((now - from)/1000/60/60/24); //dni
 	};

 	function Clock(handler) {
 		this.handler = handler;
 		this.actualDate = new Date();
 		this.clockRunning = function() {
 			this.actualDate = new Date();
 		};
 		this.refreshDisplayClock = function() {
 			this.handler.innerHTML = 'aktualny czas: ' + this.formattedTime();
 		};
 		this.start = function() {
 			this.refreshDisplayClock();
 			const self = this;
 			setInterval(function() {
 				self.refreshDisplayClock();
 				self.clockRunning();
 			}, 1000);
 		};
 	};

 	Clock.prototype.formattedTime = function() {
 		let dayTime = '';	
 		let hours = this.actualDate.getHours();
 		let minutes = this.actualDate.getMinutes();
 		let seconds = this.actualDate.getSeconds();
 		if(hours < 12) {
 				dayTime = ' AM';
 			} else {
 				dayTime = ' PM';
 		};
 		if(hours < 10) {
 			hours = '0' + hours;
 		};
 		if(minutes < 10) {
 			minutes = '0' + minutes;
 		};
 		if(seconds < 10) {
 			seconds = '0' + seconds;
 		};
 		return hours + ':' + minutes + ':' + seconds + dayTime;
 	};

 	const clock = new Clock(exercise11Clock);
 	clock.start();
 	
 	exercise11Content.innerHTML =
 								'dzień tygodnia: ' + today.getPolishDays() + '<br>' +
 								'miesiąc: ' + today.getPolishMonth() + '<br>' +
 								'rok: ' + today.getFullYear() + '<br>' +
 								'od moich narodzin upłyneło: ' + lifeTime(birthDate, today) + ' dni';


// ZADANIE 12
	const exercise12CookieCreate = document.getElementById('exercise12CookieCreate');
	const exercise12Display = document.getElementById('exercise12Display');

	exercise12CookieCreate.addEventListener('click', function() {
		document.cookie = "ciasteczko=pyszne; max-age=60; path=/";
		alert('ciasteczko zostało stworzone :)');
	});

}; //end of widdow.onload



	

	









