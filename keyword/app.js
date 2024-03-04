// Belajar Javascript DOM - Manfaatkan Keyword This Pada Event Dom
const buttons = document.querySelectorAll('button');
const headings = document.querySelectorAll('h1');

const generateRandomColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);

   return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
   this.style.backgroundColor = generateRandomColor();
   this.style.color = generateRandomColor();
}

for(let button of buttons) {
   button.addEventListener('click', colorize);
}

for (let heading of headings) {
   heading.addEventListener('click', colorize);
}
//* perulangan
// for (let button of buttons) {
//    button.addEventListener('click', () => {
//       button.style.backgroundColor = generateRandomColor();
//       button.style.color = generateRandomColor();
//       console.log(this);
//    })
// }


// for (let heading of headings) {
//    heading.addEventListener('click', () => {
//       heading.style.backgroundColor = generateRandomColor();
//       heading.style.color = generateRandomColor();
//    });
// }
