
// (function() {
//   $('.delayed-img').lazy();
// }());
var btn = document.getElementsByClassName("mobileDropDown");
var i;

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}
function scrollDown(element,num){
  $('html,body').animate({
    scrollTop: $('#' + element).offset().top - num
  },'slow');
}

/*==================*/

var slideIndex;

var frameCont = document.getElementById("framecont");
var slides = document.getElementsByClassName("slide");
var frameBtn = document.getElementsByClassName("frame-nav-btn");

slideIndex = 1;
offsetWidth = 0;

gallerySlider(slideIndex);

/*========*/
function sliderCurrent(num){

  gallerySlider(slideIndex = num);

}

function sliderPlus(num){

  gallerySlider(slideIndex += num);

}
window.onresize = function(){

  var offsetWidth = slides[slideIndex-1].offsetLeft;

  frame.style.transform = "translate(-"+ offsetWidth +"px,0)"
}
/*========*/

function gallerySlider(num){

  if(num > slides.length){
    slideIndex = 1;
  }

  if(num < 1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "slide";
  }

  for (var i = 0; i < frameBtn.length; i++) {
    frameBtn[i].className = "frame-nav-btn";
  }

  slides[slideIndex-1].classList = "slide active";

  frameBtn[slideIndex-1].classList = "frame-nav-btn active";
  /*--- check width --*/
  var offsetWidth = slides[slideIndex-1].offsetLeft;

  frame.style.transform = "translate(-"+ offsetWidth +"px,0)"

  frameCont.className = "framecont-" + slideIndex + "";
}

/*========*/
