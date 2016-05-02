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
Running locally, all files can be access via their full path, but it's recommended to serve them with the below command and access at http://localhost:3000
````
npm run serve
````

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
