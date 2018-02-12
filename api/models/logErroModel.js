'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exceptionSchema = new Schema({
    type: {
        type: String
    },
    source: {
        type: String
    },
    message: {
        type: String
    },
    stackTrace: {
        type: String
    },
    hResult:{
        type: Number
    }
});
var ErroSchema = new Schema({
    aplicacao: {
        type: String,
        required: 'Aplicação é obrigatória'
    },
    ipServidorOrigem:{
        type: String
    },
    servidorOrigem:{
        type: String
    },
    environmentMachineName:{
        type: String
    },
    environmentUserName:{
        type: String
    },
    environmentUserDomainName:{
        type: String
    },
    environmentVersion:{
        type: String
    },
    exception: exceptionSchema
});

module.exports = mongoose.model('LogErro', ErroSchema);