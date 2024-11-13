//Add money ----
document.getElementById('add-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('pin-num');
    if(pinNumber === 12345) {
        console.log('Adding money');
        const addMoney = getInputFieldValueById('input-add-money');
        const balance = getTextFieldValueById('balance');

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        const newBalance = addMoney + balance;

        document.getElementById('balance').innerText = newBalance;

        //add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} Tk`;
        
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Incorrect Pin');
    }
})

//Cash out ----
document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('cash-out-pin-num');
    if(pinNumber === 12345) {
        console.log('Cash outing');
        const cashOut = getInputFieldValueById('input-cash-out');
        const balance = getTextFieldValueById('balance');

        if(cashOut > balance) {
            alert('Not enough Balance');
            return;
        }

        if(isNaN(cashOut)){
            alert('Failed to add money');
            return;
        }
        
        const newBalance = balance - cashOut;

        document.getElementById('balance').innerText = newBalance;

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-700');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold"> Cash Out </h4>
        <p>${cashOut} Tk. Money Withdraw. New Balance ${newBalance}</p>
        `;
        document.getElementById('transaction-container').appendChild(div);

    }
    else {
        alert('Incorrect Pin');
    }
})


// //show the cash out form
// document.getElementById('btn-show-cash-out').addEventListener('click', function() {
//     document.getElementById('cash-out-form').classList.remove('hidden');

//     //hide the add money form
//     document.getElementById('add-money-form').classList.add('hidden');
// })

// //show the add money form
// document.getElementById('btn-show-add-money').addEventListener('click', function() {
//     document.getElementById('add-money-form').classList.remove('hidden');

//     //hide the add money form
//     document.getElementById('cash-out-form').classList.add('hidden');
// })

//another way:
document.getElementById('btn-show-transiction').addEventListener('click', function() {
    showSectionById('Transiction-section');
})

document.getElementById('btn-show-add-money').addEventListener('click', function() {
    showSectionById('add-money-form');
})

document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    showSectionById('cash-out-form');
})