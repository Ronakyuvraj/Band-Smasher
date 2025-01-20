// var numOfDrumButtons = document.querySelectorAll(".drum").length;
// ach
// for(var i = 0;i<numOfDrumButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }
// document.querySelectorAll(".drum").addEventListener("click", handleClick); 
document.querySelectorAll(".drum").forEach(function (button) {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    var buttonInnerHtml = this.innerHTML;

    keyPress(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);


    // this.style.color = "";


}
document.addEventListener("keypress",function(event){
   
    keyPress(event.key);
    buttonAnimation(event.key);
});
function keyPress(key){

    switch (key) {
        case "w":
            // this.style.color = "white";

            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "a":
            // this.style.color = "white";

            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "s":
            // this.style.color = "white";

            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "d":
            // this.style.color = "white";

            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            // this.style.color = "white";

            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            // this.style.color = "white";

            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            // this.style.color = "white";
// 
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

    }

}

function buttonAnimation(currentKey){

  var  activeButton =  document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);


}