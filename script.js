// Messages for No button
const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// Show Yes page
function showYesPage() {
  document.getElementById("indexPage").style.display = "none";
  document.getElementById("yesPage").style.display = "block";
}

// Handle No button click on Index page
function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Change No button text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Enlarge Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;

  // Small random movement for fun
  yesButton.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
  noButton.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
}

// Go back to Index page
function goBackToIndex() {
  document.getElementById("yesPage").style.display = "none";
  document.getElementById("noPage").style.display = "none";
  document.getElementById("indexPage").style.display = "block";

  // Reset buttons
  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");

  yesButton.style.fontSize = "1.5em";
  yesButton.style.transform = "none";
  noButton.style.transform = "none";
  noButton.textContent = "No";

  // Reset message index
  messageIndex = 0;
}