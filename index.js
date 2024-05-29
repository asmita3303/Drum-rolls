var totalbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<totalbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var buttonInnerHtml=this.innerHTML;
       toplay(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);
       
    });
}

document.addEventListener("keydown",function(event){
    toplay(event.key);
    buttonAnimation(event.key);
});

function toplay(char){
    switch (char) {
        case "w":
           var audio=new Audio('sounds/tom-1.mp3');
           audio.play();   
           break;

        case "a":
            var audio2=new Audio('sounds/tom-2.mp3');
            audio2.play();   
            break;
           
        case "s":
            var audio3=new Audio('sounds/tom-3.mp3');
            audio3.play();   
            break;    
        
        case "d":
           var audio4=new Audio('sounds/tom-4.mp3');
           audio4.play();   
           break;

        case "j":
            var audio5=new Audio('sounds/snare.mp3');
            audio5.play();   
            break;
           
        case "k":
            var audio6=new Audio('sounds/crash.mp3');
            audio6.play();   
            break; 
        
        case "l":
            var audio7=new Audio('sounds/kick-bass.mp3');
            audio7.play();   
            break; 
       
        default: console.log(this.innerHTML);
            break;
       }
}
 
function buttonAnimation(char){
    document.querySelector("."+char).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+char).classList.remove("pressed");
    },100);
}
