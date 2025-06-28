// Get DOM elements
const generateBtn = document.getElementById("generate");
const passwordInput = document.getElementById("password");
const copyBtn = document.querySelector(".copy");

// Generates a secure random password
function generatePassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Generate new password on button click
generateBtn.addEventListener("click", () => {
  passwordInput.value = generatePassword();
});

// Copy password to clipboard
function copyPassword() {
  const password = passwordInput.value;

  if (!password) {
    alert("Generate a password first!");
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => alert("Password copied to clipboard!"))
    .catch((err) => console.error("Copy failed", err));
}

// Copy on icon click or Enter key press
copyBtn.addEventListener("click", copyPassword);
copyBtn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    copyPassword();
  }
});
