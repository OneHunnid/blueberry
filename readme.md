# Blueberry

Blueberry is an extension of the Raspberry Repo. The difference is that this repo introduces Redux and react-router.

### What does it do?

* Starts server on localhost:8080
* Reloads webpage automatically while you work
* Styling: Convert LESS to CSS, adds vendor prefixes, concatenates and minifies to build.css
* Javascript: Uses Babel for ECMAScript 6, converts React's JSX to JS, outputs to build.js
* Builds application to a build folder
* Deploys build folder to github pages. Be sure to update the remote url!


### Getting Started
1. Clone or fork this project
2. Then run `npm install`
3. To start the server, simply run `npm start`

### How to Run
```
npm start           # This will run the default gulp task and kickoff the server
```
### How to Build
```
npm run build       # This will build your application to a build folder in root
```
### How to Deploy
```
npm run deploy      # will deploy your build folder to the github repo's gh-pages branch.
```
