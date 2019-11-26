TRAVEL APP

##Summary

"Your destination"

This app is going to help people to share their travel experience at an unusual destination. This app is about places which are very unique and nice but not so famous in the world. A user will be able to see a list of countries on the main page. 
The user can then click on an interesting destination and find out more about this place, and see picture as well.


 ##Models

 Users - id, username, password
 Place - id, city, country, text, photo, userId (user who created the place)
 Relashionships: one-to-many (one person can create many places)


## User Stories
- 1) As an unauthenticated user, when I navigate to the home page, I want to be able to register for a new account or log in if I already have one.
- 2) As an authenticated user, I should be able to create new travel destinations
- 3) As an authenticated user, I should be able delete, update, and edit places which I have created
- 4) As a user (authenticated or guest), I should not be able to delete, update, or edit places which I did not create.
- 5) As a user, I want to see a list of all available places in the system on the homepage.
- 6) As a user, when on the homepage, I want to be able to click a place on the list of places and see more information about this place.
- 7) As a user, when I log in or create an account, I want to be redirected to a list of all the places I have created, where I should be able to edit existing places I have created, or create a brand new place.
- 8) As an authenticated user, the new places I create should be added to the list of places on the homepage.


## Stretch Goals
1) Add some map which will represent places from website

______________________________________________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
