function markInputAsInvalid(inputId, errorMessage) {
  const errorSpan = document.getElementById(inputId + "-error");
  errorSpan.textContent = errorMessage;
  errorSpan.style.display = "block";
}

function removeInputInvalidStyle(inputId) {
  const errorSpan = document.getElementById(inputId + "-error");
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  const phonePattern = /^[0-9]{10,11}$/;
  return phonePattern.test(phoneNumber);
}

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  const usernameErrorSpan = document.getElementById("login-username-error");
  const passwordErrorSpan = document.getElementById("login-password-error");

  if (usernameInput.value === "") {
    markInputAsInvalid("login-username", "Please enter a phone number or email.");
  } else if (!isValidEmail(usernameInput.value) && !isValidPhoneNumber(usernameInput.value)) {
    markInputAsInvalid("login-username", "Invalid phone number or email format.");
  } else {
    removeInputInvalidStyle("login-username");
    usernameErrorSpan.style.display = "none";
  }

  if (passwordInput.value === "") {
    markInputAsInvalid("login-password", "Please enter a password.");
  } else {
    removeInputInvalidStyle("login-password");
    passwordErrorSpan.style.display = "none";
  }

  if (usernameInput.value !== "" && passwordInput.value !== "") {
    if (isValidEmail(usernameInput.value) || isValidPhoneNumber(usernameInput.value)) {
      alert("Login successful!");
      window.location.href = "../HTML/Home.html";
    } else {
      markInputAsInvalid("login-username", "Invalid phone number or email format.");
    }
  }
}

function handleRegisterFormSubmit(event) {
  event.preventDefault();

  const fullnameInput = document.getElementById("register-fullname");
  const usernameInput = document.getElementById("register-username");
  const passwordInput = document.getElementById("register-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const fullnameErrorSpan = document.getElementById("register-fullname-error");
  const usernameErrorSpan = document.getElementById("register-username-error");
  const passwordErrorSpan = document.getElementById("register-password-error");
  const confirmPasswordErrorSpan = document.getElementById("confirm-password-error");

  let isPasswordMatch = true;

  if (fullnameInput.value === "") {
    markInputAsInvalid("register-fullname", "Please enter your full name.");
    isPasswordMatch = false;
  } else {
    removeInputInvalidStyle("register-fullname");
    fullnameErrorSpan.style.display = "none";
  }

  if (usernameInput.value === "") {
    markInputAsInvalid("register-username", "Please enter a phone number or email.");
    isPasswordMatch = false;
  } else if (!isValidEmail(usernameInput.value) && !isValidPhoneNumber(usernameInput.value)) {
    markInputAsInvalid("register-username", "Invalid phone number or email format.");
    isPasswordMatch = false;
  } else {
    removeInputInvalidStyle("register-username");
    usernameErrorSpan.style.display = "none";
  }

  if (passwordInput.value === "") {
    markInputAsInvalid("register-password", "Please enter a password.");
    isPasswordMatch = false;
  } else {
    removeInputInvalidStyle("register-password");
    passwordErrorSpan.style.display = "none";
  }

  if (confirmPasswordInput.value === "") {
    markInputAsInvalid("confirm-password", "Please re-enter the password.");
    isPasswordMatch = false;
  } else {
    removeInputInvalidStyle("confirm-password");
    confirmPasswordErrorSpan.style.display = "none";
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    markInputAsInvalid("confirm-password", "Passwords do not match.");
    isPasswordMatch = false;
  } else {
    removeInputInvalidStyle("confirm-password");
    confirmPasswordErrorSpan.style.display = "none";
  }

  if (isPasswordMatch && fullnameInput.value !== "" && usernameInput.value !== "" && passwordInput.value !== "") {
    if (isValidEmail(usernameInput.value) || isValidPhoneNumber(usernameInput.value)) {
      alert("Registration successful!");
      window.location.href = "../HTML/Home.html";
    } else {
      markInputAsInvalid("register-username", "Invalid phone number or email format.");
    }
  }
}

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (loginForm) {
  loginForm.addEventListener("submit", handleLoginFormSubmit);
}

if (registerForm) {
  registerForm.addEventListener("submit", handleRegisterFormSubmit);
}
