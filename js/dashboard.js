const params = new URLSearchParams(window.location.search);

const vehicleId = params.get("id");

const vehicle = vehicles[vehicleId];

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