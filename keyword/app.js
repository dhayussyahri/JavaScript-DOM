// Belajar Javascript DOM - Manfaatkan Keyword This Pada Event Dom

const generateRandomColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);

   return `rgb(${r}, ${g}, ${b})`;

}