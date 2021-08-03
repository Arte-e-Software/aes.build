const build = {
    dirs: require('./build.dirs'),
    layers: require('./build.layers')
};

module.exports = (entity, success, error) => {

    build.dirs(entity, success, error);
    build.layers(entity, success, error);

};