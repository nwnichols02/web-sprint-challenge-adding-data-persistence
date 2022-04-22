// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResource(){
    const resources = await db('resources')
    return resources;
}
function getResourceById(resource_id){
    return db('resources').where('resource_id', resource_id).first()
}

async function addResource(resource) {
    const [resource_id] = await db('resources')
        .insert(resource)
    return getResourceById(resource_id)
}

module.exports = {
    getResource,
    addResource
}