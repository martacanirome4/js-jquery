// script.js
$(document).ready(function () {
    $("#registerButton").click(function () {
        $("#confirmationMessage").hide();
        $("#registrationForm").slideUp(400, function () {
            // Animation complete.
            $(this).show(); // Show the form again
        });
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
            $("#nameError").text("Por favor, introduce tu nombre y apellidos");
        }

        // Email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isEmailValid = emailRegex.test(email);
        if (!isEmailValid) {
            $("#emailError").text("Por favor, introduce una dirección de correo electrónico válida");
        }

        // Phone validation
        const phoneRegex = /^[0-9]+$/;
        const isPhoneValid = phoneRegex.test(phone);
        if (!isPhoneValid) {
            $("#phoneError").text("El teléfono debe contener sólo números, sin espacios");
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const isPasswordValid = passwordRegex.test(password);
        if (!isPasswordValid) {
            $("#passwordError").text("La contraseña debe tener al menos 8 caracteres con una letra mayúscula, una letra minúscula y un número");
        }

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            $("#confirmationMessage").text("¡Usuario registrado con éxito!");
            $("#confirmationMessage").show();
        } else {
            $("#confirmationMessage").hide();
        }
    });
});
