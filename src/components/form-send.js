const sendBtn = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");

const send = () => {
    sendBtn.addEventListener("click", () => {
        nameInput.value.length === 0 
    })
};

function showError(nameInput, message) {
    return showMessage(nameInput, "Please enter your name", false);
};

function showSuccess(nameInput) {
    return showMessage(nameInput, "", true);
};

export default send