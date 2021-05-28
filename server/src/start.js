// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: [ 'env' ]
})

//console.log(process.env.NODE_ENV.trim())
// Import the rest of our application.
module.exports = require('./index.js')
