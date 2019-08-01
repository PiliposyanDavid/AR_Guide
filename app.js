const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ApiV1 = require('./controllers/api');
const AppConstants = require('./settings/constants');

const app = express();

app.set('port', process.env.Port || 3333);
app.use(bodyParser.urlencoded({
    limit: 1024 * 1024, //1MB
    extended: true
}));
app.use(bodyParser.json({
    limit: 20 * 1024 * 1024, //20MB
    extended: true
}));

require('./models/categories');
require('./models/entities');
require('./models/products');
require('./models/sub-categories');

const db1 = mongoose.createConnection(AppConstants.DB1_URL);

app.db1 = {
    categories: db1.model('categories'),
    entities: db1.model('entities'),
    products: db1.model('products'),
    sub_categories: db1.model('sub_categories')
};


ApiV1(app);


app.listen(app.get('port'), function () {
    console.log('Server is listening on port ' + app.get('port'));
});
