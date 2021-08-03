let fs = require('fs-extra')
    ;

module.exports = (dir, success, error) => {

    try {

        if (!fs.existsSync(dir)) {

            fs.mkdirSync(dir, { recursive: true });

        }

    } catch (err) {

        error(err);

    }

};