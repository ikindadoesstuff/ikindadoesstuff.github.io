//Hover FX
document.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log("HOVER")
        const sound = new Audio("assets/sounds/hover2.wav");
        sound.play()
    }
})