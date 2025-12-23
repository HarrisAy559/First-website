// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const button = document.getElementById('clickMe');
    
    // Add click event listener
    button.addEventListener('click', function() {
        // Change button text
        button.textContent = 'You Clicked Me!';
        
        // Change button color
        button.style.background = '#27ae60';
        
        // Show alert message
        alert('Great job! You just used JavaScript! 🎉');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = 'Click Me!';
            button.style.background = '#3498db';
        }, 2000);
    });
    
    // Console log for learning
    console.log('Website loaded successfully!');
    console.log('Try clicking the button!');
});