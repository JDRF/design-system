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

1. `gulp clean` - starts and finishes
2. `gulp default` - starts
⋅⋅* `gulp fonts` - starts
⋅⋅* `gulp styles-fabricator` - starts
⋅⋅* `gulp styles-designsystem` - starts
⋅⋅* `gulp scripts-lint` - starts
⋅⋅* `gulp assemble` - starts
⋅⋅* `gulp assemble` - finishes
3. `gulp default` - finishes
4. `gulp scripts-lint` - finishes
5. Starting 'scripts'...
6. Starting 'scripts-fabricator'...
7. Starting 'scripts-designsystem'...
8. Finished 'scripts'
9. Finished 'styles-designsystem'
10. Finished 'styles-fabricator'
11. Starting 'styles'...
12. Finished 'styles'
13. Finished 'scripts-designsystem'
14. Finished 'scripts-fabricator'
15. Finished 'fonts'