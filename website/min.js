var tenSecondAudio,audiosource,audiosourcesecond,x=75,y=75,xsecond=x-10,ysecond=y-10,didIPlay=!1,imagesource="imagenes/wideRoomWithASkeletonPartI.png";function findCoordinates(e){x=e.clientX-200,y=e.clientY-1,xsecond=x-50,ysecond=y-50,x>=420&&x<=445&&y>=259&&y<=289&&(document.getElementById("illuminatedBackground").src=imagesource,tenSecondAudio=document.getElementById("timeControlSilence"),audiosource=document.getElementById("screamfirst"),didIPlay||(didIPlay=!0,tenSecondAudio.play(),audiosource.play(),document.getElementById("message").innerHTML="You have awakened the skeleton order!",tenSecondAudio.onended=function(){imagesource="imagenes/wideRoomWithASkeletonPartII.png",document.getElementById("message").innerHTML="",document.getElementById("wholeRoom").src=imagesource,document.getElementById("illuminatedBackground").src=imagesource,audiosource=document.getElementById("screamlast"),(audiosourcesecond=document.getElementById("backgroundMusic")).pause(),audiosource.play(),audiosource.onended=function(){location.href="invitationcard.html"}})),document.getElementById("illuminatedBackground").style.clip="rect("+ysecond+"px "+x+"px "+y+"px "+xsecond+"px)"}function showBackground(){document.getElementById("illuminatedBackground").style.visibility="visible"}function hideBackground(){document.getElementById("illuminatedBackground").style.visibility="hidden"}