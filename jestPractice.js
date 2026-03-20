export function capitalize(string) {
    const firstCharCap = string.charAt(0).toUpperCase();

    const stringLength = string.length;

    const restOfString = string.slice(1, stringLength);

    return firstCharCap + restOfString;
}

export function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }

    return reversedString;
}

export function createCalculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    }
}

export function caesarCipher(code, num) {
    let encodedMessage = "";

    for (let i = 0; i < code.length; i++) {
        let currentChar = code.charAt(i);
        if (!/[A-Za-z]/.test(currentChar)) {
            encodedMessage += currentChar;
        }

        else if (/[A-Z]/.test(currentChar)) {
            let encodedChar = shift(makeLowercase(currentChar), num);
            encodedMessage += capitalize(encodedChar);
        }

        else {
            let encodedChar = shift(currentChar, num);
            encodedMessage += encodedChar;
        }
    }

    return encodedMessage;
}

function shift(char, num) {
    const plainTextArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const encodedCharIndex = (plainTextArr.indexOf(char) + num) % 26;

    return plainTextArr[encodedCharIndex];
}


function capitalizeChar(char) {
    return char.toUpperCase();
}

function makeLowercase(char) {
    return char.toLowerCase();
}

export function analyzeArray(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }
    let sum = 0;
    
    arr.forEach(element => {
        if (typeof element !== "number") {
            throw new Error("Array can only contain numbers");
        }
        else {
            sum += element
        }
    });

    let arrayAverage = sum / arr.length;

    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
        average: arrayAverage
    };
}



