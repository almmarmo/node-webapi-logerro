'use strict';
var Guid = require('../common/Guid');

class ResultModel{
    constructor(protocolo){
        if(protocolo === undefined)
            this.protocolo = Guid.Create();
        else
            this.protocolo = protocolo;
        
        this.mensagem = 'Sucesso.';
        this.validacoes = [];
        this.retorno = null;
    }

    addValidation(attribute, message){
        validacoes.push({attribute: attribute, message: message});
        this.mensagem = "Validações";
    }
}

module.exports = ResultModel;