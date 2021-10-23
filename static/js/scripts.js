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

    } else if ($('#reg-password').val() == $('#confirm_password').val() || $("#regBtn").val() != "")
        $("[id=exclIcon").css("visibility", "hidden")
});











function remove(ingredient){
    /* Function to remove individual ingredient options that were added */
    ingredient.parentNode.parentNode.parentNode.removeChild(ingredient.parentNode.parentNode);
}

$(function () {
    $("#myButton").click(function (e) {
        e.preventDefault();
        $("#ingredient_item").append(`
        <!-- Add ingredient item -->
        <div class="mt-3" id="ingredient_item" name="ingredient_item">

            <!-- Add Ingredient name -->
            <div class="col-md-6 col-sm-12">
                <label class="form-label" for="ingredient_name">Ingredient:</label>
                <input class="form-control" name="ingredient_name" id="ingredient_name" list="ingredients_list" type="text" required>

                <datalist id="ingredients_list">
                    {% for ingredient in ingredients %}
                    <option value="{{ ingredient.ingredient_name }}">
                        {{ ingredient.ingredient_name }}
                    </option>
                    {% endfor %}
                </datalist>

            </div>

            <!-- Add ingredient quantity -->
            <div class="col-md-3 col-sm-6">
                <label class="form-label" for="ingredient_qty">Quantity:</label>
                <input class="form-control" name="ingredient_qty" id="ingredient_qty" type="number" required>
            </div>

            <!-- Add ingredient unit -->
            <div class="col-md-3 col-sm-6">
                <label class="form-label" for="ingredient_unit" >Unit:</label>
                <div class="d-flex">
                    <input class="form-control" name="ingredient_unit" id="ingredient_unit" type="text" required>
                </div>
                </div>
            <div class="text-center mt-2">
                <button class="btn btn-sm btn-outline-danger" id="remButton" onclick="remove(this);" >Remove</button>
            </div>
    
            
        </div>


        `);
    });

});