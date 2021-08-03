const make = {
    dir: require('./dir'),
    layer: require('./layer')
};

module.exports = (Entity, success, error) => {

    make.dir(Entity, success, error);
    make.layer(Entity, success, error);

};