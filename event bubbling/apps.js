// Mengenal Event Bubbling

const button = document.querySelector('#ChangeColor');
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
   container.style.backgroundColor = generatorRandomColor();
   e.stopPropagation(); //untuk menghentikan aksi selanjutnya
});

container.addEventListener('click', () => {
   container.classList.toggle('hide');
});

const generatorRandomColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);

   return `rgb(${r}, ${g}, ${b})`;
}