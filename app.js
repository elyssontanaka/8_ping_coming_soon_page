const info = document.querySelector(".info-container");
const msg = document.createElement("p");
msg.appendChild(document.createTextNode("Hello!"));
const button = document.querySelector(".submit-btn");
msg.className = "verification-msg";

button.addEventListener("click", verify);

function verify () {
    info.appendChild(msg);
}