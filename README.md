# JDRF Design System

# File Structure

````
└── working-directory (gh-pages branch)
	├── /design-system/ (master branch)
	├── /dist/
	├── /src/
	├── gulpfile.js
	├── package.json
	└── webpack.config.json
````

# Local Development

#### Setting up
### Installation
This will require that the master branch to be setup in a sub folder at ./design-system. Be sure that you have switched to the gh-pages branch and cloned another copy of the repo (master branch) into your working directory. The structure should be similar to above.

Once your file structure matches the above, you can run the below command to npm install and build the correct files.
```
npm run pull
```

#### Running locally and editing Fabricator
Running locally, all files can be access via their full path, but it's recommended to serve them with the below command and access at http://localhost:3000
````
npm run serve
````

#### Running locally and editing Design System
If you are developing the master branch in a sub-folder called _design-system_, it's recommended that you run the below command instead. This will add a dependency on the master branch dist files and allow local development on Design System.

`serve-from-dev` will also watch your files in _design-system_ so you only have to run gulp in one place.
````
npm run serve-from-dev
````
# Pushing to gh-pages
````
npm run build
````

If you want to include the latest from master in gh-pages
````
npm run build-from-dev
````

# Tests
The screenshots should be generated before any edits are made to the source files. Once work is complete run the below command to confirm no unexpected changes have occurred.
````
npm run test
````

To run tests on specific files, add the flags `--test_dir=<NAME OF FOLDER>` and `--test_file=<NAME OF FILE>` to the gulp command triggered by the above command.

````
gulp --test_dir=<NAME OF FOLDER> --test_file=<NAME OF FILE> test
````

If there are NPM errors, try running ````npm install```` in ````./node_modules/gulp-phantomcss````
