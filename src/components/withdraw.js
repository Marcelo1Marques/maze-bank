const withdrawBtn = document.getElementById("withdraw-button");
const withdrawTotal = document.getElementById("withdraw-total")

withdrawBtn.addEventListener("click", () => {
    if (isNaN(withdrawTotal.value)) {
        alert("Please enter a number.");
        return withdrawTotal.value = "";
    } else {
        if (withdrawTotal.value > balanceTotal - 0) {
            alert("Your total balance cannot drop bellow 0€");
            return withdrawTotal.value = "";
        } else {
            withdrawls.push(Number(withdrawTotal.value));
            balanceTotal -= (Number(withdrawTotal.value));

            let balanceTotal = formatter.format(balanceTotal);
            document.getElementById("balanceTotal").innerHTML = balanceTotal;

            console.log("€" + withdrawTotal.value);
            return withdrawTotal.value = "";
        }  
    }
})

export default withdrawBtn