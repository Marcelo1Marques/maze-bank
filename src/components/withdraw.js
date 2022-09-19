const withdrawBtn = document.getElementById("withdraw-button")


withdrawBtn.addEventListener("click", function() {
    const withdrawString = getNumber("withdraw-amount");

    updateSpan("withdraw", depositString);
    updateSpan("balance", depositString);

    document.getElementById("withdraw-amount").value = "";
});

export default withdrawBtn