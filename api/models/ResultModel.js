'use strict';

class ResultModel{
    constructor(protocolo){
        this.protocolo = protocolo;
        this.mensagem = 'Sucesso.';
        this.validacoes = [];
        this.retorno = null;
    }
}

module.exports = ResultModel;