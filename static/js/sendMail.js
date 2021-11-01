const EmailJSUserID = "user_DoOnYBoOadoZVbGED61tp";
const EmailJSAccessToken = "cfda4527438f42ac589a4a113c1eeb6d";

function sendMail(contactForm) {
    emailjs.init(EmailJSUserID); // Please see README.md file how to get own user id for it to work
    emailjs.send("gmail", "temp_1", {
            "from_name": contactForm.contact_name.value,
            "from_email": contactForm.contact_email.value,
            "project_request": contactForm.contact_request.value
        })
        .then(
            function () {
                alert("Email sent successfully");
                $("#contactForm")[0].reset();
            },
            function (error) {
                alert("There was an error, please try again!")
                console.log("FAILED", error);
            }
        );

    return false; // To block from loading a new page
}