# keithy.me
## About
My personal website, built on React and react-router. I use webpack to place everything into a single `bundle.min.js` file, even the `scss` files.

## Requirements
* Node
* Webpack
* Sass

## Setup
1. Clone from git and `cd` into it.
2. `npm install -g webpack` to install webpack globally, if there is no webpack yet.
3. `npm install` to install all dependencies.
4. `npm run build-js` to build the `bundle.min.js` file. Run this everytime there is a change on the JSX files to build the newest versions.
4. `npm run build-css` to build the `style.css` file.
5. `index.html` is now ready!
6. To build the resume, do `npm run resume`. This requires pdflatex installed.

## Thanks
Thanks to gpbl/isomorphic500 for the CSS gallery code, found [here](https://github.com/gpbl/isomorphic500/tree/master/src/style).

Thanks to [Entypo](http://www.entypo.com/) for the free svg icons.
