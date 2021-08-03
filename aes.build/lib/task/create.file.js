let fs = require('fs-extra')
    ;

module.exports = (file, template, success, error) => {

    try {

        if (!fs.existsSync(file)) {

            fs.createFile(file, () => {

                fs.appendFile(file, template, success, error);

            }, error);

        }

    } catch (err) {

        error(err);
    }


};