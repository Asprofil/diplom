const nodeExternals = require('webpack-node-externals');
 const path = require('path');
 module.exports  = env => {
    // Use env.<YOUR VARIABLE> here:
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
    console.log('Production: ', env.production); // true
  
    return {
        
     target: 'node',
     externals: [nodeExternals()],
     mode: env.NODE_ENV,
     entry: {
         'index': './src/start.js'
     },
     output: {
         path: __dirname + '/dist',
         filename: 'index.bundle.js',
         libraryTarget: 'commonjs2',
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             use: 'babel-loader'
         }]
     }
    };
 };