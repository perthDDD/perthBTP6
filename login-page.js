³const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "rn3o2infoin3in" && password === "vnwoifn32oin351") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/Btp6-7d1ac3e562be48e286a474f110798e52?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
