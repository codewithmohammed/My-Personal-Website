const scriptURL = 'https://script.google.com/macros/s/AKfycbwuDY-dlvkYBDUkwCy4bgh0ICbNEu3xzQ4btZ0HM9Uc1TQ89dNJpl6rWI8OBu9WC07P/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

        function validateForm() {
            let isValid = true;

            // Reset error messages
            document.getElementById("name-error").textContent = "";
            document.getElementById("number-error").textContent = "";
            document.getElementById("email-error").textContent = "";
            document.getElementById("message-error").textContent = "";

            // Validate Name
            const name = document.getElementById("your-name").value;
            if (name === "") {
                document.getElementById("name-error").textContent = "Name is required";
                isValid = false;
            }

            // Validate Number
            const number = document.getElementById("your-number").value;
            if (number === "") {
                document.getElementById("number-error").textContent = "Number is required";
                isValid = false;
            } else if (!/^\d+$/.test(number)) {
                document.getElementById("number-error").textContent = "Invalid number format";
                isValid = false;
            }

            // Validate Email
            const email = document.getElementById("your-email").value;
            if (email === "") {
                document.getElementById("email-error").textContent = "Email is required";
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById("email-error").textContent = "Invalid email format";
                isValid = false;
            }

            // Validate Message
            const message = document.getElementById("message").value;
            if (message === "") {
                document.getElementById("message-error").textContent = "Message is required";
                isValid = false;
            }

            return isValid;
        }