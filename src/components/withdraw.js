const withdrawBtn = document.getElementById("withdraw-button");

//Amount withdrawn
withdrawBtn.addEventListener("click", () => {
    const withdrawAmount = document.getElementById("withdraw-amount");
    const newWithdrawAmountText =  withdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    //Update current Amount
    const withdrawTotal = document.getElementById("withdraw-total")
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal =  previousWithdrawAmount + newWithdrawAmount

    withdrawTotal.innerText = newWithdrawTotal
});

export default withdrawBtn