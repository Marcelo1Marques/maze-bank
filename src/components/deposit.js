import { balance } from "./balance";

const depositInput = document.getElementById("deposit-amount");
const depositBtn = document.getElementById("deposit-button");

const deposit = () => {
    depositBtn.addEventListener("click", () => {
        let input = parseInt(depositInput.value);
        let result = balance + input;
        console.log(result);
        // if (isNaN(depositTotal.value)) {
        //     alert("Please enter a number.");
        //     return depositTotal.value = "";
        // } else {
        //     if (depositTotal.value < 1 || depositTotal.value >10000) {
        //         alert("Your total balance cannot drop bellow 0€");
        //         return depositTotal.value = "";
        //     } else {
        //         deposits.push(Number(depositTotal.value));
        //         balanceTotal -= (Number(depositTotal.value));

        //         console.log("€" + depositTotal.value);
        //         return depositTotal.value = "";
        //     }  
        // }
    })
}


export default deposit;