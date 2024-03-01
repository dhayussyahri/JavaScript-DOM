// Belajar Javascript DOM - Event

const button = document.querySelector('#clickme');


button.onclick = function () {
   console.log('You can click me')
}

// Cara kedua

const scream = () => {
   console.log('Dont touch me')
}

button.onmouseover = scream;

// **********************************************

// Belajar Javascript DOM - AdEventListener

const eventbtn = document.querySelector('#eventbtn');

eventbtn.addEventListener('click', stepSatu);
eventbtn.addEventListener('dblclick', stepDua);

function stepSatu() {
   console.log('Step One Succes');
}


function stepDua() {
   console.log('Step Two Succes');
}

// **********************************************