module.exports = (entity, success, error) => {

    if (entity.db.profile === 'mssql') { // Com o tempo vamos ter profiles para mysql sqlite mongodb etc. Ajuda noix!! aes.tec.br@gmail.com

        let createEntity = require(`../task/${entity.db.profile}/create.entity`);
        createEntity(entity, success, error);

    } else {

        error({ erro: 'Profile do Banco de Dados inválido para criar a tabela ' + entity.name + '.' });

    }


};