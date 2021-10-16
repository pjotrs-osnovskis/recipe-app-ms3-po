/*
    Checking registration form if password and confirm_password match 
    as well as if not empty then remove disabled attribute from registration button.
    Code snippet found here:
    https://newbedev.com/how-to-check-confirm-password-field-in-form-without-reloading-page
    Then optimized to project needs.
*/
$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() != $('#confirm_password').val() || document.forms["regForm"]["password"].value == "" && document.forms["regForm"]["confirm_password"].value == "")  {
        document.getElementById("regBtn").setAttribute("disabled", "");
    }else if ($('#password').val() != $('#confirm_password').val() || document.getElementById("regBtn").value == "")
        document.getElementById("regBtn").removeAttribute("disabled");

});