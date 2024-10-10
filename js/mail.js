function validateForm() {
    const nameField = document.getElementById("full_name");
    const emailField = document.getElementById("email_id");
    const messageField = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    clearErrors(); // Clear any previous errors

    if (nameField.value.trim() === "") {
        showError(nameField, "Name field cannot be empty.");
        isValid = false;
    }

    if (!emailRegex.test(emailField.value.trim())) {
        showError(emailField, "Please enter a valid email (e.g., abc@example.com).");
        isValid = false;
    }

    if (messageField.value.trim() === "") {
        showError(messageField, "Message field cannot be empty.");
        isValid = false;
    }

    return isValid;
}

function showError(field, message) {
    field.classList.add("error-border");

    const errorElement = document.createElement("div");
    errorElement.classList.add("error-message");
    errorElement.innerText = message;

    field.parentElement.appendChild(errorElement);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    const errorBorders = document.querySelectorAll(".error-border");

    errorMessages.forEach(msg => msg.remove());
    errorBorders.forEach(field => field.classList.remove("error-border"));
}



// mail.js
function SendMail(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Validate the form before sending the mail
    if (!validateForm()) {
        return;  // If validation fails, do not proceed
    }

    var parms = {
        full_name: document.getElementById("full_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_f31fpy7", "template_6hlj3e9", parms)
        .then(function (response) {
            alert("Message Sent!");
        }, function (error) {
            alert("Failed to send message: " + error.text);
        });
}
