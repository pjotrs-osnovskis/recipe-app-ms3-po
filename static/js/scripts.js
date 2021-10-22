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

function remove(ingredient){
    /* Function to remove individual ingredient options that were added */
    ingredient.parentNode.parentNode.removeChild(ingredient.parentNode);
}



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
            //create an ingredient with amount

            let list = document.createElement("ul");
            list.setAttribute("name", "ingredients")
            list.setAttribute("id", "ingredients")

            var myLi = document.createElement('li');
            myLi.setAttribute("name", "ingredient_name")
            myLi.setAttribute("id", "ingredient_name")
            myLi.innerHTML = inputText.value + " x ";

            var amount = document.createElement('li');
            amount.setAttribute("name", "ingredient_amount")
            amount.setAttribute("id", "ingredient_amount")
            amount.innerHTML = ingrAmount.value;

            var remove = document.createElement("button");
            remove.setAttribute("onclick", "remove(this);");
            remove.setAttribute("class", "btn btn-sm btn-outline-danger");
            remove.innerHTML = "x"

            newList.appendChild(list)
            list.appendChild(myLi);
            list.appendChild(amount);
            list.appendChild(remove);
        
            document.getElementById("ingredientInput").value = "";
            document.getElementById("ingredientAmount").value = "";
        
        }
    
});

