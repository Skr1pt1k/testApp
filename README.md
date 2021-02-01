# Code challenge
This application was created with react-native version 0.63.4 and react-redux + redux-saga (^7.2.2, ^1.1.3)

## Setup

- Go to application root and run the command:
- `npm install`
- Then run:
- `cd ios && pod install`
- After that you can run your application in root folder via command:
- `react-native run-ios` (for iOS)
- `react-native run-android` (for Android)

I chose the redax and redax-saga because 80 percent of all my projects were written with these tools.

All the main logic with data parsing is in the file sagas.js in the store/restaurants folder.
