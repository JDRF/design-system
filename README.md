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

# Continuous Development
The easiest (and recommended) way to develop on Design System is to checkout the gh-pages locally and create a subdirectory called design-system that houses the master branch.

````
cd <DIR_TO_PROJECT>
git checkout gh-pages
git clone git@github.com:JDRF/design-system.git design-system
cd design-system
````

# Tests
Currently, one only _proof of concept_ PhantomCSS test.
````
npm run test
````
If there are NPM errors, try running ````npm install```` in ````./node_modules/gulp-phantomcss````.
