const express = require('express');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

const app = express();

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