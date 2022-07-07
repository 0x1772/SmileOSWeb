window.onload = choosePic;

var myPix = new Array("gif/animation.gif","gif/animation1.gif","gif/animation2.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
