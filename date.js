const rand = Math.round(Math.random() * 10);
console.log(rand);


const today = new Date();
const date = new Date('2024-10-08');
console.log(date.getMonth());

const specificDate = new Date(2004, 3, 20);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));

//unix epoc