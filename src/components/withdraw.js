import { balance } from "./balance";
import deposit from "./deposit";

const withdrawInput = document.getElementById("withdraw-amount")
const withdrawBtn = document.getElementById("withdraw-button");

const withdraw = () => {
    withdrawBtn.addEventListener("click", () => {
        let input = parseInt(withdrawInput.value);
        let result = balance - input
        console.log(result);
        if (document.getElementById("withdraw-amount").value.length == 0) {
            alert("Enter the amount you would like to withdraw!");
            let balance = document.getElementById("balance").value;
            document.getElementById("balance").innerHTML = balance - withdrawInput
        }
    })
}

export default withdraw;