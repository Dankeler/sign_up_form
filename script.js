const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm_password")
const errorMessage = document.getElementById("error")

function updateErrorMessage() {
    if (password.value !== confirmPassword.value) {
        errorMessage.removeAttribute("hidden")
        errorMessage.innerHTML = "* Passwords do not match";
    } else if (!password.value || !confirmPassword.value) {
        errorMessage.removeAttribute("hidden")
        errorMessage.innerHTML = "";
    } else {
        errorMessage.removeAttribute("hidden")
        errorMessage.innerHTML = "";
    }
}

confirmPassword.addEventListener("input", updateErrorMessage);
password.addEventListener("input", updateErrorMessage);