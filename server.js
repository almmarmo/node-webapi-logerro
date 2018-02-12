var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  LogErro = require('./api/models/logErroModel'),
  bodyParser = require('body-parser'),
  config = require('./api/common/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/logErroRoutes');
app.use('/api', routes(express));

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('Log de Erro RESTful API server started on: ' + port);