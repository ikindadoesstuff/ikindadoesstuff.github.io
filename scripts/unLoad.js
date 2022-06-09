document.addEventListener("closing", function () {
    console.log("Detected")
    //const root = getComputedStyle(document.querySelector(":root"));
    plate = document.getElementById("transition-plate");
    plate.classList.add("exit")
},false)