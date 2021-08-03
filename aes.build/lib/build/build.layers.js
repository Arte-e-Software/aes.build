const makeFiles = require('../task/make.files');

module.exports = (entity, success, error) => {

    makeFiles(entity.layer.model, entity.namespace, success, error);
    makeFiles(entity.layer.view, entity.namespace, success, error);
    makeFiles(entity.layer.controller, entity.namespace, success, error);
    
};