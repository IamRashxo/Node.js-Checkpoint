const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
    });

}

// Call the function
const password = generateRandomPassword();
console.log(password);