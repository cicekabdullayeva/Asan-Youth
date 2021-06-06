// function myFunction(){
//   var x = document.getElementById("headerList").style.display;
//     x="flex";
//    if(x=="flex"){
//     x="none";
//    }
//    else{
//     x.style.display="flex";
//    }

// }
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var sliderNews;
var sliderHistory;
  $(document).ready(function() {
    sliderNews = $("#newsLightSlider").lightSlider();
    sliderHistory = $("#historyLightSlider").lightSlider();
  });

  $('.multiple-items').slick({
  
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
  
  ],
    prevArrow:"<button type='button' class='slick-prev pull-left button'><svg><use xlink:href='img/symbol-defs.svg#icon-chevron-thin-left'></use></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right button '><svg><use xlink:href='img/symbol-defs.svg#icon-chevron-thin-right'></use></svg></button>"

  });

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current + "+";
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
};





var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = day + "." + month + "." + year;
document.getElementById("historydate").innerHTML =   newdate;
var counterReseter = true;


inView('.counter')
  .on('enter', () => {
    if (!counterReseter) return;
    window.animateValue("value1", 0, 20, 3000);
    window.animateValue("value2", 0, 100, 3000);
    counterReseter = false;
  });


// function goToPrev(){
 
//   sliderNews.goToPrevSlide();
// }

// function goToNext(){
//   // var slider = $("#lightSlider").lightSlider();
//   // console.log(slider);
//   sliderNews.goToNextSlide();
// }

// function goToPrev2(){
 
//   sliderHistory.goToPrevSlide();
// }

// function goToNext2(){
// // var slider = $("#lightSlider").lightSlider();
// // console.log(slider);
// sliderHistory.goToNextSlide();
// }

