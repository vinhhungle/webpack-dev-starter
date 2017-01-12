# A simple webpack starter project using ES6 and SASS.

This branch uses React/JSX and React Router.

# Getting Started

## Dependencies

What you need to run this starter:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running node (`v6.9.2`+) and npm (`3.10.8`+) or yarn (`0.17.9`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` or `yarn install` to install all dependencies

## npm Scripts

Please check package.json to see scripts that you can run:

### To start client development server:
```bash
npm run dev:client
```

It will start a local server using `webpack-dev-server` on `http://localhost:8080`
which will watch, build (in-memory), and auto reload after you've made changes in /client codes. 

### To start api server:
```bash
npm run dev:server
```

It will start an api server using `express` on `http://localhost:3000/api`
which will be auto restarted by `nodemon` after you've made changes in /server codes.

### To start both servers at the same time:
```bash
npm run start:dev
```

### To build client codes for production:
```bash
npm run build
```

It will save all bundles into /dist/build.
Shared modules will be bundled into `common.bundle.js`
Page specific modules will be bundled into `[name].bundle.js`

All stylesheets will be bundled into `styles.css`

### To serve client build:
```bash
npm run serve
```

It will start a http-server on`http://localhost:3000`

### To serve client build with api server:
```bash
npm start
```

## Folder structures

* /client: all client javascripts and stylesheets
* /public: webpack-dev-server content base folder, images, assets, *.html, favicon.ico
* /server: all api server codes (if you need to develop backend api)
* /dist: client build files (do not make any changes in this folder)
* /.webpack: webpack config modules

### Other Notes

* All console.log console.debug will be removed in production build files
* Please take a look at modules in .webpack folder and make any changes you wish
* html templates, json files can be loaded using requirein your modules
* images and fonts can also be bundled as base64 if file size is less than 10KB (can be changed)
* If you want to use LESS just replace sass-loader with less-loader
* If you have only one page, you can remove other entries in webpack.config.js, just keep `main`
* another.js is just module to demonstrate splitting shared bundle feature, you can remove this entry and another.html

# License

[MIT](/LICENSE)
