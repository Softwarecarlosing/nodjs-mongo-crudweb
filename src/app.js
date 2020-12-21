const patch = require('patch');
const express = require('express');
const morgan = require('morgan');
const mongose = require('mongose');

const app = express();


//conecting
mongose.connect('mongodb://localhost/MONGO-NOD')
   .then(db => console.log('Db connected'))
   .catch(err => console.log(err));


// import routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', patch.join(_dirname, 'views'));
app.set('view engine', 'ejs');

// midelware
app.use(morgan('dev'));
app.use(express.urlencoded({extend: false}));


// routes
app.use('/', indexRoutes);


// starting the server
app.listen(400, () => {

    console.log('server on 400');

});

