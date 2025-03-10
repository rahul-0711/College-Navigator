// Capture the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the username and store it in localStorage
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    
    // Store the login date and time in localStorage
    const currentDate = new Date();
    localStorage.setItem('loginTime', currentDate.toLocaleString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    }));
    
    // Redirect to the home page (after login page)
    window.location.href = 'Home.html';
});
