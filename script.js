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

        // Name and surname validation
        const nameRegex = /^[\p{L}]+([\s][\p{L}]+)+$/u;
        const isNameValid = nameRegex.test(name);

        // Email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isEmailValid = emailRegex.test(email);

        // Phone validation
        const phoneRegex = /^[0-9]+$/;
        const isPhoneValid = phoneRegex.test(phone);

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const isPasswordValid = passwordRegex.test(password);

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            $("#confirmationMessage").text("¡Usuario registrado con éxito!");
            $("#confirmationMessage").show();
        } else {
            $("#confirmationMessage").text("Registro fallido, compruebe los datos ingresados.");
            $("#confirmationMessage").show();
        }
    });
});
