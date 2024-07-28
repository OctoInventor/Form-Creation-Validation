document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Initialize message
        let message = '';

        // Validate username
        if (username.length < 3) {
            message += 'Username must be at least 3 characters long.<br>';
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message += 'Please enter a valid email address.<br>';
        }

        // Validate password
        if (password.length < 6) {
            message += 'Password must be at least 6 characters long.<br>';
        }

        // Display message
        const messageElement = document.getElementById('message');
        if (message === '') {
            messageElement.innerHTML = 'Form submitted successfully!';
            messageElement.style.color = 'green';
        } else {
            messageElement.innerHTML = message;
            messageElement.style.color = 'red';
        }
    });
});