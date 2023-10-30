/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getRandomValueFromArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
window.onload = function() {
  generateCard();
  const cardTimer = setInterval(generateCard, 10000);
  const generateButton = document.querySelector(".click-me");
  generateButton.addEventListener("click", generateCard);
};

function generateCard() {
  const allNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const allSuits = ["♦", "♥", "♠", "♣"];
  console.log("1", getRandomValueFromArray(allSuits));
  console.log("2", getRandomValueFromArray(allNumbers));

  const generatedSuitColor = () => {
    const suit = getRandomValueFromArray(allSuits);
    if (suit === "♦" || suit === "♥") {
      document.querySelector(".top-suit").style.color = "red";
      document.querySelector(".bottom-suit").style.color = "red";
    } else {
      document.querySelector(".top-suit").style.color = "black";
      document.querySelector(".bottom-suit").style.color = "black";
    }
    return suit;
  };

  const generatedSuitWithColor = generatedSuitColor();

  document.querySelector(".top-suit").innerHTML = generatedSuitWithColor;
  document.querySelector(".bottom-suit").innerHTML = generatedSuitWithColor;
  document.querySelector(".number").innerHTML = getRandomValueFromArray(
    allNumbers
  );

  const cardDiv = document.querySelector(".card");
  const widthInput = document.querySelector(".width-input");
  const heightInput = document.querySelector(".height-input");
  cardDiv.style.width = widthInput.value + "px";
  cardDiv.style.height = heightInput.value + "px";
}
