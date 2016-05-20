# Gulp Visual Workflow

## Flow for gh-pages branch (dev env)

````
└── design-system
│
└── /dist
│	│
│	└── /assets
│		│
│		└── /design-system
│		│	│
│		│	└── /fonts
│		│	│
│		│	└── /scripts
│		│	│
│		│	└── /styles
│		│
│		└── /fabricator
│			│
│			└── /scripts
│			│
│			└── /styles
│
└── /node_modules
│	│
│	└──
│
└── /src
│	│
│	└── /assets
│		│
│		└── /design-system
│		│	│
│		│	└── /fonts
│		│	│
│		│	└── /scripts
│		│	│
│		│	└── /styles
│		│
│		└── /fabricator
│			│
│			└── /scripts
│			│
│			└── /styles
│
└── /tasks
 	│
 	└─ /fonts-designsystem.js
 	│
 	└─ /styles-designsystem.js
 	│
 	└─ /styles-fabricator.js
````

## Commands that fire when running `npm run serve-from-dev`

1. Starting `gulp clean`
2. Finished `gulp clean`
3. Starting `gulp default`
4. Starting `gulp fonts`
5. Starting `gulp styles-fabricator`
6. Starting `gulp styles-designsystem`
7. Starting `gulp scripts-lint`
8. Starting `gulp assemble`
9. Finished `gulp assemble`
10. Finished `gulp default`
11. Finished `gulp scripts-lint`
12. Starting `gulp scripts`
13. Starting `gulp scripts-fabricator`
14. Starting `gulp scripts-designsystem`
15. Finished `gulp scripts`
16. Finished `gulp styles-designsystem`
17. Finished `gulp styles-fabricator`
18. Starting `gulp styles`
19. Finished `gulp styles`
20. Finished `gulp scripts-designsystem`
21. Finished `gulp scripts-fabricator`
22. Finished `gulp fonts`
23. Starting `gulp serve`
24. Finished `gulp serve`

`gulp clean` - Deletes the `config.dest` folder which is specified in gulpfile.js.

`gulp default` - Fires default commands: `gulp fonts`, `gulp scripts`, `gulp styles`, and `gulp assemble`

`gulp fonts` - Bring the fonts specified in the config.src.fonts path from gulpfile.js into the dist folder for use.

`gulp styles-fabricator` - Bring the fabricator styles specified in the config.src.styles.fabricator path specified in gulpfile.js, rename, and place it in the dist folder.

`gulp styles-designsystem` - Bring the design system styles specified in gulpfile.js (varies depending on environment), rename, and place in the dist folder.

`gulp scripts-lint` - Run fabricator scripts through JS linter

`gulp scripts` - Run `scripts-lint`, then `gulp scripts-fabricator` and `gulp scripts-designsystem`

`gulp scripts-fabricator` - Take the src app.js/fabricator.js, rename, minify, and place files in the dist folder

`gulp scripts-designsystem` - Depending on the environment, take JS files, rename, and place files in the dist folder

`gulp assemble` - What generates the wrappers and escapes the html characters for our code examples on gh-pages. This code is housed in separate templates in the html folder.

`gulp serve` -

