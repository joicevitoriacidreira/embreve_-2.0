 var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("togglePassword");

  toggleButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Ocultar";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Mostrar";
    }
  });
