// alert("welcome to drum kit website");
document.querySelectorAll(".drum").forEach((element) => {element.addEventListener("click", () => {playSound(element.innerHTML)})});
function playSound(button)
{
    console.log(button);
    switch(button)
    {
        case "w":
            console.log("w pressed");
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play;
            break;
        case "a":
            console.log("a pressed");
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play;
            break;
        case "s":
            console.log("s pressed");
            break;
        case "d":
            console.log("d pressed");
            break;
        case "j":
            console.log("j pressed");
            break;
        case "k":
            console.log("k pressed");
            break;
        case "l":
            console.log("l pressed");
            break;
        default :
            console.log("no such button");
    }
}