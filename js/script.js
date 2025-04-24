// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Dynamic Greeting
function setGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning 🌞" : 
                    hour < 18 ? "Good Afternoon ☀️" : 
                    "Good Evening 🌙";
    document.getElementById('greeting').textContent = greeting;
}

// Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    // Submit form logic
});

// Initialize
window.onload = () => {
    setGreeting();
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};