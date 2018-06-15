/*To make the gallery for the Story Page I used https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("comicSlides");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}