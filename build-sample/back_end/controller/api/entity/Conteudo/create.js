

/*

Entity: Conteudo
Layer: controller
Module: create.js

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
,create_ = require('../../../../controller/entity/Conteudo/create')
,idTenant = tenant.idTenant
,params = {
 tag: req.params.tag
,titulo: req.params.titulo
,subTitulo: req.params.subTitulo
,imagem: req.params.imagem
,conteudo: req.params.conteudo
,comentar: req.params.comentar
,publicar: req.params.publicar
,privado: req.params.privado
,dataInicioPublicacao: Date()
,dataFinalPublicacao: req.params.dataFinalPublicacao
,idPessoa: req.params.idPessoa
,idEscola: req.params.idEscola
,idCurso: req.params.idCurso
,DataCad: Date()
,isActive: 1
}
,erro = true
;



erro = !tag===!titulo===!subTitulo===!imagem===!conteudo===!comentar===!publicar===!privado===!dataInicioPublicacao===false===!idPessoa===false===false===!DataCad===!isActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: create.js' });

} else {

return Pool(db, create_(idTenant, params), res);

};
};