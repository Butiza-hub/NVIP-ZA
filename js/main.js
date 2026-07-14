const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

// Detect mobile devices
if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {

    const mobileNotice = document.createElement("div");

    mobileNotice.className = "mobile-notice";

    mobileNotice.innerHTML = `
        📱 <strong>Mobile Device Detected</strong><br>
        For the best demonstration, open NVIP-ZA on a desktop or laptop and scan the QR codes using your smartphone.
    `;

    document.body.prepend(mobileNotice);

}