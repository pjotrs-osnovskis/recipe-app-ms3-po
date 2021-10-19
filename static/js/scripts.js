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


// function search() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

function search() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
        if (input.value==''){
            document.getElementById("myUL").style.display='none';
            }
        else{
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
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
        }
}