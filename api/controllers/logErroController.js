'use strict';

var ResultModel = require('../models/ResultModel');
var Guid = require('../common/Guid');
var mongoose = require('mongoose');
var LogErro = mongoose.model('LogErro');

exports.criar_log = function(req, res){
    var novoLog = new LogErro(req.body);
    var protocolo = req.headers['protocolo'];
    novoLog.protocolo = protocolo ? protocolo : Guid.Create();

    novoLog.save(function(err, log){
        if(err)
            res.send(err);
        var result = new ResultModel(novoLog.protocolo);
        result.retorno = log;
        res.json(result);
    });
}

