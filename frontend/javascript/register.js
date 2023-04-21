let checkbox = document.getElementById("toggle-password-visibility");
let password = document.getElementById("password")

let showPassword = () => {
    if (checkbox.checked == true){
        password.type = "text";
    }
    else {
        password.type = "password"
    }
}