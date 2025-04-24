// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // Time-based greeting
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : 
                    hour < 18 ? "Good Afternoon" : "Good Evening";
    document.getElementById('greeting').textContent = `${greeting}, I'm`;
});