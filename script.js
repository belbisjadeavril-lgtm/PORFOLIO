// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const navLinks =
        document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


// Close menu after clicking a navigation link

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    }
);
