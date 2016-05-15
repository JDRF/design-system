# Gulp Visual Workflow

## Stylesheet Flow for master branch (dev env)

````
└── design-system
 	│
 	└── /dist
 	│	│
 	│	└── /css/design-system.css (3. Combines css-files.css & sass-files.css into final file)
 	│
 	└── /node_modules
 	│	│
 	│	└── /material-icons/css/material-icons.css (2. Concats into css-files.css)
 	│
 	└── /src
 	│	│
 	│	└── /scss/style.scss (1. Concats into sass-files.css)
 	│
 	└── /tasks
 		│
 		└─ /styles.js (tasks that run from gulpfile.js)
````

Styles begin in `src/scss/` where each file is importing Bootstrap's matching file (if applicable) or following the same convention for overwrites. Each file is then imported into style.scss using `@import`.

### Flow for styles.js in the tasks folder

`var sassStream` is responsible for pointing out the path of our styles.scss for us to work with.

Our styles.scss file gets run through scss linter for Sass errors.

We're including the path to Bootstrap so we can reference that path in our stylesheet imports in `src/_buttons.scss/_grid.scss/_mixins.scss` etc.

It then concatenates (combines) all the styles from the sassStream into a file called "sass-files.css".

Next it concatenates the material icons from node_modules into a file called "css-files.css".

The stream called `stream` combines the two files that were created from the sassStream and cssStream (icons), the sass-files.css and css-files.css, and merges them into one final file called "design-system.css". This file gets stored in the `dist/css` path. This file should contain all styles from `src/style.scss` and `node_modules/material-icons/css/material-icons.css`.