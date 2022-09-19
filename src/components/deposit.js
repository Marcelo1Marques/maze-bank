const depositBtn = document.getElementById("deposit-button")

depositBtn.addEventListener("click", function() {
    const depositString = getNumber("deposit-amount");

    updateSpan("deposit", depositString);
    updateSpan("balance", depositString);

    document.getElementById("deposit-amount").value = "";
});

export default depositBtn