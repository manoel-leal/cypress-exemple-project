# cypress-exemple-project
A simple cypress project with cucumber, pageobjects and report setup.

# Requirements

* Node.js 10 or 12 and above

# Step-by-Step for project creation and setup

* In project folder, Init the node project for package.json file generate:<br>
 `npm init -y` <br><br>
* Install cypress via npm:<br>
`npm install cypress --save-dev` <br><br>
* Opening Cypress:<br>
`npx cypress open`<br><br>
or <br><br>
`./node_modules/.bin/cypress open`<br><br>
* Install the cucumber plugin:<br>
`npm install --save-dev cypress-cucumber-preprocessor`<br><br>
* Add it to your plugin:<br>
`cypress/plugins/index.js`
``` 
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

```

* Add support for feature files to your Cypress configuration:<br>

`cypress.json`

```
{
  "testFiles": "**/*.feature"
}

```

* Add this section in your package.json:

```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

```

* for mochawesome report setup execute the commands:

`npm install mocha --save-dev`<br>
`npm install cypress-multi-reporters --save-dev`<br>
`npm install mochawesome --save-dev`<br>
`npm install mochawesome-merge --save-dev`<br>
`npm install mochawesome-report-generator --save-dev`<br>

# References 
* https://www.cypress.io/
* https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
* https://www.npmjs.com/package/mochawesome
* https://martinfowler.com/bliki/PageObject.html
* https://www.youtube.com/playlist?list=PLzDWIPKHyNmK9NX9_ng2IdrkEr8L4WwB0
* https://www.youtube.com/watch?v=mfZfhp6Ql8c&t=1333s
* https://www.youtube.com/playlist?list=PLnUo-Rbc3jjyx5BVnG8MB7vNd5ecu2yP1