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
