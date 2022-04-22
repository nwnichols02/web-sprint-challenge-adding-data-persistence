// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResource(){
    return db('resources');
}
function getResourceById(resource_id){
    return db('resource').where('resource_id', resource_id).first()
}

async function addResource(resource) {
    const [resource_id] = await db('resource')
        .insert(resource)
    return getResourceById(resource_id)
}

module.exports = {
    getResource,
    addResource
}