$('#reg-password, #confirm_password').on('keyup', function () {
    /*
        Checking registration form if password and confirm_password match 
        as well as if not empty then remove disabled attribute from registration button.
        Code snippet found here:
        https://newbedev.com/how-to-check-confirm-password-field-in-form-without-reloading-page
        Then optimized to project needs.
    */

    if ($('#reg-password').val() != $('#confirm_password').val()) {
        $("#regBtn").attr("disabled", "");

    } else if ($('#reg-password').val() == $('#confirm_password').val() || $("#regBtn").val() != "") 
        $("#regBtn").removeAttr("disabled");

});

$('#reg-password, #confirm_password').on('keyup', function () {
    /*
        Same as function above, but adds exclamation mark to confirm password
    */
    if ($('#reg-password').val() != $('#confirm_password').val())  {
        $("#exclIcon").css("visibility", "visible")

    } else if ($('#reg-password').val() == $('#confirm_password').val() || $("#regBtn").val() != "")
        $("#exclIcon").css("visibility", "hidden")
});