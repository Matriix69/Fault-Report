# Fault Report app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

which Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Details

fault report app takes users fault report from input fields and displays an error or success message on submit

the app uses react-redux to manage global state

on submit the input fields are validated to make sure they're not empty

if all form fields have a value, a success action is dispatched and the success state value gets updated
which then displays a successful message to the user.

likewise if any input field is empty on submit, an error action will be dispatched which then updates the error state and then an error modal gets displayed to the user with the error information.

no validation of each input field seperatly was done, so as to demostrate both error and succesful action dispatch from react-redux.

see live demo, [click here](https://matriix69.github.io/fault-report/)
