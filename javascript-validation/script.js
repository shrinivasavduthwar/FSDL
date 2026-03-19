document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value.trim();

    let isValid = true;
    let errorMessage = '';

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('mobileError').textContent = '';

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number must be exactly 10 digits';
        isValid = false;
    }

    if (!isValid) {
        alert('Please fix the errors before submitting.');
        return;
    }

    alert('Registration successful! Welcome, ' + name);
    this.reset();
});
