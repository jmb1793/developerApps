// Dice Roll
let randomNumber1 = Math.floor(Math.random() * 6) + 1,
    randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = "images/dice" + randomNumber1.toString() + ".png",
    img2 = "images/dice" + randomNumber2.toString() + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

// Winner Display
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👑Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!👑";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}