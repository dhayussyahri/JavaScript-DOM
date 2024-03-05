// Mengenal Event Preventdefault
const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');


// input.addEventListener('change', (e) => {
//    console.log('Nilai Berubah');
// });

input.addEventListener('input', (e) => {
   console.log('Nilai diinput');
});


form.addEventListener('submit', function (e) {
   e.preventDefault();
   const noteValue = input.value;
   const newlist = document.createElement('li');
   newlist.innerText = noteValue;

   list.append(newlist);
   input.value = '';
});


// document.querySelector('a').addEventListener('click', (e) => {
//    e.preventDefault();
// });

// event Prevent default = untuk mencegah proses selanjutnya dari sebuah interaksi behavior default