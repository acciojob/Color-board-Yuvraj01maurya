//your JS code here. If required.
const container = document.querySelector('.container');

// Function to create 800 square boxes
function createBoxes() {
  for (let i = 0; i < 800; i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = getRandomColor();
      setTimeout(() => {
        box.style.backgroundColor = ''; // Reset background color after 1 second
      }, 1000);
    });
  }
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create 800 boxes when the window loads
window.onload = createBoxes;
