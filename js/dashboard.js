const params = new URLSearchParams(window.location.search);

const vehicleId = params.get("id");

const vehicle = vehicles[vehicleId];

document.getElementById("vehicle-id").textContent =
  "NVIP-2026-00" + vehicleId;

const alertMessage = document.getElementById("alert-message");

document.getElementById("status-text").textContent = vehicle.status;
document.getElementById("registration").textContent = vehicle.registration;
document.getElementById("make").textContent = vehicle.make;
document.getElementById("year").textContent = vehicle.year;
document.getElementById("colour").textContent = vehicle.colour;
document.getElementById("owner").textContent = vehicle.owner;
document.getElementById("insurance-status").textContent = vehicle.insurance;
document.getElementById("fines-status").textContent = vehicle.fines;
document.getElementById("legal-status").textContent = vehicle.legal;
document.getElementById("action-text").textContent = vehicle.action;

const statusSection = document.getElementById("status");

if (vehicle.status.includes("CLEAR")) {
  statusSection.classList.add("status-clear");
}
else if (vehicle.status.includes("INVESTIGATE")) {
  statusSection.classList.add("status-investigate");
}
else if (vehicle.status.includes("HIGH PRIORITY")) {
  statusSection.classList.add("status-priority");
}


if (vehicle.status.includes("CLEAR")) {

  alertMessage.textContent =
    "No enforcement action required.";

}
else if (vehicle.status.includes("INVESTIGATE")) {

  alertMessage.textContent =
    "Outstanding compliance issues detected. Further verification recommended.";

}
else if (vehicle.status.includes("HIGH PRIORITY")) {

  alertMessage.textContent =
    "Reported stolen vehicle. Immediate investigation required.";

}


// ================================
// Live Date and Time
// ================================

function updateDateTime() {

  const now = new Date();

  document.getElementById("current-date").textContent =
    now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

  document.getElementById("current-time").textContent =
    now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime, 1000);


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

  const closeButton =
    mobileOverlay.querySelector(".mobile-notice-close");

  closeButton.addEventListener("click", () => {
    mobileOverlay.remove();
  });

}