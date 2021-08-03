module.exports = data => {

    let fields = data.fields
        , model = data.comment + '\n'
        ;

    fields = fields.map((field) => {

        switch (field.type) {

            case 'String':
                return "'${params." + field.name + "}'\n";
                break;

                case 'Date':
                return "'${params." + field.name + "}'\n";
                break;

            case 'Boolean':
                return '${params.' + field.name + '}\n';
                break
                
                case 'Number':
                    return '${params.' + field.name + '}\n';
                    break

            default: 'DATATYPE ERROR'

        };

    }, fields);

    fields = '${idTenant}\n,' + fields;

    model += 'module.exports = (idTenant, params) => {\n\nreturn `';
    model += `
    
BEGIN TRAN
INSERT INTO ${data.entity} VALUES
(
${fields});

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS id${data.entity}
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS id${data.entity}
ROLLBACK TRAN
END   
`;

    return model + '\n`;\n\n};';

};