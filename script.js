const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const menu = document.querySelector('.menu');
const user = document.getElementById('user-mobile');
const dropdown = document.querySelector('.menu-dropdown');

let isXShape = false; // Track the current state

// Function to handle the click event
function handleClick() {
	if (isXShape) {
		// Animate the lines back to three lines
		dropdown.style.opacity = '0';
		dropdown.style.marginBottom = '-226px';
		dropdown.style.transform = 'translateY(-230px)';
		dropdown.style.transitionDuration = '0.4s';
		dropdown.style.transitionTimingFunction = 'linear';
		line1.style.transform = 'translate(0, 0) rotate(0deg)';
		line1.style.transitionDuration = '0.5s';
		line2.style.transform = 'scaleX(1)';
		line2.style.transitionDuration = '0.3s';
		line3.style.transform = 'translate(0, 0) rotate(0deg)';
		line3.style.transitionDuration = '0.5s';
		user.style.opacity = '1';
		user.style.transitionDuration = '0.5s';

		isXShape = false; // Update the state
	} else {
		// Animate the lines to form an X
		dropdown.style.opacity = '1';
		dropdown.style.marginBottom = '-40px';
		dropdown.style.transform = 'translateY(230px)';
		dropdown.style.transitionDuration = '0.4s';
		dropdown.style.transitionTimingFunction = 'linear';
		line1.style.transform = 'translate(0, 220%) rotate(135deg)';
		line1.style.transitionDuration = '0.5s';
		line2.style.transform = 'scaleX(0)';
		line2.style.transitionDuration = '0.3s';
		line3.style.transform = 'translate(0, -220%) rotate(-135deg)';
		line3.style.transitionDuration = '0.5s';
		user.style.opacity = '0';
		user.style.transitionDuration = '0.5s';

		isXShape = true; // Update the state
	}
}

// Add click event listeners to the lines
menu.addEventListener('click', handleClick);
