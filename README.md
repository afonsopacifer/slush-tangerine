# New Game Boilerplate
> Description

## Get to know the boilerplate

**Stack based in NodeJS**
- Template Engine: [Jade](http://jade-lang.com/)
- Task Runner: [GulpJS](http://gulpjs.com/)

**Vendors**
- Reset: [Normalize](https://necolas.github.io/normalize.css/)

## Getting Started

**install the basics dependencies**

- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)

**Clone this repository**
```sh
$ git clone git://github.com/afonsopacifer/new-game.git new_project
```

**Install dependencies**
```sh
$ cd new_project
$ npm install
```

**Watch the files to build and run a static server on http://localhost:8080/**
```sh
$ gulp serve
```

## Folders Structure
	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENSE.md
	├── src/
	|   ├── assets/
	|   ├── includes/
	|   ├── partials/
	|   ├── layouts/
	|   └── index.jade
	├── out/
	├── config.json
	├── gulpfile.js
	├── package.json
	└── .gitignore

## Gulp Tasks

- `$ gulp serve`: Watch the files to build and start a static server.
- <s>`$ gulp build`: Compile, concat and minify all files.</s>
- `$ gulp jade`: Compile jade files.
- <s>`$ gulp autoprefixer`: Autoprefixer the css files.</s>
- <s>`$ gulp validation`: Validation the HTML files.</s>
- <s>`$ gulp lint`: Lint the css files.</s>
- <s>`$ gulp hint`: Hint the JS files.</s>
- <s>`$ gulp imagemin`: Compress image files.</s>
- <s>`$ gulp svgmin`: Compress svg files.</s>
- <s>`$ gulp deploy`: Deploy for gh-pages.</s>

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/new-game/blob/master/CONTRIBUTING.md).

## Licence

[MIT License](https://github.com/afonsopacifer/new-game/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
