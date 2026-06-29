const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});