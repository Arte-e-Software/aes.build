

/*

Entity: Escola
Layer: controller
Module: update.js

Namespace --------------------/

idEscola
idTenant
nome
idPessoa
DataCad
isActive

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Tue Aug 03 2021 18:07:42 GMT-0300 (Horário Padrão de Brasília)

*/
    

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
,Pool = require('../../../../db/mssql/pool')
,update_ = require('../../../../controller/entity/Escola/update')
,idTenant = tenant.idTenant
,params = {
 idEscola: req.params.idEscola, nome: req.params.nome
, idPessoa: req.params.idPessoa
, DataCad: req.params.DataCad
, isActive: req.params.isActive
}, 
erro = true
;



erro = !nome===!idPessoa===!DataCad===!isActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Escola Layer: controller Module: update.js' });

} else {

return Pool(db, update_(idTenant,params), res);

};
};