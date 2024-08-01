const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("password-length");
const errorMessage = document.getElementById("error-message");
const generateButton = document.getElementById("btn");

function validateLength() {
    const length = Number(lengthInput.value);
    if (length < 8) {
        errorMessage.textContent = "Password length should be at least 8 characters.";
        generateButton.disabled = true; // Disable button if length is invalid
        return false; // Indicating validation failed
  
    } else {
        errorMessage.textContent = ""; // Clear any previous error messages
        generateButton.disabled = false; // Enable button if length is valid
        return true;
    }
}

function generatePassword() {
    if (!validateLength()) { // Call validateLength to check if the length is valid
        return; // Exit function if validation fails
    }
    const length = Number(lengthInput.value);
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@!$#&";
    const allChars = upperCaseChars + lowerCaseChars + numberChars + symbolChars;

    let password = "";
    // Ensure the password includes at least one character from each set
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];

    // Add random characters from all sets until the password reaches the desired length
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = shuffle(password); // Shuffle the characters to ensure randomness
    passwordBox.value = password; // Display the generated password
}

function shuffle(string) {
    const array = string.split(''); // Split the string into an array of characters
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array.join(''); // Join the array back into a string
}

function copyPassword() {
    passwordBox.select(); // Select the password text
    navigator.clipboard.writeText(passwordBox.value); // Copy the text to the clipboard
}

// Validate length when input changes
lengthInput.addEventListener('input', validateLength);
