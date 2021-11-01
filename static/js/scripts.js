function mobileNav() {
    // Navigation trigger for mobile view menu button
    var x = document.querySelector(".navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}

function goBack() {
    /*
        Function for "Back" button
        Code snippet found here:
        https://newbedev.com/how-to-check-confirm-password-field-in-form-without-reloading-page
    */
    window.history.back();
  }

$('#reg-password, #confirm_password').on('keyup', function () {
    /*
        Checking registration form if password and confirm_password match 
        as well as if not empty then adds exclamation mark to password fields.
        Code snippet found here:
        https://newbedev.com/how-to-check-confirm-password-field-in-form-without-reloading-page
        Then optimized to project needs.
    */
    if ($('#reg-password').val() != $('#confirm_password').val()) {
        $("[id=exclIcon").css("visibility", "visible")

    } else if ($('#reg-password').val() == $('#confirm_password').val())
        $("[id=exclIcon").css("visibility", "hidden")
});


var deleteLinks = document.querySelectorAll('#delete-btn');
for (var i = 0; i < deleteLinks.length; i++) {
/*
    Delete confirmation function for delete-btn class
    Code ideas taken from here:
    https://stackoverflow.com/questions/9139075/how-to-show-a-confirm-message-before-delete/12582246#12582246
*/
    deleteLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        var choice = confirm("Are you sure you want to delete this?");
        if (choice) {
            window.location.href = this.getAttribute('href');
        }
    });
}

function remove(ingredient) {
    /* Function to remove individual ingredient option that was added */
    ingredient.parentNode.parentNode.parentNode.parentNode.removeChild(ingredient.parentNode.parentNode.parentNode);
}

$(function () {
    /* 
        On-click Add Ingredient button function.

        Adding extra input fields for more ingredients with Remove button 
        if added too many or ingredient is no longer needed.
    */
    $("#addIngredient").click(function (e) {
        e.preventDefault();
        $("#ingredient_item").append(
        `
        <!-- Add ingredient item -->
        <div class="row" id="ingredient_item" name="ingredient_item">
            <!-- Add Ingredient name -->
            <div class="col-50">
                <label for="ingredient_name">Ingredient:</label>
                <input name="ingredient_name" id="ingredient_name" list="ingredients_list" type="text" required>
                <datalist id="ingredients_list">
                    {% for ingredient in ingredients %}
                    <option></option>
                    {% endfor %}
                </datalist>
            </div>
            <!-- Add ingredient quantity -->
            <div class="col-50 ing-units">
                <div class="col-40 ">
                    <label for="ingredient_qty">Quantity:</label>
                    <input name="ingredient_qty" id="ingredient_qty" type="number" step="0.01" required>
                </div>
                <!-- Add ingredient unit -->
                <div class="col-40">
                    <label for="ingredient_unit">Unit:</label>
                    <input name="ingredient_unit" id="ingredient_unit" type="text" required>
                </div>
                <!-- Remove ingredient line button -->
                <div class="col-10">
                    <label class="no-text" for="remButton">a</label>
                    <button class="delete-itm-btn" id="remButton" onclick="remove(this);">
                    <i class="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
        </div>
        `);
    });

});



