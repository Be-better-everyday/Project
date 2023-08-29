document.addEventListener("DOMContentLoaded", function() {
  var formOpenButton = document.getElementById("form-open");
  var popup = document.getElementById("login-popup");
  var closeButton = document.getElementById("close-btn");
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var registerLink = document.getElementById("register-link");
  var loginLink = document.getElementById("login-link");

  formOpenButton.addEventListener("click", function() {
      popup.style.display = "block";
      loginForm.style.display = "block";
      registerForm.style.display = "none";
  });

  closeButton.addEventListener("click", function() {
      popup.style.display = "none";
  });

  registerLink.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
  });

  loginLink.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "block";
      registerForm.style.display = "none";
  });
});
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleBtn = passwordInput.nextElementSibling;
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  }
//validate