document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic client-side validation
        if (!username || !password) {
            message.innerText = 'Please enter both username and password.';
            return;
        }

        if (username === 'john_doe' && password === 'password123') {
            message.innerText = 'Login successful! Redirecting...';

            // Redirect to another HTML page upon successful login
            setTimeout(function() {
                window.location.href = `home.html#User=${username}`;
            }, 2000); 
        } else {
            message.innerText = 'Invalid username or password.';
        }
    });
});