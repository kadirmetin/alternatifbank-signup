# AlternatifBank Registration Screen Clone

This project is a React Native application that recreates the registration screen of AlternatifBank. It allows users to enter their basic information and create an account.

## Prerequisites

- Node.js and npm should be installed.
- Your development environment should be set up for React Native. [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## Installation

1. Clone this repository:

```
git clone https://github.com/kadirmetin/alternatifbank-signup.git
cd alternatifbank-signup
```

2. Install the required dependencies:

```
npm install
```

3. Create your Firebase project and add the Firebase configuration file:

   - If you already have a Firebase account, create a new project and obtain the Firebase configuration details.
   - Add the obtained configuration details to the `firebase.js` file:

```
// src/App/firebase.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

4. Start the application:

```
npm start
```

## Technologies Used

- React Native
- Redux
- Firebase (Authentication)
- Formik (Form management)
- Yup (Validation schema)

## Screenshots

<p float="left" align="center">
  <img src="https://github.com/kadirmetin/alternatifbank-signup/assets/82063998/6f7e44d5-bfe8-49ce-8a2c-9fac20f4754b" width="200" />
  <img src="https://github.com/kadirmetin/alternatifbank-signup/assets/82063998/623856b4-ec3f-4654-ac70-296aa6ca9adb" width="200" />
  <img src="https://github.com/kadirmetin/alternatifbank-signup/assets/82063998/ef51ffe9-103a-4cf4-a5d9-5a0d51dfd224" width="200" />
  <img src="https://github.com/kadirmetin/alternatifbank-signup/assets/82063998/59c2be16-abd9-4888-8260-15aa8c2cd371" width="200" />
</p>

## License

This project is licensed under the MIT License. For more information, see the [License File](LICENSE).
**
```
Note: This project is not affiliated with AlternatifBank and is created for personal learning purposes only.
```
**
