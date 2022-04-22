// build your `Project` model here
const db = require('../../data/dbConfig');

function getProject(){
    return db('projects');
}

module.exports = {
    getProject,
}