// Common Shared Functions Here: 

function getInputFieldValueById(id) {
    const value =  document.getElementById(id).value;
    return parseFloat(value);
}

function getTextFieldValueById(id) {
    const value =  document.getElementById(id).innerText;
    return parseFloat(value);
}

function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('Transiction-section').classList.add('hidden');

    //show the section with the provide id
    document.getElementById(id).classList.remove('hidden');
}