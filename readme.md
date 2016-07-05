# Raspberry

Raspberry is a delicious Gulp and React boilerplate that makes front-end development easier.

### What does it do?

* Starts server on localhost:8080
* Reloads webpage automatically while you work
* Styling: Convert LESS to CSS, adds vendor prefixes, concatenates and minifies to build.css
* Javascript: Uses Babel for ECMAScript 6, converts React's JSX to JS, outputs to build.js
* Builds application to a build folder
* Deploys build folder to github pages. Be sure to update the remote url!

### Directory Layout

```
├── /app/                         # The source code of the application
    ├── /scripts/                 # Contains javascript files for app
        ├── /project/             # Project/Application folder
            ├── /component/       #  React Components
            ├── /store/           # Stores contain the application state and logic
            ├── index.js          # Renders the application in the DOM
        ├── app.js                # The application's bootstrap file, entry point
    ├── /styles/                  # Contains the LESS and CSS for the app
        ├── build.css             # Compiled CSS for app
        ├── build.css.map         # CSS Map file
        ├── main.less             #  Main LESS Styling for app
        ├── normalize.less        # Standard normalize/reset stylesheet
    ├── index.html                # Main index file for app
├── /gulp/                        # Gulp Organization
    ├── /gulp-tasks/              # gulp tasks
        ├── compileJS.js          # Compiles JSX and ES6 to ES5 and outputes to build.js
        ├── compileStyles.js      # Concats, minifies LESS to CSS and outputes to build.css
        ├── copy-assets.js        # Copies /app/assets to build/assets
        ├── copy-html.js          # Copies /app/index.html to build/index.html
        ├── copy-scripts.js       # Copies /app/build.js to build/scripts/
        ├── copy-styles.js        # Copies /app/styles/build.css to build/styles/
        ├── deploy.js             # Deployes build folder to a GitHub Pages
        ├── reloadHTML.js         # Reloads html files if there is a change
        ├── watch.js              # Watches for LESS and HTML changes
        ├── webserver.js          # Starts a simple server on localhost:8080
    ├── APPCONFIG.js              # Configuration file for Gulp
│── gitignore.js                  # Ignore certain folders and files
│── gulpfile.js                   # Configuration file for gulp tasks
│── package.json
└── readme.md  
```

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
