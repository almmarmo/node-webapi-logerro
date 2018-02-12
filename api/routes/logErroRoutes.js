'use strict';

module.exports = function(app){
    var controller = require('../controllers/logErroController');

    app.route('/api/logerro')
    .post(controller.criar_log);
}