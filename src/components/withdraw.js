import { balance } from "./balance";

const withdrawInput = document.getElementById("withdraw-amount")
const withdrawBtn = document.getElementById("withdraw-button");

const withdraw = () => {
    withdrawBtn.addEventListener("click", () => {
        let input = parseInt(withdrawInput.value);
        let result = balance - input
        console.log(result);
        // if (isNaN(withdrawTotal.value)) {
        //     alert("Please enter a number.");
        //     return withdrawTotal.value = "";
        // } else {
        //     if (withdrawTotal.value > balanceTotal - 0) {
        //         alert("Your total balance cannot drop bellow 0€");
        //         return withdrawTotal.value = "";
        //     } else {
        //         withdrawls.push(Number(withdrawTotal.value));
        //         balanceTotal -= (Number(withdrawTotal.value));
    
        //         console.log("€" + withdrawTotal.value);
        //         return withdrawTotal.value = "";
        //     }  
        // }
    })
}

export default withdraw;