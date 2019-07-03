# NebulaJS - Framework for PicassoJS Extensions

NebulaJS is currently in beta. It is a testing framework for PicassoJS, you can pick a chart template to begin with (including brushing/selecting) and output a Qlik Sense Extension when done. 

## How to install? 
 * Install NodeJS and NPM 
 * Create a new folder and open a Command Prompt, change into this 
```
npm install @nebula.js/cli@latest –g
```
## Start a new nebula project
```
npm run create <projectname>
```
 * Asks you for your package manager (yarn or npm) and for the template to start (use "barchart")
 * This creates a new subfolder and loads several node_modules
 * Start your Qlik Sense Desktop and log in, so that it is ready to use
```
cd <projectname>
nebula serve
```
 * This starts a webservice on http://localhost:8000 
 * Select an app to test your Picasso chart against
 * Turn on "Cache" in the Changes you save are hot-replaced in the browser using localhost:8000
 * Use your code editor of choice and edit file ./src/pic-definitions.js
 * If you want to add "accordion menu" to the extension later, also download and add <a href="https://github.com/ChristofSchwarz/nebula/raw/master/accordion.js">this file</a> into /src

 
