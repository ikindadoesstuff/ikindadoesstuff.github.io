let animationIsPlaying = false;
let currentPosition;
let prevPosition;
let navbar;
window.onload = function() {
    const alwaysShownPosition = 150;
    navbar = document.getElementsByClassName("nav-bar")[0];
    let animationIsPlaying = false;

    navbar.addEventListener("animationstart", function() {animationIsPlaying = true})
    navbar.addEventListener("animationend", function() {animationIsPlaying = false})

    setInterval(() => {
        console.log(`Loaded!\nanimationIsPlaying = ${animationIsPlaying}`)
    }, 1000)

    window.onscroll = function() {
        currentPosition = window.scrollY;
        console.log(`Current Pos  = ${currentPosition}`)
        console.log(`Previous Pos = ${prevPosition}`)
        if ((prevPosition > currentPosition || currentPosition < alwaysShownPosition) && animationIsPlaying === false ) {
            //navbar.style.animation = "simple-slide-down 1s";
            //navbar.style.top = "0";
        } else if (prevPosition < currentPosition && animationIsPlaying === false && currentPosition > alwaysShownPosition){
            //navbar.style.animation = "simple-slide-up 1s";
            //navbar.style.top = "-100px";
        }
        prevPosition = currentPosition;
    }

    setInterval(() => {
        currentPosition = window.scrollY;
        if(currentPosition < alwaysShownPosition && animationIsPlaying === false) {
            navbar.style.animation = "simple-slide-down 1s";
            navbar.style.top = "0";
        }
    }, 100)

}