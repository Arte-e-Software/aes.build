module.exports = data => {

let  template = [
        
    ['model', 'view', 'controller'], // layers

    ['create', 'read', 'update', 'delete', 'search'], // modules

    [[ // templates

        // MODEL
        require('./model/create')(data),
        require('./model/read')(data),
        require('./model/update')(data),
        require('./model/delete')(data),
        require('./model/search')(data)], [

        // VIEW
        require('./view/create')(data),
        require('./view/read')(data),
        require('./view/update')(data),
        require('./view/delete')(data),
        require('./view/search')(data)], [

        // CONTROLLER 
        require('./controller/create')(data),
        require('./controller/read')(data),
        require('./controller/update')(data),
        require('./controller/delete')(data),
        require('./controller/search')(data)

    ]]];

    return template[2][template[0].indexOf(data.layer)][template[1].indexOf(data.module)];

};