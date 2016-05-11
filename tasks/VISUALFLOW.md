# Gulp Visual Workflow

## Stylesheet Flow for master branch (dev env)

````
└── design-system
 	│
 	└── /dist
 	│	│
 	│	└── /css/design-system.css (the final compiled stylesheet)
 	│
 	└── /node_modules
 	│	│
 	│	└── /material-icons/css/material-icons.css (icons stylesheet)
 	│
 	└── /src
 	│	│
 	│	└── /scss/style.scss (starting point)
 	│
 	└── /tasks
 		│
 		└─ /styles.js (tasks that run from gulpfile.js)
````

gulpfile.js, line 14 is the path of the final css file: design-system.css

Styles begin in src/scss/ where each file is importing Bootstrap's matching file (if applicable) or following the same convention for overwrites. Each file is then imported into style.scss using @import.

### tasks/styles.js

When running `gulp styles` (line 41 in gulpfile.js) which is also run by default whenever running `gulp` (line 53 in gulpfile.js), these are the steps it goes through:

Line 5: `var sassStream` is responsible for pointing out the path of our styles.scss for us to work with.

Line 9: Runs our styles.scss through scss linter for sass errors.

Line 12: Includes the path to Bootstrap so we can reference that path in our stylesheet imports in src/_buttons.scss/_grid.scss/_mixins.scss etc.

Line 17: Any errors in the above steps will return an error via terminal.

Line 20: Concatenates (combines) all the styles from the sassStream into a file called "sass-files.css". We never physically see this file in the end result. Continue reading for why that is.

Line 22: Concatenates the material icons from node_modules into a file called "css-files.css" - another file we never physically see in the end result. Continue reading for why that is.

Line 25: The last stream combines the two files that were created from the sassStream and cssStream (icons), the sass-files.css and css-files.css and merges them into one final file called "design-system.css". This file gets stored in the `dist/css` path. This file should contain all styles from `src/style.scss` and `node_modules/material-icons/css/material-icons.css`.