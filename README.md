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


# References 
* https://www.cypress.io/
* https://github.com/TheBrainFamily/cypress-cucumber-preprocessor