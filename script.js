// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Show a message when a project doesn't have a link yet

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link coming soon!");

        }

    });

});


// =========================
// NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});