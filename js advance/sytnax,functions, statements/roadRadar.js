function solve(speed, area) {
    let status;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            difference = speed - speedLimit;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if (speed > speedLimit) {
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        case 'interstate':
            speedLimit = 90;
            difference = speed - speedLimit;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if (speed > speedLimit) {
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        case 'city':
            speedLimit = 50;
            difference = speed - speedLimit;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if (speed > speedLimit) {
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
        case 'residential':
            speedLimit = 20;
            difference = speed - speedLimit;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else if (speed > speedLimit) {
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
            break;
    }
}
solve(40, 'city');
solve(209, 'interstate');
