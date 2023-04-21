
let showPassword= () => {
    let checkbox = document.getElementById("toggle-password-visibility");
    let password = document.getElementById("password");
    if (checkbox.checked === true){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}


// if (logedin == true){
//     app.get("/dashboard.html", function(){
//         render("dashboard.html");
//     });
// }