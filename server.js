/**
 * Created by tuyenhx on 10/14/16.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
