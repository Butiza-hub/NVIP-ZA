// ================================
// NVIP Beacon Alert Sounds
// ================================

function playWarningSound() {
  const audioContext = new AudioContext();

  for (let i = 0; i < 6; i++) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 750;

    const startTime = audioContext.currentTime + (i * 0.35);

    gainNode.gain.setValueAtTime(0.28, startTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      startTime + 0.20
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + 0.20);
  }
}


function playUrgentSound() {
  const audioContext = new AudioContext();

  for (let i = 0; i < 10; i++) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 1000;

    const startTime = audioContext.currentTime + (i * 0.18);

    gainNode.gain.setValueAtTime(0.35, startTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      startTime + 0.12
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + 0.12);
  }
}


// ================================
// Patrol Monitor Elements
// ================================

const vehicleTargets = document.querySelectorAll(".vehicle-target");

const trackingStatus = document.getElementById("tracking-status");
const trackingVehicle = document.getElementById("tracking-vehicle");

const beaconSystemStatus = document.querySelector(".system-status");
const systemStatusMessage = document.querySelector(".status-message");
const systemAlertDetail = document.getElementById("system-alert-detail");
const systemPanel = document.querySelector(".system-panel");

const vehicleRegistration = document.getElementById("vehicle-registration");
const vehicleMake = document.getElementById("vehicle-make");
const vehicleYear = document.getElementById("vehicle-year");
const vehicleColour = document.getElementById("vehicle-colour");
const vehicleOwner = document.getElementById("vehicle-owner");


// ================================
// Vehicle Target Tracking
// ================================

vehicleTargets.forEach(target => {
  target.addEventListener("click", () => {

    const vehicleId = target.dataset.vehicleId;
    const vehicle = vehicles[vehicleId];

    systemPanel.classList.remove(
      "status-normal",
      "status-warning",
      "status-urgent",
      "status-no-beacon"
    );


    // ================================
    // Beacon / Vehicle Status Logic
    // ================================

    if (!vehicle.beacon.detected) {

      beaconSystemStatus.textContent = "NO BEACON";

      systemStatusMessage.textContent =
        "REAR QR SCAN REQUIRED";

      systemAlertDetail.textContent =
        "Beacon signal not detected. Rear QR scan required.";

      systemPanel.classList.add("status-no-beacon");


    } else if (vehicle.statusLevel === "clear") {

      beaconSystemStatus.textContent = "BEACON ACTIVE";

      systemStatusMessage.textContent = "NORMAL";

      systemAlertDetail.textContent =
        "No alert detected.";

      systemPanel.classList.add("status-normal");


    } else if (vehicle.statusLevel === "warning") {

      beaconSystemStatus.textContent = "BEACON ACTIVE";

      systemStatusMessage.textContent = "WARNING";

      systemAlertDetail.textContent =
        "Vehicle requires further verification.";

      systemPanel.classList.add("status-warning");

      playWarningSound();


    } else if (vehicle.statusLevel === "critical") {

      beaconSystemStatus.textContent = "BEACON ACTIVE";

      systemStatusMessage.textContent = "URGENT ALERT";

      systemAlertDetail.textContent =
        "Immediate attention required.";

      systemPanel.classList.add("status-urgent");

      playUrgentSound();
    }


    // ================================
    // Target Tracking Information
    // ================================

    trackingStatus.textContent = "TRACKING ACTIVE";
    trackingVehicle.textContent = vehicle.make;

    vehicleRegistration.textContent = vehicle.registration;
    vehicleMake.textContent = vehicle.make;
    vehicleYear.textContent = vehicle.year;
    vehicleColour.textContent = vehicle.colour;
    vehicleOwner.textContent = vehicle.owner;

    console.log("Vehicle selected:", vehicle);

  });
});