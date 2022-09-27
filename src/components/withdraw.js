import {balance}  from "./balance";

const withdrawInput = document.getElementById("withdraw-amount")
const withdrawBtn = document.getElementById("withdraw-button");
const resultWithdraw = document.getElementById("balance")
const withdrawn = document.getElementById("withdraw-total")

export const withdraw = () => {
    let newBalance = balance;

    withdrawBtn.addEventListener("click", () => {
        let input = parseInt(withdrawInput.value);
        let result = input + newBalance;
        console.log(result);

        if (withdrawInput.value.length === 0) {
            alert("Enter the amount you would like to withdraw!");
        } else {
            resultWithdraw.innerHTML = (newBalance += input * -1);
            withdrawn.innerHTML = (input);
            document.getElementById("withdraw-amount").value = "";
        }
    })
};