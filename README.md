# JDRF Design System

# Installation
Run the below command to generate dependencies and compiled files.
````
npm run build
````

# Clean Up
Wipe the directory of all compiled files and dependencies.
* /build - _compiled files_
* /node_modules - _dependencies_
* /screenshots && /failures - _PhantomCSS compiled files_
````
npm run clean
````

# Tests
Currently, one only _proof of concept_ PhantomCSS test.
````
npm run test
````
If there are NPM errors, try running ````npm install```` in ````./node_modules/gulp-phantomcss````.
