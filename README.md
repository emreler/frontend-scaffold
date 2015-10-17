# Frontend Scaffold
This is a basic scaffold for frontend project. It features a Gulp script to concat, uglify/minify and revision .css and .js files which are referenced in `index.html` file.

I usually find working with frontend build tools quite tedious because of their all around functionality and configurations, and each time it took me few hours for this simple task to work.

## Installation

Clone the repository using the following.
```
$ git clone git@github.com:emreler/frontend-scaffold.git mynewproject
```
You must have Gulp installed globally on your system. Run the following if you don't.
```
$ npm install -g gulp
```
For the Gulp script to work, you must install npm dependencies. Run the following to get them.
```
$ npm install
```
Finally, depending on your project's needs, type dependencies inside your `bower.json` file and run the following to get your frontend dependencies.
```
$ bower install
```

## Running

Run ```$ gulp watch``` and start working on your project inside `src`folder. Gulp will rebuild your files whenever a .css, .js or .html file changes inside the `src`folder.

For easier development, you can reference your .css or .js files relative to the .html file inside the `src` folder. Builded files will be inside `dist` folder, you should only deploy this folder to your server.
