
//step 1: set event handler
document.getElementById('btn-id').addEventListener('click', function(event) {
    //step 2: prevent default behaviour (reloding browser)
    event.preventDefault();
    console.log("Login button clicked");

    //step 3: get the phone number
    const phnNumber = document.getElementById('phn-num').value;
    console.log(phnNumber);

})
