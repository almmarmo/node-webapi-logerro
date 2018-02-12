'use strict';
var config = require('./config');

module.exports = function(express){
    var routes = express.Router();
    console.log('mid...');

    routes.use(function(req, res, next){
        var token = req.headers['authorization'];
        console.log('mid called...');
        if(token){
            console.log(token);
            next();
        }else{
            return res.status(403).send({
                mensagem: 'Acesso não autorizado.',
                validacoes: [{atributte: 'token', message: 'Não informado.'}]
            });
        }
    });
}