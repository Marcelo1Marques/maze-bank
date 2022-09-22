import { balance } from "./balance";

const depositInput = document.getElementById("deposit-amount");
const depositBtn = document.getElementById("deposit-button");

const deposit = () => {
    depositBtn.addEventListener("click", () => {
        let input = parseInt(depositInput.value);
        let result = balance + input;
        console.log(result);
        if (document.getElementById("deposit-amount").value.length == 0) {
            alert("Enter the amount you would like to deposit!")
            let balance = document.getElementById("balance").value;
            document.getElementById("balance").innerHTML = balance - depositInput
        }
    })
}

export default deposit;