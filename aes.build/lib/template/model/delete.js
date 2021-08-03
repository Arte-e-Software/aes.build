module.exports = data => {

    let model = data.comment + '\n//idPessoa chega em params.idPessoa, mas ainda não estou usando** desconsidere esse comentário para Entity = Pessoa\n' + '\n'
        , where = 'idTenant = ${idTenant} AND id'+ data.entity +' = ${params.id'+ data.entity +'}'
        ;

    model += 'module.exports = (idTenant, params) => {\n\nreturn `';
    model += `
    
BEGIN TRAN
UPDATE ${data.entity} SET
isActive=0 
WHERE ${where};

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR AS error
ROLLBACK TRAN
END   
`;

    return model + '\n`;\n\n};';

};