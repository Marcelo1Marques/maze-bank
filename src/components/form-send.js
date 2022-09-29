const sendBtn = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");
const balanceCurr = document.getElementById("balance-curr");
const formName = document.getElementById("form-name");
const formNumber = document.getElementById("form-number");
const formEmail = document.getElementById("form-email");
const formBalance = document.getElementById("form-balance");
const error = document.getElementById("error");

const send = () => {
    sendBtn.addEventListener("click", () => {
        if (!nameInput.value|| !numberInput.value || !emailInput.value || !balanceCurr.value) {
            error.textContent = "Please fill all fields"
            error.style.color = "red"
        } else {
            formName.textContent = nameInput.value
            formNumber.textContent = numberInput.value
            formEmail.textContent = emailInput.value
            formBalance.textContent = balanceCurr.value + "€"
        }
    })
};

export default send