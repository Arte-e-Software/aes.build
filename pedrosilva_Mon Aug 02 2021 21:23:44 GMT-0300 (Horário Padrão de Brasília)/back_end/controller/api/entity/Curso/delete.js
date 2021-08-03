

/*

Entity: Curso
Layer: controller
Module: delete.js

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
,delete_ = require('../../../../controller/entity/Curso/delete')
,idTenant = tenant.idTenant
,params = {
 idCurso: req.params.idCurso, idPessoa: req.params.idPessoa}
,erro = true
;

erro = !idCurso===!idPessoa===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Curso Layer: controller Module: delete.js' });

} else {

return Pool(db, delete_(idTenant,params), res);

};
};