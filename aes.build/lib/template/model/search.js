module.exports = data => {

    let model = data.comment + '\n//idPessoa chega em params.idPessoa, mas ainda não estou usando\m//** desconsidere esse comentário para Entity = Pessoa\n' + '\n'
        , fields =  data.fields
        , where
        , searchable = fields.map((field)=>{

            if(field.searchable){
                return field.name;
            };
    
        }).filter((field)=>{ return field != undefined; })
        ;

    fields = fields.map((field)=>{ return field.name +'\n' })
    where = searchable.map((field)=>{return field +' like '+ "'%${params.pesq}%'" });
    where = '('+ where.join('\nOR ') + ')\nAND idTenant = ${idTenant}';

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