# Hornet User Dashboard

**Version:** 0.0.1  
A React Native app designed to showcase branding with a splash screen and a functional dashboard. The app includes drawer navigation, user profile features, and displays mock wallet data.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)

---

## Features

### 1. Splash Screen
- Displays branding elements (logo and app name) with animations (e.g., fade-in/out).
- Visible for 3 seconds before navigating to the dashboard.

### 2. Dashboard
- Sections:
  - **My Wallets**: Displays user wallets with mock data.
  - **Monitored Wallets**: Displays monitored wallets with mock data.
- Card/tile layout for easy readability.

### 3. Drawer Navigation
- **User Profile Section**: Placeholder image and user name.
- **Menu Options**:
  - Dashboard: Displays wallet data.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v23.x.x or later  
- **JDK**: v17  
- **Gradle**: v10.8.2  
- **React Native CLI**: Follow [React Native CLI Setup Guide](https://reactnative.dev/docs/environment-setup).

---

## Setup and Installation

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/anuragkmr45/hornet-dashboard
cd hornet
```

### 2. Install Dependencies
Run the following command to install project dependencies:
```bash
npm install
```

### 3. Configure Environment
- Make sure you have an Android or iOS emulator ready.
- For Android:
  - Ensure the Android SDK is installed.
  - Set up your `ANDROID_HOME` environment variable.

### 4. Run the App
#### Android
```bash
npm run android
```
#### iOS
```bash
npm run ios
```
#### Start the Metro Bundler
If not started automatically:
```bash
npm start
```

---

## Project Structure

```
hornet
├── src
│   ├── .data
│   │   └── mockWallets.ts
│   ├── assets
│   │   ├── hornet_logo_name.webp
│   │   └── hornet_logo.webp
│   ├── components
│   │   ├── ExpandedContent.tsx
│   │   ├── ManagedWalletCard.tsx
│   │   └── MyWalletCard.tsx
│   ├── navigations
│   │   └── AppNavigation.tsx
│   ├── screens
│   │   ├── AppSplashScreen.tsx
│   │   ├── ManagedWallet.tsx
│   │   └── MyWallet.tsx
│   ├── styles
│       ├── AppSplashStyles.tsx
│       ├── DrawerStyle.tsx
│       ├── ManagedWalletStyles.tsx
│       └── MyWalletStyles.tsx
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── app.json
├── App.tsx
├── babel.config.js
├── Gemfile
├── index.js
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

## Usage

1. Launch the app using the commands mentioned above.
2. The app will display the splash screen for 3 seconds, followed by the dashboard.
3. Navigate between sections using the drawer menu.

---

## Testing

Run unit tests using Jest:
```bash
npm test
```

---

## Dependencies

### Core Dependencies:
- **React**: 18.3.1
- **React Native**: 0.76.6
- **React Navigation**:
  - `@react-navigation/native`
  - `@react-navigation/drawer`
  - `@react-navigation/native-stack`

### UI Enhancements:
- `react-native-linear-gradient`
- `react-native-reanimated`

### Utilities:
- `@react-native-clipboard/clipboard`
- `react-native-safe-area-context`
- `react-native-screens`

### Dev Dependencies:
- `eslint`
- `jest`
- `typescript`

---

## Screenshots

### Splash Screen
(*screenshot of the splash screen.*)

### Dashboard
(*screenshot of the dashboard.*)

---

## Notes

- Ensure you are running Node.js version **18.x** or later.
- Adjust any Gradle settings if your Android build fails.

For any issues or questions, please contact anurag45kmr@gmail.com.

