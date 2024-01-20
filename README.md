# Keyring Manager

🔐 A web application to securely manage your passwords and keyring. 

![GitHub](https://img.shields.io/github/license/pompomdev/keyring)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![jQuery](https://img.shields.io/badge/jQuery-3.5.1-blueviolet)
![CryptoJS](https://img.shields.io/badge/CryptoJS-4.0.0-blue)
![SimpleBar](https://img.shields.io/badge/SimpleBar-5.3.0-brightgreen)

The Keyring Manager is a user-friendly web application that allows you to create, store, and manage your passwords in a secure manner. With encryption capabilities and a simple interface, it provides an effective solution for protecting your sensitive information.

## Features

✨ Create a new keyring  
✨ Load an existing keyring from a file  
✨ Add passwords to the keyring  
✨ Copy passwords to the clipboard  
✨ Export the keyring as a JSON file  
✨ Encrypt and decrypt the keyring using a master password

## Technologies Used

🚀 HTML  
🚀 CSS  
🚀 JavaScript  
🚀 jQuery  
🚀 CryptoJS  
🚀 SimpleBar

## Getting Started

To use the Keyring Manager, simply open the `index.html` file in your preferred web browser. The application will load and display the main interface, offering two options: "Create Keyring" and "Load Keyring".

- Clicking on the "Create Keyring" button will initialize a new keyring and open the password management interface.
- Clicking on the "Load Keyring" button will prompt you to select a JSON file containing a previously saved keyring. You will be asked to provide the master password used to encrypt the keyring. If successful, the password management interface will be displayed.

The password management interface allows you to add passwords by clicking the "Add" button. Enter a name and password for the respective fields, and the password will be added to the keyring. Each password entry includes a "Copy" button, allowing you to easily copy the password to the clipboard.

You can also export the keyring as a JSON file by clicking the "Export" button. This will prompt you to enter the master password. Upon successful entry, a file named "passwords.json" will be downloaded, containing the encrypted keyring.

## Encryption

The Keyring Manager uses the AES encryption algorithm provided by the CryptoJS library to encrypt and decrypt the keyring. When you export or save the keyring to a file, its contents are encrypted using the master password you provide. The encrypted content is then stored as a Base64-encoded string.

When you load a keyring from a file, you will be prompted to enter the master password. The encrypted content is decrypted using the provided password. If decryption is successful, the decrypted content populates the password management interface.

## Contributing

Contributions to the Keyring Manager are welcome. Please submit a pull request with your proposed changes. By doing so, you agree to license your contribution under the same Apache License, Version 2.0 as the original software.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for more details.
