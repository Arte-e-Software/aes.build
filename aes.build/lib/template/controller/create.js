module.exports = data => {

    let fields = []
        , erro = true
        , password = ''
        , params = {}
        ;

    for (let i in data.fields) {

        fields.push({ name: data.fields[i].name, required: !data.fields[i].null, default: data.fields[i].default });

        if (data.fields[i].form.type === 'password') {

            password = `${data.fields[i].name} = require('crypto-js/sha256')(${data.fields[i].name});`

        };

    };

    erro = fields.map((field) => {

        if (field.required) {

            return `!${field.name}`;

        } else {

            return `false`;

        };

    });

    params = fields.map((field) => { if (field.default) { return field.name +': '+ field.default +'\n' }; return field.name +': req.params.'+ field.name +'\n' });

    return `
${data.comment}

module.exports = (tenant, req, res) => {

let db = require('../../../../db/mssql/conn').db // Pegar esse carinha a partir do tenant na versão 2.0!
,Pool = require('../../../../db/mssql/pool')
,${data.module}_ = require('../../../../${data.layer}/entity/${data.entity}/${data.module}')
,idTenant = tenant.idTenant
,params = {\n ${params}}
,erro = true
;

${password}

erro = ${erro.join('===')}===!idTenant;

if (erro) {

return res.status(500).send({ erro: '${data.error}' });

} else {

return Pool(db, ${data.module}_(idTenant, params), res);

};
};`;

};