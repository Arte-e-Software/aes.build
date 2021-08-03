const create = require('../create/layer');

module.exports = (Entity, success, error) => {

    create(Entity.layer.model, Entity.namespace, success, error);
    create(Entity.layer.view, Entity.namespace, success, error);
    create(Entity.layer.controller, Entity.namespace, success, error);
    
};