$(document).ready(function() {
    $('#myForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        if (validateForm()) {
            // If form is valid, you can proceed with form submission (e.g., via AJAX)
            alert("Form is valid and ready to submit!");
        }
    });

    function validateForm() {
        var name = $('#name').val();
        var email = $('#email').val();
        var nameError = $('#nameError');
        var emailError = $('#emailError');
        var isValid = true;

        // Validasi nama
        if (name === "") {
            nameError.text("Nama tidak boleh kosong");
            isValid = false;
        } else {
            nameError.text("");
        }

        // Validasi email
        if (email === "") {
            emailError.text("Email tidak boleh kosong");
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.text("Email tidak valid");
            isValid = false;
        } else {
            emailError.text("");
        }

        return isValid;
    }

    // Fungsi untuk memeriksa apakah email valid menggunakan regular expression
    function isValidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
