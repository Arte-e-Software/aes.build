const createFile = require('../create.file');

module.exports = (table, success, error) => {

    let file = `${table.dir}/create.table.${table.name}.sql`
        , fields = table.fields
        , translate = {
            js: ['String', 'Date', 'Boolean', 'Number'],
            sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
        }
        , columns = fields.map((field) => {

            let name = field.name
                , nullable = field.null
                , length = field.length
                , type = translate.sql[translate.js.indexOf(field.type)]
                , isForeingKey = name.substring(0, 2) === 'id'
                ;

            if (isForeingKey) { type = 'INT'; } 

            if (length) { length = `(${length})`; } else { length = ''; };

            if (nullable) { nullable = 'NULL'; } else { nullable = 'NOT NULL'; };

            return `${field.name} [${type}]${length} ${nullable}\n`;

        })
        , template = `
    
-- Cria uma tabela chamada '${table.name}'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('${table.name}', 'U') IS NOT NULL
SELECT * INTO ${table.name}_aes_build_backup FROM ${table.name}

IF OBJECT_ID('${table.name}', 'U') IS NOT NULL
DROP TABLE ${table.name}
GO

-- Cria a tabela
CREATE TABLE ${table.name}
(
 id${table.name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,${columns}
);
GO
`;

    createFile(file, template, success, error);

};