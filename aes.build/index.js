/**
 * 
 * erro e sucesso 
 * deverão ser mais inteligentes, 
 * registrando um arquivo de log
 * 
 * */

function error(err) { console.log(err); };
function success(msg) { };

// ---------------------------------------- //

const layer = require('./lib/template/layer')
    , build = require('./lib/build/builder')
    ;

((entity) => {

    console.log('\nBuilding @ ˜/' + process.env.USER + '_' + Date() + '\n\n');

    for (let i in entity) {

        build(layer(entity[i]), success, error);

    }

})(require('./entity.json').entity);
