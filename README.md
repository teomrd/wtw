# Whatever The Weather

https://teomrd.github.io/wtw/

Simple React project that displays the weather forecast for Glasgow (for now...) for the next 5 days

### Requirements \*

- You’ll need to have Node >= 6 on your local development machine
- Yarn package manager (or alternatively npm)

## Start the development server

```consol
yarn start
```

## Build project

```consol
yarn build
```

## Run tests (in watch mode)

```consol
yarn test
```

---

## ToDos

- User specific forecast

  - Get user's location to display the forecast by default
  - Capture user input for the city
  - Extend the functionality to get forecast for more than one city

- State management with Redux
- Client side routing
- UX
  - Intoduce a design system (or build one)
  - Make it mobile friendly
  - Enrich the background of the app to represent the current weather conditions

* Code Quality and consistency

  - Enrich ESLint rules
    - eslint-plugin-airbnb
    - eslint-plugin-react
    - eslint-plugin-import
    - eslint-plugin-promise
    - eslint-plugin-jsx-a11y
    - eslint-plugin-jest
    - eslint-plugin-prettier

  * Format code with Prettier
  * pre-commit hook that checks linting output and run the tests

* Project structure that better represents the applications structure
* Better Documentation on how to run, build test and extend the current functionality.

  .....

---

This project kickstarted with
[Create React App](https://www.google.com "Create React App"). Check there for more info.

> The application codebase is hosted on Github and served by GitHub Pages
