const env = require('dotenv');

module.exports = entity => {

    let root = process.env.USER+'_'+Date()
        , db = {
            profile: process.env.DB_PROFILE,
            dir: `${root}/.${process.env.DB_PROFILE}/scripts/`
        }
        ;
    

    file = {
        js: ['create.js', 'read.js', 'update.js', 'delete.js', 'search.js'],
        ejs: ['create.ejs', 'read.ejs', 'update.ejs', 'delete.ejs', 'search.ejs']
    };

    return {

        name: entity.name,

        namespace: entity.namespace,

        db: db,

        fields: entity.fields,
        
        layer: {

            model: {
                entity: entity.name,
                name: 'model',
                dir: `${root}/back_end/model/api/entity/${entity.name}/`,
                file: file.js,
                template: require('./lib/template/template'),
                fields: entity.fields
            },
    
            view: {
                entity: entity.name,
                name: 'view',
                dir: `${root}/views/entity/${entity.name}/`,
                file: file.ejs,
                template: require('./lib/template/template'),
                fields: entity.fields
            },
    
            controller: {
                entity: entity.name,
                name: 'controller',
                dir: `${root}/back_end/controller/api/entity/${entity.name}/`,
                file: file.js,
                template: require('./lib/template/template'),
                fields: entity.fields
            }

        }

    };

};