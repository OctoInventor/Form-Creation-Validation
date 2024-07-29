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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant

    form.addEventListener('submit', function(event) {
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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    form.addEventListener('submit', function(event) {
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
        if (message === '') {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = message;
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    form.addEventListener('submit', function(event) {
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
        if (message === '') {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = message;
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

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
        if (message === '') {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = message;
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Display message
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Display message
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Display message
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        // Display message
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display message
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display message
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.innerHTML = 'Form submitted successfully!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display message
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form'); // Select the form and store in a constant
    const feedbackDiv = document.getElementById('form-feedback'); // Select the feedback division and store in a constant

    // Select each input field by its respective ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Declare variables for validation
        let isValid = true; // Track overall validation status
        let messages = []; // Store validation error messages

        // Get input values and trim whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display message
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
