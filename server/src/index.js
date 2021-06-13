/* eslint-disable no-console */
import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middleware';
import apiRoutes from './modules';
const app = express();
middlewaresConfig(app);

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');
app.use('/', express.static('../client/build'));
app.use('/profile', express.static('../client/build'));
app.use('/doctor', express.static('../client/build'));
app.use('/login', express.static('../client/build'));
app.use('/signin', express.static('../client/build'));
app.use('/complain', express.static('../client/build'));
app.use('/about', express.static('../client/build'));
app.use('/answer/:id', express.static('../client/build'));
const resolve = require('path').resolve
app.get('/', function(req, res){

    // save html files in the `views` folder...
    res.sendFile(resolve('../client/build/index.html'));
});
// app.get('/', (req, res) => {
//    res.send('Hello world!');
// });
apiRoutes(app);


app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(` Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Make something great `);
        console.log(` Dirname: ${resolve('../client/build/index.html')} `);               
    }
});
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
const path = require('path');
app.use("/", express.static(__dirname));
app.use("/public", express.static(path.join(__dirname, 'public')));