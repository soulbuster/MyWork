var buttonDrumLength = document.querySelectorAll(".drum").length;
for(var i = 0;i<buttonDrumLength;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
  switch(this.innerText){
    case "w" :
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    document.querySelector(".w").classList.add("pressed");
    setTimeout(function (){document.querySelector(".w").classList.remove("pressed");},100);
    break;
    case "a" :
    var audio = new Audio('sounds/tom-3.mp3');
    document.querySelector(".a").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".a").classList.remove("pressed");},100);
    break;
    case "s" :
    var audio = new Audio('sounds/tom-1.mp3');
    document.querySelector(".s").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".s").classList.remove("pressed");},100);
    break;
    case "d" :
    var audio = new Audio('sounds/kick-bass.mp3');
    document.querySelector(".d").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".d").classList.remove("pressed");},100);
    break;
    case "j" :
    var audio = new Audio('sounds/tom-2.mp3');
    document.querySelector(".j").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".j").classList.remove("pressed");},100);
    break;
    case "k" :
    var audio = new Audio('sounds/tom-4.mp3');
    document.querySelector(".k").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".k").classList.remove("pressed");},100);
    break;
    case "l" :
    var audio = new Audio('sounds/crash.mp3');
    document.querySelector(".l").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".l").classList.remove("pressed");},100);
    break;
    default:
    console.log(this.innerText);
  }
  });
}

document.addEventListener("keydown",function(event){
  switch(event.key){
    case "w" :
    var audio = new Audio('sounds/snare.mp3');
    document.querySelector(".w").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".w").classList.remove("pressed");},100);
    break;
    case "a" :
    var audio = new Audio('sounds/tom-3.mp3');
    document.querySelector(".a").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".a").classList.remove("pressed");},100);
    break;
    case "s" :
    var audio = new Audio('sounds/tom-1.mp3');
    document.querySelector(".s").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".s").classList.remove("pressed");},100);
    break;
    case "d" :
    var audio = new Audio('sounds/kick-bass.mp3');
    document.querySelector(".d").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".d").classList.remove("pressed");},100);
    break;
    case "j" :
    var audio = new Audio('sounds/tom-2.mp3');
    document.querySelector(".j").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".j").classList.remove("pressed");},100);
    break;
    case "k" :
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    document.querySelector(".k").classList.add("pressed");
    setTimeout(function (){document.querySelector(".k").classList.remove("pressed");},100);
    break;
    case "l" :
    var audio = new Audio('sounds/crash.mp3');
    document.querySelector(".l").classList.add("pressed");
    audio.play();
    setTimeout(function (){document.querySelector(".l").classList.remove("pressed");},100);
    break;
    default:
    console.log(this.innerText);
  }
});
