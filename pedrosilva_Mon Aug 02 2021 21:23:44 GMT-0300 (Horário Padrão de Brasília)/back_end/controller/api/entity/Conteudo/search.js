

/*

Entity: Conteudo
Layer: controller
Module: search.js

Namespace --------------------/

idConteudo
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
Author Pedro Silva pedro@aes.tec.br

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Mon Aug 02 2021 21:23:44 GMT-0300 (Horário Padrão de Brasília)

*/
    

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
,Pool = require('../../../../db/mssql/pool')
,search_ = require('../../../../controller/entity/Conteudo/search')
,idTenant = tenant.idTenant
,params = {
 pesq: req.params.pesq}
,erro = true
;

erro = !idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Conteudo Layer: controller Module: search.js' });

} else {

return Pool(db, search_(idTenant,params), res);

};
};