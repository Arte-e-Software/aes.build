const makeDir = require('../make.dir')
    , createTable = require('./create.table')
    ;

module.exports = (entity, success, error) => {

    let table = {
        dir: `${entity.db.dir}`,
        name: entity.name,
        fields: entity.fields
    };

    makeDir(table.dir, success, error);
    createTable(table, success, error);

};