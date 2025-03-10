window.onload = function () {
    // Fetch the username and login time from localStorage
    const username = localStorage.getItem('username');
    const loginTime = localStorage.getItem('loginTime');
    
    if (username) {
        document.getElementById('welcomeUser').innerText = `Welcome, ${username}`;
    }

    if (loginTime) {
        document.getElementById('loginTime').innerText = `Login time: ${loginTime}`;
    }

    // Check if it's the user's birthday (Example: 10th March)
    const currentDate = new Date();
    const birthday = new Date(currentDate.getFullYear(), 2, 10); // March 10th (Months are 0-indexed)
    if (currentDate.toDateString() === birthday.toDateString()) {
        document.getElementById('birthdayMessage').innerText = "Happy Birthday!";
    }

    // Dynamic functionality for "More..." links
    document.querySelectorAll('.more').forEach(moreLink => {
        moreLink.addEventListener('click', function () {
            alert("More details will be available soon.");
        });
    });
}
