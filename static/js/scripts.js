$('#reg-password, #confirm_password').on('keyup', function () {
    /*
        Checking registration form if password and confirm_password match 
        as well as if not empty then adds exclamation mark to password fields.
        Code snippet found here:
        https://newbedev.com/how-to-check-confirm-password-field-in-form-without-reloading-page
        Then optimized to project needs.
    */
    if ($('#reg-password').val() != $('#confirm_password').val())  {
        $("[id=exclIcon").css("visibility", "visible")

    } else if ($('#reg-password').val() == $('#confirm_password').val() || $("#regBtn").val() != "")
        $("[id=exclIcon").css("visibility", "hidden")
});


let inputText = document.querySelector("#ingredientInput");
let myButton = document.querySelector('#myButton');
let list = document.querySelector(".newList ul");

myButton.addEventListener('click', (e)=>{
    /*
        Function to add a list item with value(ingredient) selected
    */
    if(inputText.value != ""){
        e.preventDefault();
            //create li
            var myLi = document.createElement('li');
            myLi.innerHTML = inputText.value;
            list.appendChild(myLi);}
    });

