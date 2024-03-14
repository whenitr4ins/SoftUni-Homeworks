function partyGuests(input) {
    let guests = {};
    let partyStarted = false;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === 'PARTY') {
            partyStarted = true;
            continue;
        }

        if (!partyStarted) {
            let guestType = 'regular';
            if (command[0] >= '0' && command[0] <= '9') {
                guestType = 'VIP';
            }
            guests[command] = guestType;
        } else {
            delete guests[command];
        }
    }

    let remainingGuests = Object.keys(guests);
    let vipGuests = remainingGuests.filter(guest => guests[guest] === 'VIP');
    let regularGuests = remainingGuests.filter(guest => guests[guest] === 'regular');

    console.log(remainingGuests.length);
    console.log(vipGuests.join('\n') +   regularGuests.join('\n'));
}
partyGuests(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])