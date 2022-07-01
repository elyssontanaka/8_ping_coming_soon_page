// CONSTANTS
const button = document.querySelector(".submit-btn");
const input = document.getElementById("email");
const invalidMsg = document.querySelector(".verification-txt");

// CLICK SUBMIT BUTTON EVENT
button.addEventListener("click", validateEmail);

// VALIDATE EMAIL FUNCTION
function validateEmail () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value) === true) {
        invalidMsg.style.display = "none";
        input.style.border = "black";
        return true;
    } else {
        invalidMsg.style.display = "inline-block";
        input.style.border = "1px solid red";
        input.style.color = "black";
    }
}