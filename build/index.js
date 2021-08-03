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

const Entity = require('./entity/entity')
    , Make = require('./lib/make/make')
    ;

((entity) => {

    console.log('\n\n##########################################\n');
    console.log('Building on dir ./' + process.env.BUILD_ROOT);
    console.log('\n############################################\n\n\n------------\naes.tec.br\n------------');

    for (let i in entity) {

        Make(Entity(entity[i]), success, error);

    }

})(require('./entity/entity.json').entity);
