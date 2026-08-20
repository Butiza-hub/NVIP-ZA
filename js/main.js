const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 350) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});


// ================================
// Mobile Device Detection Notice
// ================================

if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {

  const mobileOverlay = document.createElement("div");
  mobileOverlay.className = "mobile-notice-overlay";

  mobileOverlay.innerHTML = `
    <div class="mobile-notice-modal">

      <button
        class="mobile-notice-close"
        aria-label="Close mobile device notice"
      >
        ×
      </button>

      <div class="mobile-notice-icon">
        📱
      </div>

      <h2>
        Mobile Device Detected
      </h2>

      <p>
        For the best demonstration, open NVIP-ZA on a desktop or laptop
        and scan the QR codes using your smartphone.
      </p>

    </div>
  `;

  document.body.appendChild(mobileOverlay);

  const closeButton = mobileOverlay.querySelector(".mobile-notice-close");

  closeButton.addEventListener("click", () => {
    mobileOverlay.remove();
  });

}