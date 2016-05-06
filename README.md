# JDRF Design System

# Installation
To setup with optimal build, we suggest running the below command:
````
npm run init-from-dev
````
It will setup your working directory to the below file structure

````
└── working-directory (gh-pages branch)
	├── /design-system/ (master branch)
	├── /dist/
	├── /src/
	├── gulpfile.js
	└── package.json
````

To find available commands from this recommended setup, please visit the [gh-pages](https://github.com/JDRF/design-system/tree/gh-pages) branch

# Tests
Currently, one only _proof of concept_ PhantomCSS test.
````
npm run test
````
If there are NPM errors, try running ````npm install```` in ````./node_modules/gulp-phantomcss````

# Semantic Versioning and Releases
We're using Semantic Versioning to increment the release phases of the Design System. This helps us to track major changes as well as minor changes and patches. We can also view a history of the project's [releases on Github](https://github.com/JDRF/design-system/releases) due to Semantic Versioning.

A Semantic Version number usually looks something like this - `v0.0.1`. The digit placement helps identify whether the release is a major release, a minor release, or a patch. See the example below for reference.

````
MAJOR.MINOR.PATCH

1.0.0 = Major Release
1.1.0 = Minor changes to Major Release 1.0.0
1.0.1 = Patch/Bug fixes to Major Release 1.0.0
2.0.0 = A new Major Release
````

To create a new release, we have to tag our `master` branch with the new release number. This can be done directly on Github.

For further instructions on how to tag a release, visit Github's documentation on [creating releases](https://help.github.com/articles/creating-releases/).

For further instructions on how to link to a release, visit Github's documentation on [linking to releases](https://help.github.com/articles/linking-to-releases/).

# Current Release Status
We are currently at a pre-release version of [v0.0.1](https://github.com/JDRF/design-system/releases). While the Design System is functional, it is still a work in progress build tool wise and design wise.
