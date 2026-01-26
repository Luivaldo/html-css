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


function getValidNumber() {
  let number;

  do {
    number = prompt("How many jackets do you want to see? (1–10)");
    number = Number(number);

    if (isNaN(number) || number < 1 || number > 10) {
      alert("Please enter a number between 1 and 10.");
    }
  } while (isNaN(number) || number < 1 || number > 10);

  return number;
}


function showJackets() {
  const count = getValidNumber();
  const container = document.getElementById("jacket-container");

  container.innerHTML = ""; 

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src =
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300";
    img.alt = "Jacket for sale";
    img.style.margin = "5px";
    img.style.width = "120px";

    container.appendChild(img);
  }
}
