module.exports = data => {

    let fields = data.fields
        , model = data.comment + '\n'
        , where = '    idTenant = ${idTenant}\nAND id'+ data.entity +' = ${params.id'+ data.entity +'}'
        ;

    fields = fields.map((field) => {

        switch (field.type) {

            case 'String':
                return field.name+ " = '${params." + field.name + "}'\n";
                break;

            case 'Date':
                return field.name+ " = '${params." + field.name + "}'\n";
                break;

            case 'Boolean':
                return field.name+ ' = ${params.' + field.name + '}\n';
                break
                
            case 'Number':
                    return field.name+ ' = ${params.' + field.name + '}\n';
                    break

            default: 'DATATYPE ERROR'

        };

    }, fields);

    model += 'module.exports = (idTenant, params) => {\n\nreturn `';
    model += `
    
BEGIN TRAN
UPDATE ${data.entity} SET
 ${fields}WHERE
${where}

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR as error
ROLLBACK TRAN
END   
`;

    return model + '\n`;\n\n};';

};