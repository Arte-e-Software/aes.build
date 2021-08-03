module.exports = data => {

    let model = data.comment + '\n//idPessoa chega em params.idPessoa, mas ainda não estou usando\m//** desconsidere esse comentário para Entity = Pessoa\n' + '\n'
        , fields =  data.fields
        , where
        ;

    fields = fields.map((field)=>{ return field.name+'\n' });
    where = `    id${data.entity} = `+ '${params.id'+ data.entity +'}\nAND idTenant = ${idTenant}';

    model += 'module.exports = (idTenant, params) => {\n\nreturn `';
    model += `

SELECT
 id${data.entity}
,${fields}FROM
${data.entity}
WHERE 
${where};
`;

    return model + '\n`};';

};