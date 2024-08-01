# Random Password Generator

This is a simple and effective random password generator that creates secure passwords with a specified length. The password includes uppercase letters, lowercase letters, numbers, and symbols to ensure complexity and security.

## Features

- **Password Length Validation**: Ensures the password length is at least 8 characters.
- **Dynamic Password Generation**: Generates a password based on user-defined length and includes a mix of characters.
- **Password Copy Functionality**: Allows users to copy the generated password to the clipboard.

## Usage

1. **Set Password Length**:
   - Enter the desired password length in the input field.
   - The "Generate Password" button will be enabled only if the length is 8 or more.

2. **Generate Password**:
   - Click the "Generate Password" button to create a new password.
   - The generated password will be displayed in the text field.

3. **Copy Password**:
   - Click the copy icon to copy the generated password to the clipboard.

## Code Explanation

- **`const passwordBox = document.getElementById("password");`**
  - Retrieves the HTML element where the generated password will be displayed.

- **`const lengthInput = document.getElementById("password-length");`**
  - Retrieves the HTML input element for the user to specify the desired password length.

- **`const errorMessage = document.getElementById("error-message");`**
  - Retrieves the HTML element used to display validation error messages.

- **`const generateButton = document.getElementById("btn");`**
  - Retrieves the "Generate Password" button element.

- **`function validateLength()`**
  - Checks if the provided length is at least 8 characters. Updates the error message and button state accordingly.

- **`function generatePassword()`**
  - Generates a random password based on the specified length and includes a mix of characters. Calls `validateLength` before generating the password.

- **`function shuffle(string)`**
  - Shuffles the characters of the password to randomize the order.

- **`function copyPassword()`**
  - Copies the generated password to the clipboard.

- **`lengthInput.addEventListener('input', validateLength);`**
  - Attaches an event listener to the length input field to validate the length whenever the input changes.

## Installation

To use this password generator, simply include the `index.js` and `style.css` files in your project directory and ensure the HTML structure matches the provided template.


