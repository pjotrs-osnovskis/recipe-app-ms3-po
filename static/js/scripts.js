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
let ingrAmount = document.querySelector("#ingredientAmount")
let myButton = document.querySelector('#myButton');
let newList = document.querySelector(".newList")

myButton.addEventListener('click', (e)=>{
    /*
        Function to add a list item with value(ingredient) selected
    */
    if(inputText.value != ""){
        e.preventDefault();
            //create li

            let list = document.createElement("ul");
            list.setAttribute("name", "ingredients")
            list.setAttribute("id", "ingredients")

            var myLi = document.createElement('li');
            myLi.setAttribute("name", "ingredient_name")
            myLi.setAttribute("id", "ingredient_name")
            myLi.innerHTML = inputText.value;

            var amount = document.createElement('li');
            amount.setAttribute("name", "ingredient_amount")
            amount.setAttribute("id", "ingredient_amount")
            amount.innerHTML = ingrAmount.value;

            newList.appendChild(list)
            list.appendChild(myLi);
            list.appendChild(amount);
        
        }
    });

