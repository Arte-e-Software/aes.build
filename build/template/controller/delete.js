module.exports = data => {

    return `
${data.comment}

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
, Pool = require('../../../../db/mssql/pool')
, ${data.module}_ = require('../../../../${data.layer}/entity/${data.entity}/${data.module}')
, idTenant = tenant.idTenant
, params = {\n id${data.entity}: req.params.id${data.entity}, idPessoa: req.params.idPessoa}
, erro = true
;

erro = !id${data.entity}===!idPessoa===!idTenant;

if (erro) {

return res.status(500).send({ erro: '${data.error}' });

} else {

return Pool(db, ${data.module}_(idTenant,params), res);

};
};`;

};