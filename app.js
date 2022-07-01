// CONSTANTS
const button = document.querySelector(".submit-btn");
const input = document.getElementById("email");
const invalidMsg = document.querySelector(".verification-txt");
const emptyMsg = document.querySelector(".empty-txt");

// CLICK SUBMIT BUTTON EVENT
button.addEventListener("click", validateEmail);

// VALIDATE EMAIL FUNCTION
function validateEmail () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value) === true) {
        invalidMsg.style.display = "none";
        emptyMsg.style.display = "none";
        input.style.border = "1px solid var(--secondary-pale-blue)";
        return true;
    } else if (input.value === "") {
        input.style.border = "1px solid red";
        invalidMsg.style.display = "none";
        emptyMsg.style.display = "inline-block"
    } else {
        emptyMsg.style.display = "none";
        invalidMsg.style.display = "inline-block";
        input.style.border = "1px solid red";
        input.style.color = "black";
    }
}