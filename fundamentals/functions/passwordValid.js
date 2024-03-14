function passwordValidator(pass) {
    let isValidPasswordLength = checkPasswordLength(pass);
    let isValidLetterDigitsOnly = checkIfLettersDigitsOnly(pass);
    let isValidMin2Digits = checkIfMin2Digits(pass);

    if (isValidPasswordLength && isValidLetterDigitsOnly && isValidMin2Digits) {
        console.log("Password is valid");
    }

    function checkPasswordLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false
        }
    }
    function checkIfLettersDigitsOnly(pass) {
        for (let curChar of pass) {
            let index = curChar.charCodeAt(0)
            if (!((index >= 48 && index <= 57) || (index >= 65 && index <= 90) || (index >= 97 && index <= 122))) {
                console.log("Password must consist only of letters and digits");
                return false;
            }

        }
        return true;
    }
    function checkIfMin2Digits(pass) {
        let digitCount = 0;
        for (let count of pass) {
            let index = count.charCodeAt(0)
            if (index >= 48 && index <= 57) {
                digitCount++;
            }

        }
        if (digitCount < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}
passwordValidator('logIn');
// passwordValidator('MyPass123');