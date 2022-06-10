function buttonClick(currentID, href) {
    const event = new Event("closing");
    document.dispatchEvent(event)
    currentElement = document.getElementById(currentID);
    currentElement.style.animation = "button-slide-up 1s";
    
    setTimeout(() => {
        navbar = document.getElementsByClassName("nav-bar")[0];
        navbar.style.animation = "simple-slide-up 1s";
        navbar.style.top = "-100px";
    }, 500);
    setTimeout(() => {
        window.location.href = href;
    },1000);
}