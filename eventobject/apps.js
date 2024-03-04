// Belajar Keyboard Event dan mengenal object dalam event
document.querySelector('button').addEventListener('click', () => {
   console.log('cek');

});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
   switch (e.code) {
      case 'ArrowUp':
         console.log('Tombol Atas');
         break;
      case 'ArrowDown':
         console.log('Tombol Bawah');
         break;
      case 'ArrowLeft':
         console.log('Tombol Kiri');
         break;
      case 'ArrowRight':
         console.log('Tombol Kanan');
         break;
   }
});

// input.addEventListener('keyup', (e) => {
//    console.log('Tombol dilepas !');
// });