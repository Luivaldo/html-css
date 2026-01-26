'use strict'


function changeColor() {
  const color = prompt("Enter a color for the first section");

  if (color && color.trim() !== "") {
    document.getElementById("section1").style.backgroundColor = color;
  }
}

function showDeal() {
  const wantsDeal = confirm("Do you want to see today's deal?");

  if (wantsDeal) {
    alert("🔥 Deal of the day: 10% off all jackets!");
  } else {
    alert("No worries! Come back later.");
  }
}
