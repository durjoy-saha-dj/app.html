
//step 1: set event handler
document.getElementById('btn-id').addEventListener('click', function(event) {
    //step 2: prevent default behaviour (reloding browser)
    event.preventDefault();
    console.log("Login button clicked");

    //step 3: get the phone number and pin
    const phnNumber = document.getElementById('phn-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    console.log(phnNumber, pinNumber)

    if(phnNumber === '5' && pinNumber === '12345') {
        console.log('You are logged in');
        window.location.href = 'home.html';
    }
    else {
        alert('Wrong phone number or pin');
    }

})
