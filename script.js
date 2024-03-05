document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform signup logic here with firstName, lastName, email, and password
    console.log('Form submitted:', { firstName, lastName, email, password });

    // You can reset the form after submission if needed
    form.reset();
  });
});


const toggle = document.querySelector('[name="toggle-css"]');
let stylesLoaded = false;

// Function to dynamically load or remove the styles from style.css
function toggleStyles() {
  // Check if styles are loaded
  if (stylesLoaded) {
    // If loaded, remove the styles
    document.head.querySelector('link[href="style.css"]').remove();
  } else {
    // If not loaded, dynamically load the styles
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'style.css';
    document.head.appendChild(styles);
  }

  // Toggle the 'stylesLoaded' variable
  stylesLoaded = !stylesLoaded;
}

// Add a click event listener to the button, calling toggleStyles when clicked
toggle.addEventListener('click', toggleStyles);
