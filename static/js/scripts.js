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


function searchIngredients() {
    /*
    This function searches for ingredients, solution was found here:
    https://stackoverflow.com/questions/45055107/how-to-hide-the-list-items-from-search-filter-when-search-input-field-is-cleare
    */
    // const ingrList = document.getElementById('ingredientsUL');
    // const listItem = document.getElementById('ingrItem');
    // listItem.innerHTML = `
    // <a id="${ingredient.ingredient_name}"> {{ ingredient.ingredient_name }} </a>
    // `
    // ingrList.appendChild(listItem);

    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("ingredientsUL");
        li = ul.getElementsByTagName('li');

        if(input.value.length == 0){
            ul.style.display = "none";
            return;
        }else{
            ul.style.display = "block";
            ul.style.height = "10rem";
            ul.style.width = "15rem";
            ul.style.overflow = "auto";
        }
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
            } else {
                li[i].style.display = "none";
            }
        }


        let inputText = document.querySelector("#ingr");
        let myButton = document.querySelector('#myButton');
        let list = document.querySelector("#ingredientsUL");
        myButton.addEventListener('click', (e)=>{
            if(inputText.value == ""){
                e.preventDefault();
                    //create li
                    const myLi = document.createElement('li');
                    myLi.innerHTML = inputText.value;
                    list.appendChild(myLi);}
            else{
                console.log (inputText.value)
            }
            })
        
    }


