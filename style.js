let sections = document.querySelectorAll('section');
for(const section of sections) {
    section.style.border = '2px solid blue';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightyellow';
    section.style.borderRadius = "10px"
}

const lorem5 = document.querySelector('#Lorem_5');
lorem5.style.backgroundColor = 'yellow';

lorem5.classList.add('text-center');
const lorem10 = document.querySelector("#Lorem_10");
lorem10.classList.add('text-3xl');

const div = document.createElement('div').innerText = 'Durjoy is the boss';

//1. Where to add
const placeList = document.getElementById("places-list");
console.log(placeList);
//2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//3. add the child
placeList.appendChild(li);

//1
const parent = document.getElementById('body');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
//2
const section = document.createElement('section');
section.innerText = "I am inside the new section";
h1.innerText = 'My Food List';
li1.innerText = 'Biryani';
li2.innerText = 'Pizza';
li3.innerText = 'Burger';


//3
section.appendChild(h1);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
section.appendChild(ul);

parent.appendChild(section);

h1.style.color = 'blue';


//set innerhtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1 class="color-blue">My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Panjabi</li>
</ul>
`
parent.appendChild(sectionDress);