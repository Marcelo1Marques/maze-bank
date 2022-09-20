import depositBtn from "./deposit"
import withdrawBtn from "./withdraw"

let balance = 500
document.getElementById("balance-total").innerHTML = balance

// update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

depositBtn()
withdrawBtn() 
export default balance

