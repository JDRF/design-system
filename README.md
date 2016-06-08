# JDRF Design System

# Using Design System
To use Design System, copy/download the file found in the [dist folder](https://github.com/JDRF/design-system/tree/master/dist/css) to your website. This file contains all current components and provides support for any needed icons, typography, or styling. We recommend including it in the `HEAD` html tag for use throughout your website/application.
````
<link rel="stylesheet" href="/<PATH TO CSS>/design-system.css">
````
Currently, Design System only supports a few components - none of which require JavaScript. If font files are needed for the website/application, copy/download the font files found in the [dist folder](https://github.com/JDRF/design-system/tree/master/dist/fonts/gotham). It's recommended to place the font folder in a similar path to the CSS files.
````
└── ./
	├── css/
		└──  design-system.css
	└── fonts/
		└──  gotham/
````

If icons are a requirement, Design System already includes all necessary styles, but requires the font file from Google's CDN. Include this in the `HEAD` html tag right before the Design System css file.
````
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="/<PATH TO CSS>/design-system.css">
````

# Design System Pieces
Below are the different available Design System elements. If possible, an element is built upon existing Bootstrap-v4 components.
### Components
* Buttons
	* Bootstrap Doc Reference: [here](http://v4-alpha.getbootstrap.com/components/buttons/)
	* Template Path in gh-pages: `src/materials/components/buttons.html`
	* Style Path: `src/scss/_buttons.scss`, `src/scss/mixins/_buttons.scss`, `src/scss/_variables.scss`
	* Example: [here](http://jdrf.github.io/design-system/dist/components.html#buttons)
* Forms _Currently in development_
	* Bootstrap Doc Reference: [here](http://v4-alpha.getbootstrap.com/components/forms/)
	* Template Path in gh-pages: `src/materials/components/forms.html`
	* Style Path: N/A
	* Example: [here](http://jdrf.github.io/design-system/dist/components.html#forms)
* Side Navigation
	* Bootstrap Doc Reference: N/A
	* Template Path in gh-pages: `src/materials/components/navigation.html`
	* Style Path: `src/scss/_nav.scss`
	* Example: [here](http://jdrf.github.io/design-system/dist/components.html#side-navigation)

### Content
* Colors
	* Bootstrap Doc Reference: N/A
	* Template Path in gh-pages: `src/materials/content/colors.html`, `src/data/toolkit.yml`
	* Style Path: `src/scss/_variables.scss`
	* Example: [here](http://jdrf.github.io/design-system/dist/content.html#colors)
* Elevation
	* Bootstrap Doc Reference: N/A
	* Template Path in gh-pages: `src/materials/content/elevation.html`
	* Style Path: `src/scss/_elevations.scss`, `src/scss/_elevations.scss`
	* Example: [here](http://jdrf.github.io/design-system/dist/content.html#elevation)
* Icons
	* Bootstrap Doc Reference: N/A
	* Template Path in gh-pages: `src/materials/content/icons.html`
	* Style Path: N/A
	* Example: [here](http://jdrf.github.io/design-system/dist/content.html#icons)
* Typography
	* Bootstrap Doc Reference: [here](http://v4-alpha.getbootstrap.com/content/typography/)
	* Template Path in gh-pages: `src/materials/content/typography.html`
	* Style Path: `src/scss/_type.scss`, `src/scss/_variables.scss`
	* Example: [here](http://jdrf.github.io/design-system/dist/content.html#typography)

# Contributing
Please review the contributing doc found [here](https://github.com/JDRF/design-system/blob/master/CONTRIBUTING.md)

### Installation
This will require that the master branch to be setup in a sub folder at ./design-system. Be sure that you have switched to the gh-pages branch and cloned another copy of the repo (master branch) into your working directory. The structure should be similar to below.
````
└── working-directory (gh-pages branch)
	├── /design-system/ (master branch)
	├── /dist/
	├── /src/
	├── gulpfile.js
	└── package.json
````
Once your file structure matches the above, you can run the below command to npm install and build the correct files.
```
npm run pull
```

To find available commands from this recommended setup, please visit the [gh-pages](https://github.com/JDRF/design-system/tree/gh-pages) branch

### Tests
Tests can be run from the master branch. There are two kinds of testing currently in the Design System - Visual Regression and Unit Tests. Visual Regression relies on PhantomCSS and CasperJS as tools and the gh-pages static site as a visual source. As a result, the testing actually gets executed from that branch when the environment is setup properly (see Installation above). Unit Tests rely on Tape and Node scripting for generating mocks and tests.

* Visual Regression Tests
````
npm run visual-tests
````
* Unit Tests
````
npm run unit-tests
````
* Running all tests
````
npm test
````

Visual Regression tests are run from a parent directory that relies on the above specified directory structure. See the [gh-pages README](https://github.com/JDRF/design-system/tree/gh-pages) for information on testing.

### Semantic Versioning and Releases
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
