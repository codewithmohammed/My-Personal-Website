const scriptURL = 'https://script.google.com/macros/s/AKfycbwuDY-dlvkYBDUkwCy4bgh0ICbNEu3xzQ4btZ0HM9Uc1TQ89dNJpl6rWI8OBu9WC07P/exec';
const form = document.forms['contact-form'];

function formIsValid() {
    const name = document.getElementById('your-name').value;
    const number = document.getElementById('your-number').value;
    const email = document.getElementById('your-email').value;
    const message = document.getElementById('message').value;

    const namePattern = /^[A-Za-z\s]+$/; 
    const numberPattern = /^[0-9]+$/;

    if (!namePattern.test(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return false;
    }

    if (!numberPattern.test(number)) {
        alert('Please enter a valid number (numbers only).');
        return false;
    }

    if (name.trim() === '' || email === '' || message === '') {
        alert('The form cannot be empty');
        return false;
    }

    return true;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (formIsValid()) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert('Thank you! your form is submitted successfully.');
                    window.location.reload();
                } else {
                    alert('There was an error submitting the form.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    }
});
