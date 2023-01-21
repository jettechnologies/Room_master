// Code for image slider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  var x = document.querySelectorAll(".slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Code for respnsive navbar
const menu = document.querySelector(".menu"),
      navList = document.querySelector(".nav_list"),
      menuClose = document.querySelector(".close_menu"),
      blur = document.querySelector(".container_blur");

// For removing the slide-in class once the body loads
window.addEventListener("load", function(){
    if(navList.classList.contains("slide_in")){
        navList.classList.remove("slide_in");  
    }
});

// Adding the slide-in animation class
menu.addEventListener("click", function(e){
    e.preventDefault();

    if(navList.classList.contains("slide_out")){
        navList.classList.remove("slide_out");
    }
    navList.classList.add("slide_in");
    blur.classList.add("blur");
    document.body.style.overflowY ="hidden"; 
});

// Removing the slide-in animation class
menuClose.addEventListener("click", function(e){
    e.preventDefault();

    if(navList.classList.contains("slide_in")){
        navList.classList.remove("slide_in");
    }
    navList.classList.add("slide_out");
    blur.classList.remove("blur");
    document.body.style.overflowY =""; 
});