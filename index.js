// alert("welcome to drum kit website");
document.querySelectorAll(".drum").forEach((element) => {element.addEventListener("click", () => {playSound(element.innerHTML)})});

document.addEventListener("keydown", (event) => {
    // alert(event.key+" key was pressed");
    // console.log(event);
    playSound(event.key);
});


function playSound(buttonKey)
{

    
    buttonKey = buttonKey.toLowerCase();
    let drumKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    if(drumKeys.includes(buttonKey))
    {
        button = document.querySelector("."+buttonKey);
        button.classList.add("pressed");
        setTimeout(() => {button.classList.remove("pressed")}, 80);
        switch(buttonKey)
        {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            default :
                console.log("no such button");
        }
    }
    // console.log(buttonKey);
    
}