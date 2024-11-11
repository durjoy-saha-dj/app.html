const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'Black'},
    {name: 'Xiomi', price: 30000, camera: '12mp', color: 'Black'},
    {name: 'Iphone', price: 120000, camera: '12mp', color: 'Black'},
    {name: 'Oneplus', price: 50000, camera: '12mp', color: 'Black'},
    {name: 'Motorola', price: 40000, camera: '12mp', color: 'Black'},
    {name: 'Nothing', price: 17000, camera: '12mp', color: 'Black'}
    
]

function getCheapPhone(phones) {
    let min = phones[0];
    for(let phone of phones) {
        if(min.price > phone.price) {
            min = phone;
        }
    }
    return min;
}

let ans = getCheapPhone(phones);
console.log(ans);