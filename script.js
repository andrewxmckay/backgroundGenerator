var css = document.querySelector("h3");
var color1 = document.querySelector(".colorInput1");
var color2 = document.querySelector(".colorInput2");
var body = document.getElementById("gradient");
var randomColorButton = document.getElementById("randomColorButton");

function generateRandomHexColor() {
    const randomNum = Math.floor(Math.random() * 16777215);
    return "#" + randomNum.toString(16).padStart(6, "0");
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

// Update gradient when colors are chosen
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random button updates inputs AND gradient
randomColorButton.addEventListener("click", () => {
    color1.value = generateRandomHexColor();
    color2.value = generateRandomHexColor();
    setGradient();
});

// Set initial gradient on page load
setGradient();


