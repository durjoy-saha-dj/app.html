console.log("THis is separate JS file");
//option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 3
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const blue = document.querySelector('#blue');
blue.onclick = makeBlue;

//option 4
const purple = document.querySelector('#purple');
purple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
//option 5
const pink = document.querySelector('#pink');
pink.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//option 6
const green = document.querySelector('#green');
green.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'lightgreen';
})

//option 7
document.getElementById('orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})


//text changing by clicking
function handleClick() {
    const stat = document.querySelector('#default');
    stat.innerText = 'Handled by function attached on onclick attribute';
}

//option 2
document.getElementById('btn-update').addEventListener('click', function() {
    const input = document.getElementById('input-field');
    console.log(input.value);
    const inputText = input.value;
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    input.value = '';
})

document.getElementById('post').addEventListener('click', function () {
    
    const Input = document.getElementById('new-comment');
    const InputText = Input.value;

    const P = document.createElement('p');
    P.innerText = InputText;
    const adding = document.getElementById('comment-container');
    adding.appendChild(P);

    Input.value = '';
})