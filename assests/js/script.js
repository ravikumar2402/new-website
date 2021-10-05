 "use strict";

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
// }
 
function openFunction() {
    let dots = document.getElementById("dotss");
    let moreText = document.getElementById("moree");
    let btnText = document.getElementById("aboutBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "KNOW MORE <span>&#8595;</span>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "KNOW LESS <span>&#8593;</span>"; 
      moreText.style.display = "inline";
    }
}
 // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
  } else {
      document.getElementById("topBtn").style.display = "none";
  }
 
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
  $('html, body').animate({scrollTop:0}, 'slow');
}