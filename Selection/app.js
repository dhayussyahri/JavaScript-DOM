// Belajar Java Script DOM
// GetElementByTagName

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//    // console.log(img.src)
//    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg'
// }

// getElementByClassName

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg'
// }

// *******************************************************************
// Lebih Mudah Memilih Element Dengan Menggunakan Queryselector

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//    console.log(link.href)
// }

// *****************************************************************
// Memahami Innerthtml, Innertext Dan Textcontent

const links = document.querySelectorAll('p a');

for (let link of links) {
   link.innerText = 'Saya adalah link!';
}