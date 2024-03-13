function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


let text = ['A Computer Engineer' ,'A Full Stack Developer','An aspiring Learner'];
let textTodisplay = document.getElementById('textToDisplay');
let currentLetter = 0;
let currentText = 0;

function displayText() {

    if (currentLetter === 0) {
        textToDisplay.textContent = '';
    }

    if (currentText >= text.length) {
        currentText = 0; 
    }

    if (currentLetter < text[currentText].length) {
        textToDisplay.textContent += text[currentText][currentLetter];
        currentLetter++;
    } else {
        currentLetter = 0;
        currentText++;
    }
  
    
}
setInterval(displayText, 250);