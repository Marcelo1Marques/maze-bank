const nameBeneficiary = document.getElementById("name-sent");
const beneficiary = document.getElementById("transfer-name");
const amountSent = document.getElementById("money-sent");
const amount = document.getElementById("transfer-amount");
const rib = document.getElementById("rib");
const transferBtn = document.getElementById("transfer-button");
const error = document.getElementById("error-transfer");

const transfer = () => {
    transferBtn.addEventListener("click", () => {
        if (!beneficiary.value || !amount.value || !rib.value) {
            error.textContent = "Please fill all required fields"
            error.style.color = "red"
        } else {
            nameBeneficiary.textContent = beneficiary.value
            amountSent.textContent = amount.value + "€"
        }
    })
};

export default transfer