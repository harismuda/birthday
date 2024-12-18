onload = () =>{
        document.body.classList.remove("container");
}; 

var audio = new Audio("Sound/lagu.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}
