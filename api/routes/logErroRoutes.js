'use strict';
var config = require('../common/config');

module.exports = function(express){
    var routes = express.Router();
    var controller = require('../controllers/logErroController');
    routes.use(function(req, res, next){
        var token = req.headers['authorization'];
        if(token){
            if(token === config.token)
                next();
            else
                return res.json({mensagem: "Token inválido."});
        }else{
            return res.status(403).send({
                mensagem: 'Acesso não autorizado.',
                validacoes: [{atributte: 'token', message: 'Não informado.'}]
            });
        }
    });
    //A ordem faz diferença aqui, a configuração das rotas tem que vir após a configuração do middleware, caso contrário o middleware não funciona.
    routes.post('/logerro', controller.criar_log);
    
    return routes;
}