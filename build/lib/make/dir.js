const create = require('../create/dir');

module.exports = (Entity, success, error) => {

    create(Entity.layer.model.dir, success, error);
    create(Entity.layer.view.dir, success, error);
    create(Entity.layer.controller.dir, success, error);

};