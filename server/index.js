var express = require('express');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);

var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
    states: {
        colors: true
    },
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', (req, res, next) => {
    fs.readFile(path.resolve(__dirname, '../src/index.html'), 'utf8', (err, file) => {
        res.write(file);
        res.end();
    })
});

app.listen(8080);