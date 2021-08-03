const makeDir = require('../task/make.dir');

module.exports = (entity, success, error) => {

    makeDir(entity.layer.model.dir, success, error);
    makeDir(entity.layer.view.dir, success, error);
    makeDir(entity.layer.controller.dir, success, error);

};