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
 
