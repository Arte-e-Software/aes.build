const createFile = require('../create.file');

module.exports = (table, success, error) => {

    let file = `${table.dir}/${table.name}.sql`
    , template = `--${JSON.stringify(table.fields)}`
    ;

    createFile(file, template, success, error);

};