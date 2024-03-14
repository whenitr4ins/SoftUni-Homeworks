function vacation(num, type, day) {

    let priceForPerson = 0;

    switch (day) {
        case 'Friday':
            if (type == 'Students') {
                priceForPerson = 8.45;
            } else if (type == 'Business') {
                priceForPerson = 10.90;
            } else if (type == 'Regular') {
                priceForPerson = 15;
            }
            break;
        case 'Saturday':
            if (type == 'Students') {
                priceForPerson = 9.80;
            } else if (type == 'Business') {
                priceForPerson = 15.60;
            } else if (type == 'Regular') {
                priceForPerson = 20;
            }
            break;
        case 'Sunday':
            if (type == 'Students') {
                priceForPerson = 10.46;
            } else if (type == 'Business') {
                priceForPerson = 16;
            } else if (type == 'Regular') {
                priceForPerson = 22.50;
            }
            break;

    }

    let totalPrice = num * priceForPerson;

    if (type == 'Students' && num >= 30) {
        totalPrice *= 0.85;
    } else if (type == 'Business' && num >= 100) {
        let discountPrice = 10 * priceForPerson;
        totalPrice -= discountPrice;
    } else if (type == 'Regular' && (num >= 10 && num <= 20)) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");