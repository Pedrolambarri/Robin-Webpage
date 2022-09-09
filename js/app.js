



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

/*Cuando hago click .button, .nav TOGGLE "Activo"

const button = document.querySelector('.button')
const nav     = document.querySelector('.nav')

button.addEventListener('click',()=>{
nav.classList.toggle('activo')

}) 

*/