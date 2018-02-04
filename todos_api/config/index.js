const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.username}:${configValues.password}@ds225038.mlab.com:25038/kb_todos_api`;
    }
}