document.getElementById('gform_2').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Reset messages
    formMessage.textContent = '';
    confirmationMessage.style.display = 'none';

    // Front-end Validation
    if (!form.checkValidity()) {
        formMessage.textContent = 'Please fill out all required fields correctly.';
        return;
    }

    try {
        // Send the form data using AJAX (Fetch API)
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
        });

        // Log the status code for debugging
        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error('Network response was not ok. Status: ' + response.status);
        }

        const result = await response.text(); // Assuming the server returns a text response
        console.log('Server response:', result); // Log the server response for debugging

        // Handle success response
        confirmationMessage.style.display = 'block'; // Show confirmation message
        form.reset(); // Reset the form fields

        // Optionally, redirect or reload page after a successful submission
        setTimeout(() => {
            window.location.reload(); // Reload the page after 3 seconds
        }, 3000);

    } catch (error) {
        // Log the error for debugging
        console.error('Form submission error:', error);

        // Handle any errors that occur during the fetch
        formMessage.textContent = 'There was a problem submitting the form. Please try again.';
    }
});