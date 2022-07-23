var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

// console.log(randomNumber1);
// console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);