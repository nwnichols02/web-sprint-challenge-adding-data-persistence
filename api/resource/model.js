// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResource(){
    return db('resources');
}

module.exports = {
    getResource,
}