/*
 * first 100 --> 100
    101 to 200 --> 90
    above 200 --> 70
 * 
 */


function layerDiscount(quantity) {
    const first100 = 100;
    const second100 = 90;
    const above = 70;
    let total = 0;

    if(quantity <= 100)
        return 100 * quantity;
    else if(quantity <= 200) {
        let temp = quantity - 100;
        return (temp * 90) + 10000;
    }

    else {
        let temp = quantity - 200;
        return (10000 + 9000) + (temp * 70);
    }
}

console.log(layerDiscount(201));