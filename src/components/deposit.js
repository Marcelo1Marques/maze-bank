const depositBtn = document.getElementById("deposit-button");

//Amount Deposited
depositBtn.addEventListener("click", () => {
    const depositAmount = document.getElementById("deposit-amount");
    const newDepositAmountText =  depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //Update current Amount
    const depositTotal = document.getElementById("deposit-total")
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal =  previousDepositAmount + newDepositAmount

    depositTotal.innerText = newDepositTotal
});

export default depositBtn