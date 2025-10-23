// Diagnostic script - Add this to index.html temporarily before main.js
// to see detailed loading information

console.log('%c=== DIAGNOSTIC START ===', 'background: #222; color: #00ff00; font-size: 16px; font-weight: bold;');

// Check document state
console.log('Document readyState:', document.readyState);

// Check if jQuery is loaded
console.log('jQuery loaded:', typeof jQuery !== 'undefined');

// Check if Bootstrap is loaded
console.log('Bootstrap loaded:', typeof bootstrap !== 'undefined');

// Check if Font Awesome is loaded
const testIcon = document.createElement('i');
testIcon.className = 'fas fa-sun';
document.body.appendChild(testIcon);
const iconStyles = window.getComputedStyle(testIcon);
console.log('Font Awesome loaded:', iconStyles.fontFamily.includes('Font Awesome'));
document.body.removeChild(testIcon);

// Check navbar structure
console.log('Navbar elements found:');
console.log('  .navbar:', document.querySelector('.navbar'));
console.log('  .navbar-nav:', document.querySelector('.navbar-nav'));
console.log('  #navbarCollapse:', document.querySelector('#navbarCollapse'));

// Check for theme attribute
console.log('Current data-theme:', document.documentElement.getAttribute('data-theme'));

// Monitor when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c=== DOMContentLoaded fired ===', 'background: #222; color: #ffff00; font-size: 14px;');
    console.log('Navbar at DOMContentLoaded:', document.querySelector('.navbar-nav'));
});

// Monitor when everything is loaded
window.addEventListener('load', function() {
    console.log('%c=== Window.load fired ===', 'background: #222; color: #ff9900; font-size: 14px;');
    console.log('Navbar at window.load:', document.querySelector('.navbar-nav'));
    
    // Check if toggle button exists after everything loads
    setTimeout(function() {
        const toggle = document.querySelector('.theme-toggle-nav');
        console.log('%c=== FINAL CHECK (500ms after load) ===', 'background: #222; color: #ff0000; font-size: 16px; font-weight: bold;');
        console.log('Toggle button exists:', !!toggle);
        if (toggle) {
            console.log('Toggle button HTML:', toggle.innerHTML);
            console.log('Toggle button classes:', toggle.className);
            console.log('Toggle button parent:', toggle.parentElement);
            
            // Try clicking it programmatically
            console.log('Testing programmatic click...');
            toggle.click();
        } else {
            console.error('❌ TOGGLE BUTTON NOT FOUND!');
            console.log('All .nav-link elements:', document.querySelectorAll('.nav-link'));
        }
    }, 500);
});

console.log('%c=== DIAGNOSTIC END ===', 'background: #222; color: #00ff00; font-size: 16px; font-weight: bold;');
