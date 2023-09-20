// slider section js

var sliderImg = document.getElementById("sliderImg");
  
var images = new Array(
    "/img/g1.jpg",
    "/img/slider1.jpg",
    "/img/slider2.jpg",
    "/img/slider3.jpg",
    "/img/slider4.jpg",
    "/img/slider5.jpg",
    "/img/slider6.jpg",
    "/img/slider7.jpg"
);

var len = images.length;
var i =0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    sliderImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}




