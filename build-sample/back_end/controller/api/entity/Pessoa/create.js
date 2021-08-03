

/*

Entity: Pessoa
Layer: controller
Module: create.js

Namespace --------------------/

idPessoa
idTenant
nome
email
senha
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
,create_ = require('../../../../controller/entity/Pessoa/create')
,idTenant = tenant.idTenant
,params = {
 nome: req.params.nome
,email: req.params.email
,senha: req.params.senha
,DataCad: Date()
,isActive: 1
}
,erro = true
;

senha = require('crypto-js/sha256')(senha);

erro = !nome===!email===!senha===!DataCad===!isActive===!idTenant;

if (erro) {

return res.status(500).send({ erro: 'Erro em Entity: Pessoa Layer: controller Module: create.js' });

} else {

return Pool(db, create_(idTenant, params), res);

};
};