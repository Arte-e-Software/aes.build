const createFile = require('./create.file');

module.exports = (layer, namespace, success, error) => {

    let dir = layer.dir
        , template = layer.template
        , data = {}
        , file
        ;

    for (let i in layer.file) {

        data = {

            entity: layer.entity,
            namespace: namespace,
            layer: layer.name,
            module: layer.file[i].split('.')[0],
            fields: layer.fields,
            comment: `
/*

Entity: ${layer.entity}
Layer: ${layer.name}
Module: ${layer.file[i]}

Namespace --------------------/

${namespace.join('\n')}

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: ${process.env.USER}_${Date()}

*/
    `,
    error: `Erro em Entity: ${layer.entity} Layer: ${layer.name} Module: ${layer.file[i]}`
    }
    ;

    file = dir + layer.file[i];
    createFile(file, template(data), success, error);

    };

};