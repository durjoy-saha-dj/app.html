const products = [
    {id: 1, name: 'Xiaomi phone One night', price: 19000},
    {id: 2, name: 'Iphone', price: 1900000},
    {id: 3, name: 'Mac book air', price: 119000000},
    {id: 4, name: 'Lenovo yoga laptop 2025', price: 190000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung phone note 7', price: 80000},
    {id: 7, name: 'Nokia old age phone gone', price: 2500},
    {id: 8, name: 'Phone one', price: 90}
]

function matchedProducts(products, search) {
    const match = [];
    for(let product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product);
        }
    }
    return match;
}

let matched = matchedProducts(products, 'Phone');
console.log(matched);
