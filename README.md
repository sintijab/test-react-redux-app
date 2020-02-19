# test-react-redux-app
Test application powered by ReactJS, Redux and Webpack ^4.41.6 configuraton.

## Getting Started
The repository consists of Test application project powered by ReactJS, Redux, Webpack configuration (for development purpose), webpack-dev-server development server with live reloading, HTML Webpack plugin for serving bundle, simple asset management with style and SASS module loaders, Babel transpiling to preprocess files and use latest ES features. Additional dependencies: Jest and Enzyme modules for testing, Redux state management, ESLint and eslint-config-airbnb, babel-preset-airbnb modules for common JS patterns and rules.

### Prerequisites
latest versions of npm 6.13.7 and node -v 12.16.0 has been supported

### Installing

Installing dependencies

```
npm install
```
Building project, generating bundle
```
npm run build
```
Starting project locally (will run at :8080 port)
```
npm run start
```

## Running the tests
Running the example unit tests with Jest and Enzyme (from '/test' directory)
```
npm run test
```
Watch files for changes and rerun tests related to changed files
```
npm run test-watch
```
Collect coverage information and reported in the output ('/test/coverage' directory)
```
npm run test-coverage
```

### Notes
The test items from provided API response could have unique identifier to use for the listing items. The incorrect items could be replaced by all items in structure to avoid additional array methods for merging all items together. The actions has not been separated due simplicity of app functionality. The score has been stored in localStorage in order to be able to add multiple session reports if it would be required. The test board items has been styled with flex grid responsive alignment across three viewports.

## Contribution

* **Sintija Birgele**
https://github.com/sintijab/test-react-redux-app
