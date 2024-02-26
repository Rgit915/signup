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
