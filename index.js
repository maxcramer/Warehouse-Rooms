const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('./lib/errorHandler');
const app = express();
const mongoose = require('mongoose');
const { dbUri } = require('./config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);


const Router = require('./config/routes');
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));
app.use('/api', Router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// errorHandler MUST go after Router!!!
app.use(errorHandler);
app.listen(4001, () => console.log('Express is listening on 4001'));
