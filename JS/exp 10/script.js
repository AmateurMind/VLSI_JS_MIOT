document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const messageDiv = document.getElementById("message");
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const errors = [];

  if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
    errors.push("Please enter a valid name using letters only.");
  }
  if (!address) errors.push("Address cannot be empty.");
  if (!city) errors.push("City cannot be empty.");
  if (!state) errors.push("State cannot be empty.");
  if (!gender) errors.push("Please select a gender.");
  if (!/^\d{10}$/.test(mobile)) {
    errors.push("Please enter a valid 10-digit mobile number.");
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Please enter a valid email ID.");
  }

  if (errors.length > 0) {
    messageDiv.className = "error";
    messageDiv.innerHTML = errors.join("<br>");
    return;
  }

  messageDiv.className = "success";
  messageDiv.textContent = "Congratulations! Welcome, " + name + "!";
});
