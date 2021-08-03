

/*

Entity: Curso
Layer: controller
Module: create.js

Namespace --------------------/

idCurso
nome
idEscola
idPessoa
DataCad
isActive

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva pedro@aes.tec.br

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Mon Aug 02 2021 21:23:44 GMT-0300 (Horário Padrão de Brasília)

*/
    

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
,Pool = require('../../../../db/mssql/pool')
,create_ = require('../../../../controller/entity/Curso/create')
,idTenant = tenant.idTenant
,params = {
 nome: req.params.nome
,idEscola: req.params.idEscola
,idPessoa: req.params.idPessoa
,DataCad: Date()
,IsActive: 1
}
,erro = true
;



erro = !nome===!idEscola===!idPessoa===!DataCad===!IsActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Curso Layer: controller Module: create.js' });

} else {

return Pool(db, create_(idTenant, params), res);

};
};