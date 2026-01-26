'use strict';


function showDeal() {
  const wantsDeal = confirm("Do you want to see today's deal?");

  if (wantsDeal) {
    alert("🔥 Deal of the day: 10% off all jackets!");
  } else {
    alert("No worries! Come back later.");
  }
}



function getUserColor() {
  let color = "";
  while (!color || color.trim() === "") {
    color = prompt("Enter a color for the first section:");
    if (!color || color.trim() === "") {
      alert("That is not a valid color. Try again!");
    }
  }
  return color;
}

function changeColorWithValidation() {
  const color = getUserColor();
  document.getElementById("section1").style.backgroundColor = color;
}