

/*

Entity: Conteudo
Layer: controller
Module: update.js

Namespace --------------------/

idConteudo
idTenant
nome
titulo
subtitulo
imagem
conteudo
comentar
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
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
,update_ = require('../../../../controller/entity/Conteudo/update')
,idTenant = tenant.idTenant
,params = {
 idConteudo: req.params.idConteudo, tag: req.params.tag
, titulo: req.params.titulo
, subTitulo: req.params.subTitulo
, imagem: req.params.imagem
, conteudo: req.params.conteudo
, comentar: req.params.comentar
, publicar: req.params.publicar
, privado: req.params.privado
, dataInicioPublicacao: req.params.dataInicioPublicacao
, dataFinalPublicacao: req.params.dataFinalPublicacao
, idPessoa: req.params.idPessoa
, idEscola: req.params.idEscola
, idCurso: req.params.idCurso
, DataCad: req.params.DataCad
, isActive: req.params.isActive
}, 
erro = true
;



erro = !tag===!titulo===!subTitulo===!imagem===!conteudo===!comentar===!publicar===!privado===!dataInicioPublicacao===false===!idPessoa===false===false===!DataCad===!isActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: update.js' });

} else {

return Pool(db, update_(idTenant,params), res);

};
};