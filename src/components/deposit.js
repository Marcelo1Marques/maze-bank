import { balance } from "./balance";

const depositInput = document.getElementById("deposit-amount");
const depositBtn = document.getElementById("deposit-button");
const resultDeposit = document.getElementById("balance");
const deposited = document.getElementById("deposit-total")

export const deposit = () => {
    let newBalance = balance;
    
    depositBtn.addEventListener("click", () => {
        let input = parseInt(depositInput.value);
        let result = input + newBalance;
        console.log(result);

        if (depositInput.value.length === 0) {
            alert("Enter the amount you would like to deposit!");
        } else {
            resultDeposit.innerHTML = (newBalance += input)
            deposited.innerHTML = (input);
            document.getElementById("deposit-amount").value = "";
        }
    })
};
