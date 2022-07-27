let leftRandomNum = Math.floor(Math.random() * 6) + 1;
let rightRandomNum = Math.floor(Math.random() * 6) + 1;

let leftImgSrc = "images/dice" + leftRandomNum + ".png";
let rightImgSrc = "images/dice" + rightRandomNum + ".png";

const leftImg = document.querySelectorAll("img")[0];
const rightImg = document.querySelectorAll("img")[1];

leftImg.setAttribute("src", leftImgSrc);
rightImg.setAttribute("src", rightImgSrc);

// Decide the winner
const title = document.querySelector(".change-text");
const player1Wins = "🥺 Cook by myself";
const player2Wins = "Eat out 🤩";
const draw = "Ooooopes! Try again!";

if(leftRandomNum > rightRandomNum) {
  title.innerHTML = player1Wins;
}
else if(leftRandomNum < rightRandomNum){
  title.innerHTML = player2Wins;
}
else {
  title.innerHTML = draw;
}
