const vehicleTargets = document.querySelectorAll(".vehicle-target");

const trackingStatus = document.getElementById("tracking-status");
const trackingVehicle = document.getElementById("tracking-vehicle");

const vehicleRegistration = document.getElementById("vehicle-registration");
const vehicleMake = document.getElementById("vehicle-make");
const vehicleYear = document.getElementById("vehicle-year");
const vehicleColour = document.getElementById("vehicle-colour");
const vehicleOwner = document.getElementById("vehicle-owner");

vehicleTargets.forEach(target => {
  target.addEventListener("click", () => {

    const vehicleId = target.dataset.vehicleId;
    const vehicle = vehicles[vehicleId];

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