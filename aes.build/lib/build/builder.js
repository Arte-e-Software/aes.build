const build = {
    dirs: require('./build.dirs'),
    layers: require('./build.layers'),
    tables: require('./build.tables')
};

module.exports = (entity, success, error) => {

    build.dirs(entity, success, error);
    build.layers(entity, success, error);
    build.tables(entity, success, error);

};