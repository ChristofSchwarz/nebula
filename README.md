# NebulaJS - Framework for PicassoJS Extensions

It is a testing framework for PicassoJS, you can pick a chart template to begin with (including brushing/selecting) and output a Qlik Sense Extension when done. 

> Note: NebulaJS is still in beta (July 2019)
> Link: https://www.npmjs.com/package/@nebula.js/cli


## How to install? (1st time use)
 * Install NodeJS and NPM 
 * Create a new folder and open a Command Prompt, change into this 
```
npm install @nebula.js/cli@latest –g
```
## Start a new nebula project
```
nebula create <projectname>
```
 * Asks you for your package manager (yarn or npm) and for the template to start (use "barchart")
 * This creates a new subfolder and loads several node_modules
 * Start your Qlik Sense Desktop and log in, so that it is ready to use

> If you want to add "accordion menu" to the extension later, also download and add <a href="https://github.com/ChristofSchwarz/nebula/raw/master/accordion.js">this file</a> into /src folder.  
```
curl https://raw.githubusercontent.com/ChristofSchwarz/nebula/master/accordion.js >./src/accordion.js
```
## Live-view your changes
```
cd <projectname>
nebula serve
```
 * This starts a webservice on http://localhost:8000 
 * Select an app to test your Picasso chart against
<img src="https://github.com/ChristofSchwarz/pics/raw/master/nebula (3).png" width="500"/> 
 
 * Build a hypercube (combination of dimensions and measures) which underlies your picasso chart
<img src="https://github.com/ChristofSchwarz/pics/raw/master/nebula (1).png" width="500"/>
 
 * Turn on "Cache" in the Changes you save are hot-replaced in the browser using localhost:8000
 * Use your code editor of choice and edit folder "./src", in particular "pic-definitions.js" 
 * Copy/paste existing Picasso chart examples from https://picassojs.com/examples.html or https://observablehq.com/@miralemd
 
> if you change the number of Dimensions or Measures, adjust qWidth/qHeight and the properties:
<img src="https://github.com/ChristofSchwarz/pics/raw/master/nebula4.png" />


## Create Qlik Sense extension from project
 * When done with the picasso extension, stop the webservice (Press Ctrl+C in the Command Prompt where you ran nebula serve before)

<img src="https://github.com/ChristofSchwarz/pics/raw/master/nebula 2.png" width="500"/>

```
nebula sense
```
or, if you want to add accordion settings, too
```
nebula sense --ext ./src/accordion.js
```
 * This will create a new subfolder called "<projectname>-ext"
 * You can zip this folder and upload the extension via the QMC of your Qlik Sense Server 
 * or copy the folder to %userprofile%\Documents\Qlik\Sense\Extensions to use it as a Custom Visualization in Qlik Sense Desktop

Enjoy
