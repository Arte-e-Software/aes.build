module.exports = (entity, success, error) => {

    require(`../task/db.profile/${entity.db.profile}/create.entity`)(entity, success, error);

};