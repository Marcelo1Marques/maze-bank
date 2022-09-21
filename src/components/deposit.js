const depositBtn = document.getElementById("deposit-button");

depositBtn.addEventListener("click", () => {
    if (isNaN(depositTotal.value)) {
        alert("Please enter a number.");
        return depositTotal.value = "";
    } else {
        if (depositTotal.value < 1 || depositTotal.value >10000) {
            alert("Your total balance cannot drop bellow 0€");
            return depositTotal.value = "";
        } else {
            deposits.push(Number(depositTotal.value));
            balanceTotal -= (Number(depositTotal.value));

            let balanceTotal = formatter.format(balanceTotal);
            document.getElementById("balanceTotal").innerHTML = balanceTotal;

            console.log("€" + depositTotal.value);
            return depositTotal.value = "";
        }  
    }
})

export default depositBtn