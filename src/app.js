/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getRandomValueFromArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
window.onload = function() {
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
      document.querySelector(".top-suit .bottom-suit").style.color = "red";
    } else
      document.querySelector(".top-suit .bottom-suit").style.color = "black";
  };

  const generatedSuitWithColor = generatedSuitColor();

  document.querySelector(".top-suit").innerHTML = generatedSuitWithColor;
  document.querySelector(".bottom-suit").innerHTML = generatedSuitWithColor;

  document.querySelector(".number").innerHTML = getRandomValueFromArray(
    allNumbers
  );
};
