

/*

Entity: Curso
Layer: controller
Module: read.js

Namespace --------------------/

idCurso
idTenant
nome
idEscola
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
,read_ = require('../../../../controller/entity/Curso/read')
,idTenant = tenant.idTenant
,params = {
 idCurso: req.params.idCurso}
,erro = true
;

erro = !idCurso===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Curso Layer: controller Module: read.js' });

} else {

return Pool(db, read_(idTenant,params), res);

};
};