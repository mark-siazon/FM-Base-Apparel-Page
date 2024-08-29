// Simple email validation
document.querySelector('.submit-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const errorIcon = document.querySelector('.danger-btn');
    const emailLabel = document.getElementById('email-label');
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput.value);
    
    if (!isValidEmail) {
      errorIcon.classList.remove('d-none'); // Show the error icon
      emailLabel.classList.remove('success'); // Sent content
      emailLabel.classList.add('error'); // Change the content to error message
    } else {
      errorIcon.classList.add('d-none'); // Hide the error icon
      emailLabel.classList.remove('error'); // Revert to default content
      emailLabel.classList.add('success'); // Sent content
    }
});