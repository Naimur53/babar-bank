// bank inner program
//  deposit
function deposit(what) {
    let balanceBox = document.getElementById("balance-box");
    const balanceBoxNum = parseFloat(balanceBox.innerText);
    let depositBox = document.getElementById('deposit-box');
    let depositInput = document.getElementById('deposit-input');
    let withdrawBox = document.getElementById('withdraw-box');
    let withdrawInput = document.getElementById('withdraw-input');
    if (what == 'deposit') {
        const depositBoxNum = parseFloat(depositBox.innerText);
        const depositInputNum = parseFloat(depositInput.value);
        // calculation
        const newDeposit = depositBoxNum + depositInputNum;
        depositBox.innerText = newDeposit;
        const newBalance = depositInputNum + balanceBoxNum;
        balanceBox.innerText = newBalance;
        depositInput.value = '';
    }
    else if (what == "withdraw") {
        const withdrawBoxNum = parseFloat(withdrawBox.innerText);
        const withdrawInputNum = parseFloat(withdrawInput.value);
        const newWithdraw = withdrawBoxNum + withdrawInputNum;
        withdrawBox.innerText = newWithdraw;
        const newBalance = balanceBoxNum - withdrawInputNum;
        balanceBox.innerText = newBalance;
        withdrawInput.value = '';
    }

}