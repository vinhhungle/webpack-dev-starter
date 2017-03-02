var ExtractTextPlugin = require('extract-text-webpack-plugin')

var exclude = /node_modules/

module.exports = function (ENV) {
  var config = {
    loaders: [
      {
        test: /\.(tsx?)$/,
        exclude: exclude,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(jsx?)$/,
        exclude: exclude,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: exclude,
        loader: ExtractTextPlugin.extract('css!resolve-url-loader!postcss?sourceMap')
      },
      {
        test: /\.scss$/,
        exclude: exclude,
        loader: ExtractTextPlugin.extract('css!resolve-url-loader!sass?sourceMap!postcss')
      },
      {
        test: /\.(html|tpl)$/,
        exclude: exclude,
        loader: 'raw-loader'
      },
      {
        test: /\.rt$/,
        loaders: ['babel-loader?presets[]=es2015', 'react-templates-loader?modules=es6']
      },
      {
        test: /\.(json)$/,
        exclude: exclude,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        exclude: exclude,
        loader: 'url-loader?limit=10000'
      }
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/, 
        loader: "source-map-loader"
      }
    ]
  }

  if (ENV === 'production') {
    config.loaders[0].loader += '!strip-loader?strip[]=console.log,strip[]=console.debug'
  }

  return config
}
