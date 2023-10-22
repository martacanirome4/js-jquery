// script.js
$(document).ready(function () {
    $("#registerButton").click(function () {
        $("#registrationForm").fadeIn();
        $("#confirmationMessage").hide();
    });

    $("#cancelButton").click(function () {
        $("#registrationForm").fadeOut();
        $("#confirmationMessage").hide();
    });

    $("#submitButton").click(function () {
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const password = $("#password").val();

        // Reset error messages
        $(".error-message").text("");

        // Name and surname validation
        const nameRegex = /^[\p{L}]+([\s][\p{L}]+)+$/u;
        const isNameValid = nameRegex.test(name);
        if (!isNameValid) {
            $("#nameError").text("Name and surname must contain at least two words, with letters only.");
        }

        // Email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isEmailValid = emailRegex.test(email);
        if (!isEmailValid) {
            $("#emailError").text("Please enter a valid email address.");
        }

        // Phone validation
        const phoneRegex = /^[0-9]+$/;
        const isPhoneValid = phoneRegex.test(phone);
        if (!isPhoneValid) {
            $("#phoneError").text("Phone must contain only numbers, with no spaces.");
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const isPasswordValid = passwordRegex.test(password);
        if (!isPasswordValid) {
            $("#passwordError").text("Password must be at least 8 characters with one uppercase letter, one lowercase letter, and one number.");
        }

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            $("#confirmationMessage").text("Registration successful!");
            $("#confirmationMessage").show();
        } else {
            $("#confirmationMessage").hide();
        }
    });
});
