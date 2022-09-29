const sendBtn = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const emailInput = document.getElementById("email");
const balanceCurr = document.getElementById("balance-curr")
const error = document.getElementById("error");

const send = () => {
    sendBtn.addEventListener("click", () => {
        if (!nameInput.value|| !numberInput.value || !emailInput.value || !balanceCurr.value) {
            error.textContent = "Please fill all fields"
            error.style.color = "red"
        } else {
            
        }
    })
};

export default send