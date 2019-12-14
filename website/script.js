var x = 75;
var y = 75;
var xsecond = x-10;
var ysecond = y-10;
var tenSecondAudio;
var audiosource;
var audiosourcesecond;
var didIPlay = false;
var imagesource = "imagenes/wideRoomWithASkeletonPartI.png";
function findCoordinates(event) {
 x = event.clientX-200;
 y = event.clientY-1;
 xsecond = x-50;
 ysecond = y-50;
if (x>=420 && x<=445 && y>=259 && y<=289) {
document.getElementById("illuminatedBackground").src=imagesource;
tenSecondAudio = document.getElementById("timeControlSilence");
audiosource = document.getElementById("screamfirst");
if (!didIPlay) {
didIPlay = true;
tenSecondAudio.play();
audiosource.play();
document.getElementById("message").innerHTML = "You have awakened the skeleton order!";
tenSecondAudio.onended = function(){
imagesource = "imagenes/wideRoomWithASkeletonPartII.png";
document.getElementById("message").innerHTML = "";
document.getElementById("wholeRoom").src=imagesource;    
document.getElementById("illuminatedBackground").src=imagesource;
audiosource = document.getElementById("screamlast");
audiosourcesecond = document.getElementById("backgroundMusic");
audiosourcesecond.pause();
audiosource.play();
audiosource.onended = function(){
location.href = 'invitationcard.html'    
}
}
}
}
// document.getElementById("illuminatedBackground").style.clip = "rect(0px "+x+"px "+y+"px 0px)"; 
document.getElementById("illuminatedBackground").style.clip = "rect("+ysecond+"px "+x+"px "+y+"px "+xsecond+"px)"; 
}   
function showBackground() {  
document.getElementById("illuminatedBackground").style.visibility = "visible";
}    
function hideBackground() {
document.getElementById("illuminatedBackground").style.visibility = "hidden";
} 