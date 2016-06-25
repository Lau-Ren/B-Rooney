# MVC Scaffold

## Concepts

Number | Name
-------|-------------------
1.     | [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
2.     | [Browserify](http://browserify.org/)
3.     | [Babelify](https://github.com/babel/babelify)
4.     | [Watchify](https://github.com/substack/watchify)

## Procedure

To start the app, run the following in the terminal:

```sh
npm install
npm run watch
```

This will install the node modules you need, then run `browserify` and `watchify`. The former will convert the node.js code so that it will run in your browser. The latter will continue to watch your JS files and will re-build your app whenever a file changes. So this will run continually and will tie up your terminal window.

In a *second* terminal window, run:

```sh
npm start
```

Then open your browser to [http://localhost:8008/](http://localhost:8008/), open the console, and start hitting keys. See what shows up in the console?

Beginning with the `src/index.js` file, trace the imports and see how the model, view, and controller interact. Then use this skeleton to build your own MVC application.

Have fun.
