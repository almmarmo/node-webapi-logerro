'use strict';

var ResultModel = require('../models/ResultModel');
var Guid = require('../common/Guid');
var mongoose = require('mongoose');
var LogErro = mongoose.model('LogErro');

exports.criar_log = function(req, res){
    var novoLog = new LogErro(req.body);
    console.log(req.headers['authorization']);
    console.log(JSON.stringify(req.headers));
    //console.log(req);

    novoLog.save(function(err, log){
        if(err)
            res.send(err);
        var result = new ResultModel(Guid.Create());
        result.retorno = log;
        res.json(result);
    });
}

