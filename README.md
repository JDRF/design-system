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
If there are NPM errors, try running ````npm install```` in ````./node_modules/gulp-phantomcss````

# Semantic Versioning and Releases
We're using Semantic Versioning to increment the release phases of the Design System. This helps us to track major changes as well as minor changes and patches. We can also view a history of the project's [releases on Github](https://github.com/JDRF/design-system/releases) due to Semantic Versioning.

A Semantic Version number usually looks something like this: v0.0.1 and the digit placement helps identify whether the release is a major release, a minor release, or a patch.

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
